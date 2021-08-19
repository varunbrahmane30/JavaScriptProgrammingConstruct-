let number = getDiceNumber();

function getDiceNumber()
{
   return  Math.floor(Math.random() * 6) + 1;
   
}

console.log("Dice Number is : " + number);
