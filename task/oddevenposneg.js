var num=-13;


if(num>0&&num%2==0)
{
    console.log(`${num} is positive and even`);
    
}
else if(num<0&&num%2==0)
{
    console.log(`${num} is negative and even`);

}
else if(num>0&&num%2!=0)
{
    console.log(`${num} is positive and odd`);
}
else if(num<0&&num%2!=0)
{
    console.log(`${num} is negative and odd`);
}
else
{
    console.log(`${num} is zero`);
}