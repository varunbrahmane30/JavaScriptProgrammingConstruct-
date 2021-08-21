
let tcount=0;
let hcount=0;
let i=1;
let wcnt=11;

while (i <= 22 )
{
	i= i+1
    var random = Math.floor(Math.random() * 10) % 2;
	if ( random == 1 )
	{
		console.log("Head");
		hcount= hcount+1
    }
	else
    {
        console.log("Tail");
		tcount= tcount+1 
    }
}

if ( hcount == wcnt )
{
    console.log("Head count is : " +hcount)
	console.log("winner !!");
}
else
{
    console.log("Tail count is : " +tcount)
    console.log(" winner !! ");
}