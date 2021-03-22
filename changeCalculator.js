const calculateChange = function(total, cash) {
  // Your code here
  let totalChange = cash - total;
  const numericalChangeAmounts = [20, 10, 5, 1, .25, .10, .05, .01];
  const wordChangeAmounts = ['twentyDollars', 'tenDollars', 'fiveDollars', 'twoDollars', 'oneDollars', 'quarter', 'dime', 'nickel', 'penny'];
  let changeObject = {}
  let denominationIndex = 0;
  let howMany = 0;

  while (denominationIndex < wordChangeAmounts.length){
    while (totalChange >= numericalChangeAmounts[denominationIndex]){
      totalChange = totalChange - numericalChangeAmounts[denominationIndex]
      howMany = howMany + 1;
    };
    if(howMany != 0){
    changeObject[wordChangeAmounts[denominationIndex]] = howMany;
    };
  denominationIndex = denominationIndex + 1;
  howMany = 0;
  };
return(changeObject)
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));