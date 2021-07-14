const makeCase = function(input, type)  {
  splitString = input.split(' ')

  switch (type){
    case 'camel':
      answer = []
      answer[0] = splitString[0]
      for (let i = 1; i < splitString.length; i++){
        answer[i] = capitalizeFirstLetter(splitString[i])
      }
      return (answer.join(""))
    break;

    case 'pascal':
      answer = []
      for (let i = 0; i < splitString.length; i++){
        answer[i] = capitalizeFirstLetter(splitString[i])
      }
      return (answer.join(""))
    break;

    case 'snake':
      return (splitString.join("_"))
    break;

    case 'kebab':
      return (splitString.join("-"))
    break;

    case 'title':
      answer = []
      for (let i = 0; i < splitString.length; i++){
        answer[i] = capitalizeFirstLetter(splitString[i])
      }
      return (answer.join(" "))
    break;

    case 'vowel':
      answer = []
      lettersToCap = ['a', 'e', 'o', 'i', 'u', 'y']
      for (let i = 0; i < splitString.length; i++){
        answer[i] = capitalizeBasedOnArray(splitString[i], lettersToCap) 
      }
      return (answer.join(" "))
    break;

    case 'consonant':
      answer = []
      lettersToCap = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
      for (let i = 0; i < splitString.length; i++){
        answer[i] = capitalizeBasedOnArray(splitString[i], lettersToCap) 
      }
      return (answer.join(" "))
    break;

  } 
}

function capitalizeFirstLetter(input){
  let newString = ''
  newString += input[0].toUpperCase()
  for (let i = 1; i < input.length; i++){
    newString += input[i]
  }
  
  return(newString)
}

function capitalizeBasedOnArray(input, capArray){
  let newString = ''
  let capFlag
  for (let i = 0; i < input.length; i++){
    capFlag = 0
    for (let j = 0; j < capArray.length; j++){
      if(input[i] == capArray[j]){
        newString += input[i].toUpperCase()
        capFlag = 1;
      }
    }
    if (capFlag == 0){
      newString += input[i]
    }
  }
  
  return(newString)
}

//camelcase
if(makeCase("this is a string", "camel") == 'thisIsAString'){
  console.log('camelcase: correct')
}
else{console.log('camelcase: incorrect')}

//pascalcase
if(makeCase("this is a string", "pascal") == 'ThisIsAString'){
  console.log('pascalcase: correct')
}
else{console.log('pascalcase: incorrect')}

//snakecase
if(makeCase("this is a string", "snake") == 'this_is_a_string'){
  console.log('snakecase: correct')
}
else{console.log('snakecase: incorrect')}

//kebabcase
if(makeCase("this is a string", "kebab") == 'this-is-a-string'){
  console.log('kebabcase: correct')
}
else{console.log('kebabcase: incorrect')}

//title
if(makeCase("this is a string", "title") == 'This Is A String'){
  console.log('title: correct')
}
else{console.log('title: incorrect')}

//vowel
if(makeCase("this is a string", "vowel") == 'thIs Is A strIng'){
  console.log('vowel: correct')
}
else{console.log('vowel: incorrect')}

//consonant
if(makeCase("this is a string", "consonant") == 'THiS iS a STRiNG'){
  console.log('consonant: correct')
}
else{console.log('consonant: incorrect')}



// console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));





