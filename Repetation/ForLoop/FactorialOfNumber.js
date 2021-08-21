// taking user input from console 
const prompt = require("prompt-sync")();

var num= prompt("Enter a number : ");

let fact=1

while ( num > 1 )
{
  fact=fact * num
  num=num - 1
}

console.log("Factorial of number is : "+fact);