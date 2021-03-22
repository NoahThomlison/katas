
const arrayToObject = function(arr) {
  const obj = {};
  console.log(arr[2])

  for(j = 0 ; j < arr.length; j++){
  for(let i = 0; i < arr[i].length; i++){

    obj[arr[i]] = [arr[j]];
  }
}

  console.log(obj);
};

let deepArrayToObject = ([['a', 1],['b', 2],['c',['d', 4]]])

//=> { a: 1, b: 2, c: { d: 4 } }

arrayToObject(deepArrayToObject)
