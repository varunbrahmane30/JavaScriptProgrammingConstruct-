function isPalindrome(num)
{
    const isNegative=num<0?true:false;
    if(isNegative)
    {
        return false;
    }
    const Check=num;
    let reverse=0;
    while(num>0)
    {
        reverse=(reverse*10)+(num%10);
        num=parseInt(num/10);
    }
    return reverse==Check;
}
var result=isPalindrome(121);
if(result)
{
    console.log("Number is Palindrome");
}
else
{
    console.log("Number is Not Palindrome");
}