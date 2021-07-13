let prompt = require("prompt-sync")();

// code below (replace this example)
console.log('Welcome to the number guesser game. Guess a number from 1 to what?')
let min = 0
let max = prompt('High end number: ')

let randomNumber = (Math.floor(Math.random() * (max - min + 1)) + min);

let numberOfGuesses = 0;
let answer = 0;

while (answer != randomNumber){
  answer = prompt("Guess a number: ");
  console.log("You answered: " + answer);
  
  if (answer > randomNumber){
    numberOfGuesses += 1
    console.log('you guessed too high')
  }
  
  else if (answer < randomNumber){
    numberOfGuesses += 1
    console.log('you guessed too low')
  }
}

console.log(`You guessed ${answer} and the correct answer was ${randomNumber}`)
