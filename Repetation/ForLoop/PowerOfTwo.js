 //npm install prompt-sync

// taking user input from console 
const prompt = require("prompt-sync")();

var number= prompt("Enter a Number :");
//let number= 4;

console.log("Table of Power of "+number+" is :")
for(let i=1 ;i<=10;i++)
{
    console.log(number*i);
}