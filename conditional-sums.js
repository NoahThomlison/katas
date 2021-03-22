const conditionalSum = function(values, condition) {
  // Your code here
let sum = 0;

  for (let i = 0; i <= values.length; i++){
    if((condition === 'odd') && (values[i]%2 === 1)){
      sum = sum + values[i];
    }
    
    else if((condition === 'even') && (values[i]%2 === 0)){
      sum = sum + values[i];
    }

    else(return(0)
  }

  return (sum);
}




console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([1, 1, 1, 1, 1], "odd")); 
console.log(conditionalSum([1, 1, 1, 1, 2], "even")); 
console.log(conditionalSum([13, 88, 12, 44, 99], "odd"));
console.log(conditionalSum([], "odd"));