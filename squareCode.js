const squareCode = function(message) {
  //variable to determine number of characters without spaces
  const messageFiltered = message.replace(/ /g,"")
  //determine square root of lenght of input
  const sqRoot = (Math.ceil(Math.sqrt(messageFiltered.length)));
  //varible to hold new squared code
  let newMessage = '';
  //counter to index multiples of the squareroot
  let i = 0;
  //counter to offset or bias the squareroot multiple to progress up the string
  let j = 0;
  //character count index to know when all letters have been accounted for
  let count = 0;

  while(count < (messageFiltered.length)){
    //if the result of the multiple and the bias of the sq root is outside bounds for the message reset the multiple and index the bias
    if ((sqRoot*i+j) > messageFiltered.length){
      newMessage = newMessage + ' '
      j++
      i = 0;
    }

    //else if to check if the indexed spot contains a valid character. If it is a blank do not add to
    //new message
    else if(messageFiltered[(sqRoot*i+j)] !== undefined){
      newMessage = newMessage + messageFiltered[(sqRoot*i+j)];
      //index word count
      count++
      i++
    }

    //if within range but also undefined index i
    else{
      i++
    }
  }
  return(newMessage)
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));