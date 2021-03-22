const sumLargestNumbers = function(data) {

let higestValue = data[0];
let secondHighestValue = data[0];

for (let i = 0; i <= data.length; i++){
  if (data[i] > higestValue){
    higestValue = data[i];
  }
}

for (let j = 0; j <= data.length; j++){
  if((data[j] >= secondHighestValue) && (data[j] < higestValue)){
    secondHighestValue = data[j]
  }
}

let sum = secondHighestValue + higestValue;
return (sum);

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));