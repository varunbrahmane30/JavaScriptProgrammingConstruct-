// taking user input from console 
const prompt = require("prompt-sync")();

const n = prompt("Enter a value  :");


let i=1;
while (i <= 9 )
{
    i= i + 1;
    result=n ** i;
    if ( result <= 256 )
    {
        console.log(n +" to the "+i+ " power is " + result)
    }
    else
    {
        break;
    }
           
}
          
