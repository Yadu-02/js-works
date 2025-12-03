var num1=23;

var num2=20;

var num3=40;

if(num1>num2 && num1>num3)
{
    console.log(`${num1} is the greatest`);
    
}
else if(num2>num3 && num2>num1)
{
    console.log(`${num2} is the greatest`);
    
}
else if(num3>num1 && num3>num2)
{
    console.log(`${num3} is the greatest`);
    
}
else if(num1==num2 && num1==num3)
{
    console.log(`all are equal`);
    
}
else
{
    console.log(`invalid`);
    
}