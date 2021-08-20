// taking user input from console 
const prompt = require("prompt-sync")();

const a = prompt("Enter Number 1 :");
const b = prompt("Enter Number 1 :"); 
const c = prompt("Enter Number 1 :");

a_value= ((a + b) * c)
b_value= (a % (b + c)) 
c_value= ((c + a) / b) 
d_value= (a * (b + c)) 

console.log("value of A :"+ a_value)
console.log("value of B :"+ b_value)
console.log("value of C :"+ c_value)
console.log("value of d :"+ d_value)

if(a_value > b_value  &&  a_value > c_value  &&  a_value > d_value)
{
    console.log(a_value +" is greater.")
}
else if( b_value > a_value  &&  b_value > c_value && b_value > d_value)
{
    console.log(b_value +" is greater.")
}
else if(c_value > a_value  &&  c_value > b_value && c_value > d_value)
{
    console.log(c_value +" is greater.")
}
else
{
    console.log(d_value +" is greater.")
}