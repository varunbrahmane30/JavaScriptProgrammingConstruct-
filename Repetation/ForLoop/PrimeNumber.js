// taking user input from console 
const prompt = require("prompt-sync")();

var number= prompt("Enter a Number to Check prime or not :");
for(let i=2; i<=number/2; i++)
{
  if  ((number%i) == 0 )
  {
    console.log(number + " is not a prime number.")
  }
  else
  {
      console.log(number + " is a prime number.")
  }  

}
  

