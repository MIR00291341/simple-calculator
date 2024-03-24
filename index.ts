#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter frist number", type: "number", name: "FristNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// conditioner statement If-Else.
if(answer.operator === "Addition"){
  console.log(answer.FristNumber + answer.SecondNumber)
}
else if(answer.operator === "Subtraction"){
  console.log(answer.FristNumber - answer.SecondNumber)
}
else if(answer.operator === "Multiplication"){
  console.log(answer.FristNumber * answer.SecondNumber)
}
else if(answer.operator === "Division"){
  console.log(answer.FristNumber / answer.SecondNumber)
}
else{
  console.log("Invalid Input")
}
