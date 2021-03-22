const camelCase = function(input) {
  // Your code here
  let newString = '';
  let makeUpper = '';
  let checkChar = '';

  for (i = 0; i < input.length; i++){
    checkChar = input.charAt(i);
    if(checkChar == ' '){
      makeUpper = input[i+1].toUpperCase()
      i = i + 1;
      newString = newString + makeUpper;
    }
    else{
    newString = newString + input[i].charAt();
    } 
  }
  return(newString);  
}
  
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));