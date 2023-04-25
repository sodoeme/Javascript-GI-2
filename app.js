const prompt = require("prompt-sync")({ sigint: true });

// VERY EASY
function min(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// EASY
students = [
  { lastName: "odoemena", firstName: "success", age: 22 },
  { lastName: "ford", firstName: "nathaniel", age: 23 },
  { lastName: "doe", firstName: "john", age: 24 },
];
console.log(
  `Hello, my name is ${
    students[1].firstName + " " + students[1].lastName
  } and I'm ${students[1].age} years old.`
);

//MEDIUM
function month() {
  console.log("Enter a number 1-12");
  let input = Number(prompt());
  if (input > 12 || input < 1) {
    console.log("invalid number");
    return;
  }

  switch (input) {
    case 1: console.log("Number: 1, Month: January")
      break;
    case 2: console.log("Number: 2, Month: Febuary")
      break;
    case 3: console.log("Number: 3, Month: March")
      break;
    case 4: console.log("Number: 4, Month: April")
      break;
    case 5: console.log("Number: 5, Month: May")
      break;
    case 6: console.log("Number: 6, Month: June")
      break;
    case 7: console.log("Number: 7, Month: July")
      break;
    case 8: console.log("Number: 8, Month: August")
      break;
    case 9: console.log("Number: 9, Month: September")
      break;
    case 10: console.log("Number: 10, Month: October")
      break;
    case 11: console.log("Number: 11, Month: November")
      break;
    case 12: console.log("Number: 12, Month: December")
      break;
  }
}

// HARD
tom = {height: 9, mass: 8}
jerry = {height: 10, mass: 45} 
tomBMI = tom.mass/(tom.height**2)
jerryBMI = jerry.mass/(jerry.height**2)
isTom = tomBMI > jerryBMI
console.log("Is Tom’s BMI higher than Jerry’s? ", isTom)
console.log(tomBMI, "  ", jerryBMI)



for(var i =1; i<13; i++){
    month(i)
}