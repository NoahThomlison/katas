const makeCase = function(input, type) {
  // Put your solution here
  let newString = '';
  let index = 0;
  let spaceLocation = input.indexOf(' ');
  let i = 0;


  for(i = 0; i < input.length; i++){
    if(input[i]===' '){
      newString[i+1] = input[i+1].toUpperCase() 
      console.log(newString)
    }
    else{
      newString[i] = input[i]
      console.log(newString)
    }
  }
  console.log(newString)


  // newString[i] = input[input.indexOf(' ')+1].toUpperCase()

  // for(i = 0; i < input.length; i++){
  //   if(i === input[i].indexOf(''))
  //   newString[i] = input[input.indexOf(' ')+1].toUpperCase()

  // }
  
  // console.log(test)
  // while(input.indexOf(' ') > -1){
  //   test = input.toUpperCase(input.indexOf(' ')+1)
  // }

  // // for(let i = 0; i < input.length; i++){
  // //   if(input[i] === ' '){
  //     spaceLocation[i] = 1
  //   }
  //   else{
  //     spaceLocation[i] = 0
  //   }
  // }
  // if(type === 'camel'){
  //   i = 0;
  //   // messageFiltered = input.replace(/ /g,"")
  //   while(newString.length < input.length){

  //     if(spaceLocation[i] === 1){
  //       newString = newString + input[i+1].toUpperCase()
  //       console.log('ding')
  //     }
  //     else{
  //       newString = newString + input[i]
  //     } 
  //     i++
   
  //   }
  // }  
  return(newString);  
}


console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));

// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));