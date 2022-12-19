const prompt = require("prompt-sync")();

// var num = parseFloat(prompt("enter name : "));
// var num1 = parseFloat(prompt("enter name : "));
// var num = prompt("enter name : ");
// var num1 = prompt("enter name : ");

// console.log("this is my real name:", num, num1);
const options = ["Rock", "Paper", "Scissors", "wood", "momey"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
console.log(getComputerChoice());
