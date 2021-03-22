const urlEncode = function(text) {
  // Put your solution here
  textUpdated = [];
  for (let i = 0; i < text.length; i++){
    if ((text[i] == " ") && ((i > 0) && (i < (text.length-1)))){
      textUpdated[i] = "%20";
    }
    else{
      textUpdated[i] = text[i];
    };
  };

return(textUpdated.join(''));
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));