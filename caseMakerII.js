const makeCase = function(input, type) {
  // Put your solution here

  let newString = '';
  let makeUpper = '';
  let makeFirstUpper = '';
  let noSpace = '';
  let checkChar = '';

  switch(type) {
case 'camel':
  makeFirstUpper = input.replace( / (.)/g, function($1) { return $1.toUpperCase(); });
  noSpace = makeFirstUpper.replace(/ /g, '');
  return(noSpace)
  break;

case 'pascal':
  makeFirstUpper = input.replace( / (.)/g, function($1) { return $1.toUpperCase(); });
  noSpace = makeFirstUpper.replace(/ /g, '');


  return(newString2)
  break;

case 'snake':
  newString = input.replace(/ /g, '_');
  return(newString);
  break;

case 'kebab':
  newString = input.replace(/ /g, '-');
  return(newString);
  break;

case 'title':
  break;

case 'vowel':
  break;

case 'consonant':
  newString = input.replace(/ /g, '-');
  makeUpper = newString.toUpperCase();
  return (makeUpper);
  break;

  /*
    // Replaces any - or _ characters with a space 
    .replace( /[-_]+/g, ' ')
    // Removes any non alphanumeric characters 
    .replace( /[^\w\s]/g, '')
    // Uppercases the first character in each group immediately following a space 
    // (delimited by spaces) 
    .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
    // Removes spaces 
    .replace( / /g, '' );
*/


  /*
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
  */
  return(newString);  
}
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));

console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));