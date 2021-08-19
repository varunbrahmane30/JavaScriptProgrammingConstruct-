// variable declaration and function call.
// call the function and store the returned value inside declared variable.
let number1 = getDiceNumber();
let number2 = getDiceNumber();
let sum = calSumOFDiceNUmber();

// function to get a dice number.
function getDiceNumber()
{
   return  Math.floor(Math.random() * 6) + 1;
   
}

// printing the two dice numbers respectively.
console.log("Dice 1 Number is : " + number1);
console.log("Dice 2 Number is : " + number2);

// function to calulate the sum of Two dice numbers.
function calSumOFDiceNUmber()
{
    return number1+number2;
}

// printing the final result.
console.log("Sum Of Dice Number is :" +sum);
//console.log("Sum Of Dice Number is : " + (number1+number2));


