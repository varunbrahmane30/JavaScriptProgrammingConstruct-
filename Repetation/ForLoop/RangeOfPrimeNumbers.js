// taking user input from console 
const prompt = require("prompt-sync")();

var start= prompt("Enter Start number : ");
var end= prompt("Enter End number : ");

console.log("Prime numbers are :")

for (let i=start;i<=end;i++ )
{
    let count=0;
	let temp=i;
	for (let j=1;j<=temp;j++ )
	{
        if ( (i % j) ==0 )
		{
            count= count+1;
        }
    }
		
	if (count == 2 )
	{
        console.log(i);
    }
		
}
	
