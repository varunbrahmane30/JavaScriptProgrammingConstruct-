// taking user input from console 
const prompt = require("prompt-sync")();

var number = 1 //prompt("Enter a Number multiple of 1 (10,100,1000, ...) :");

switch(number)
{
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 0:
        console.log("Zero");
        break;
    default:
        console.log("you've entered out of range number.");
        break;
}