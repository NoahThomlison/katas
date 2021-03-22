const repeatNumbers = function(data) {
  // Put your solution here
  newString = "";
  
  for (let i = 0; i < data.length; i++){
    for (j = 0; j < data[i][1]; j++){
      newString = newString + (data[i][0]);
    }

    if((data.length - i) > 1){
      newString = (newString + ", ");
    }
  }

  return(newString);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));