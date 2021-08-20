// taking user input from console 
const prompt = require("prompt-sync")();

var num = prompt("Enter a Number multiple of 1 (10,100,1000, ...) :");

// implementation
if(num==1)
    console.log("One");
else if(num==10)
    console.log("Ten");
else if(num==100)
    console.log("Hundred");
else if(num==1000)
    console.log("Thousand");
else if(num==10000)
    console.log("1 Lakh");
else if(num==1000000)
    console.log("Ten Lakh");
else if(num==10000000)
    console.log("Crore");
else
    console.log("you've enter wrong number.");