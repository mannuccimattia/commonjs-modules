function getPerson() {
  // const fullName = require("./names").fullNameObj();
  // console.log("fullName:", fullName);
  // const hobbies = require("./hobbies").hobbiesArr();
  // console.log("hobbies:", hobbies);

  const fullName = require("./names").fullNameObj("Mario", "Rossi");
  console.log("fullName:", fullName);
  const hobbies = require("./hobbies").hobbiesArr("Games", "Music", "Cooking");
  console.log("hobbies:", hobbies);

  return {
    fullName: `${fullName.firstName} ${fullName.lastName}`,
    hobbies
  }
}
console.log("Person:", getPerson());
