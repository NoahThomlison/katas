const multiplicationTable = function(maxValue) {
  // Your code here
  let table = '';
  for(let i = 0; i < maxValue; i++){
    //table.push();
    for(let j = 0; j < maxValue; j++){
      table = table + ' ' + ((j+1)*(i+1)) ;
    }
    table = table + '\n';
  }
  return (table);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
