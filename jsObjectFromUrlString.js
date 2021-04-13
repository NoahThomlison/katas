const urlDecode = function(text) {
  // Put your solution here
  //remove all %20 and replace with spaces
  let removedUrlText = text.replace(/%20/g, ' ');
  let value = [];
  let key = [];
  let j = 0;
  let index = removedUrlText.match(/o/g)||[].length
  let answer = {};
  

  return(index)
/*
  while(index > 0){

    index = removedUrlText.indexOf("=")
    console.log(removedUrlText.indexOf("="))
    value[j] = removedUrlText.slice(0, index);
    key = removedUrlText.slice(0, index)
    value = removedUrlText.slice(index+1)
    answer[key[j]] = value[j];
    j = j + 1;
  }


  let removedUrlText = text.replace(/%20/g, ' ');
  let index = removedUrlText.indexOf("=")
  let key = removedUrlText.slice(0, index);
  let value = removedUrlText.slice(index+1)
  let answer = {};
  answer[key] = value;

let andIndex = 1;
while(index > 0){
  
  removedUrlText = text.replace(/%20/g, ' ');
  index = removedUrlText.indexOf("=")
  key = removedUrlText.slice(0, index);
  value = removedUrlText.slice(index+1)
  let answer = {};
  answer[key] = value;
  return(answer)

remove all url symbols
find number of = signs
*/


};



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
