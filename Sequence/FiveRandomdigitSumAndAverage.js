// variable declaration
let number=0;
var noOfNum=5;
let sum=0;

// to get a 5 random numbers.
console.log("Numbers are : ");
for(var i=1;i<=5;i++)
{
    sum = sum + getNumber();
}

// function to get a number;
function getNumber()
{
    number = Math.floor(Math.random() * 100);
    console.log(number);
    return number
}

// calculate the average.
let avg = sum/noOfNum;

// printing the average and sum.
console.log("Sum of number is : " + sum);
console.log("Average of Number is : " + avg);
