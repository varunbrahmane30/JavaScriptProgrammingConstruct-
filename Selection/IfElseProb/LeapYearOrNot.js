// taking user input from console 
const prompt = require("prompt-sync")();

var year = prompt("Enter a Year to check :");

//ternury operator
// if year % 100 -> true then year % 400 is checked 
//                   otherwise year % 4 checked 
if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
{
    console.log("It's a Leap year");
}
else
{
    console.log("It's not a Leap year"); 
}