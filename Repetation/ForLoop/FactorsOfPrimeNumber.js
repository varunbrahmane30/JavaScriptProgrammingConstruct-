// taking user input from console 
const prompt = require("prompt-sync")();

var number= prompt("Enter a Number :");

let count=0;

for (let i=1;i<=number;i++)
{
	if ((number % i) == 0 )
	{
        count=count+1 
    }
}
let count2=0;
if (count == 2 )
{
    console.log("number is prime")
	console.log("prime factors are:") 

	num=number
	for (let i=1;i<=num;i++ )
	{
		if ((number % i) == 0 )
		{
			console.log(i)
        }
    }
}
else
{
    console.log("number is not prime")
}
