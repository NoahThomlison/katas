const numberOfVowels = function(data) {
  // Put your solution here
  let vowelCount = 0;
  for(let i of data){
    if((i ==='a') || (i ==='e') || (i ==='i') || (i ==='o') || (i ==='u')){
      vowelCount =  vowelCount + 1;
    }
  }
  return(vowelCount);
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));