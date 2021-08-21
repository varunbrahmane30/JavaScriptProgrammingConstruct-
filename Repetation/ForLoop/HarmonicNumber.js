// taking user input from console 
const prompt = require("prompt-sync")();

var number= prompt("Enter a Number :");
if(number!=0)
{
        let harmonicNum =1;
        for (let i = 2; i <= number; i++)
        {
            harmonicNum += 1 / i;
        }
        console.log('The nth harmonic value is : '+harmonicNum);
}
else
{
    console.log('The value should not be zero');
}
