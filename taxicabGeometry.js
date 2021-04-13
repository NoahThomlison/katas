const blocksAway = function(directions) {
  //there is a vector array which shows which direction the taxi is pointing. If the incoming value is a direction the
  //vector array is pivoted appropriatly. If it is a number it is multiplied with the currect vector array and added to
  //the total in movement array. 

  let movementArray = [0, 0];
  let EndingPoint = {};
  const vectorArray = [[1, 0], [0, -1], [-1, 0], [0, 1]];
  let vectorIndex

  //setting initial direction condition
  if((directions[0]) == 'right'){
    vectorIndex = 0;
  }
  if(directions[0] == 'left'){
    vectorIndex = 3;
  }

  for(let i = 1; i < directions.length; i++){
    //change direction based on right
    if(directions[i]==='right'){
      //reset vectorIndex if out of bounds
      if((vectorIndex + 1) > 3){
        vectorIndex = vectorIndex - 4;
        }
    vectorIndex = vectorIndex + 1;
    }
    //change direction based on left
    else if(directions[i]==='left'){
      //reset vectorIndex if out of bounds
      if((vectorIndex - 1) < 0){
        vectorIndex = vectorIndex + 4;
      }
    vectorIndex = vectorIndex - 1;
    }

    else{
      //sum up x movements
      movementArray[0] = movementArray[0] + (vectorArray[vectorIndex][0] * directions[i]);
      //sum up y movements
      movementArray[1] = movementArray[1] + (vectorArray[vectorIndex][1] * directions[i]);
    }
  }

  EndingPoint = {east: movementArray[0], north: movementArray[1]};
  return(EndingPoint);
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));