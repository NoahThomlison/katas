const organizeInstructors = function (instructors) {
  // Put your solution here
  let organizedInstructorsObject = {};

  //loop to go through the instructors
  for (let i = 0; i < instructors.length; i++) {
    //if an course value is iOS
    if (instructors[i].course === "iOS") {
      //if an iOS key already exists push to value to array
      if (organizedInstructorsObject.iOS) {
        organizedInstructorsObject.iOS.push(instructors[i].name);
      }
      //else add a new key and value
      else {
        organizedInstructorsObject.iOS = [instructors[i].name];
      }
    }
    //if an course value is Web
    if (instructors[i].course === "Web") {
      //if an Web key already exists push to value to array
      if (organizedInstructorsObject.Web) {
        organizedInstructorsObject.Web.push(instructors[i].name);
      }
      //else add a new key and value
      else {
        organizedInstructorsObject.Web = [instructors[i].name];
      }
    }
    //if an course value is Blockchain
    if (instructors[i].course === "Blockchain") {
      //if an Blockchain key already exists push to value to array
      if (organizedInstructorsObject.Blockchain) {
        organizedInstructorsObject.Blockchain.push(instructors[i].name);
      }
      //else add a new key and value
      else {
        organizedInstructorsObject.Blockchain = [instructors[i].name];
      }
    }
  }
  return organizedInstructorsObject;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
