var num1=3;

var num2=3;

var num3=3;

if(num1>num2 && num1>num2)//num1>num2(true) && num1>num3(false)=> false
{
    console.log(`${num1} is the greatest`);
    
}
else if(num2>num1 && num2>num3)//num2>num1(false) && num2>num3(false)=> false
{
    console.log(`${num2} is the greatest`);
    
}
else if(num3>num2 && num3>num1)//num3>num2(true) && num3>num1(true)=> true
{
    console.log(`${num3} is the greatest`);
    
}
else if(num1==num2 && num2==num3)
{
    console.log(`all are equal`);
    
}