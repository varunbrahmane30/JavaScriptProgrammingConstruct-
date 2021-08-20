 //install this package first to run 

 //npm install prompt-sync

// taking user input from console 
const prompt = require("prompt-sync")();

var num = prompt("Enter a Number between (0-9) :");

// check the word accordingly
if(num==0)
{
    console.log("Zero");
}
else if(num==1)
{
    console.log("One");
}
else if(num==2)
{
    console.log("Two");
}
else if(num==3)
{
    console.log("Three");
}
else if(num==4)
{
    console.log("Four");
}
else if(num==5)
{
    console.log("Five");
}
else if(num==6)
{
    console.log("Six");
}
else if(num==7)
{
    console.log("Seven");
}
else if(num==8)
{
    console.log("Eight");
}
else if(num==9)
{
    console.log("Nine");
}
else
{
    console.log("You've Entered wrong number, Enter bet'n (0-9) ");
}