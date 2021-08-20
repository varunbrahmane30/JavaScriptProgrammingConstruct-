                            //args= 0         1         2  3           
// takes command line argument  [ node .\DayOFMonth.js 20  5 ]
const args = process.argv;

let day= args[2];   // takes the 20 here
let month=args[3];  // takes the 5 here

// implementation to get the result true or false. 
if (( (day <= 20 && month <= 6) && (month >=3 && day <= 20) && (day<31) ))
{
    console.log("True");
}
else
{
    console.log("False");
}
       