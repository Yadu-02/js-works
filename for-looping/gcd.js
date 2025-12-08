var num1=12;

var num2=48;

console.log(`min= ${num1<num2?min=num1:min=num2}`);

for(let i=1; i<=min ;i++)
{
    if(num1%i==0 &&num2%i==0)
    {
        console.log(i);
     }
}