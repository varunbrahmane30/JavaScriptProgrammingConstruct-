// taking user input from console 
const prompt = require("prompt-sync")();

var number = 3  //prompt("Enter a Number multiple of 1 (10,100,1000, ...) :");
switch(number)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("you've entered out of range number.");
        break;
}