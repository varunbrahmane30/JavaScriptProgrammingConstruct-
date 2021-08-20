// taking user input from console 
const prompt = require("prompt-sync")();

var number = 10  //prompt("Enter a Number multiple of 1 (10,100,1000, ...) :");

switch(number)
{
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("1 Lakh");
        break;
    default:
        console.log("You've entered wrong input.");
        break;
}