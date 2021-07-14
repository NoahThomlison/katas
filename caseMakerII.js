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

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));


// thisIsAString remove all spaces, capitalize first letter after space
// ThisIsAString remove all spaces, capitalize firts letter in all words
// this_is_a_string 
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG 
// THIS_IS_A_STRING



























