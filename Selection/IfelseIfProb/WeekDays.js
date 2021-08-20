// taking user input from console 
const prompt = require("prompt-sync")();

console.log(" \n1 -> Sunday, 2 -> Monday , ..... ,  7-> Saturday ")
var num = prompt("Enter a Number between (0-7) :");

// implementation 
if(num==1)
{
    console.log("Sunday");
}
else if(num==2)
{
    console.log("Monday");
}
else if(num==3)
{
    console.log("Tuesday");
}
else if(num==4)
{
    console.log("Wednesday");
}
else if(num==5)
{
    console.log("Thursday");
}
else if(num==6)
{
    console.log("Friday");
}
else if(num==7)
{
    console.log("Saturday");
}
else
{
    console.log("Enter the correct number");
}