var num1=12;

var num2=28;

var min= num1<num2?num1:num2

for(var i=1; i<=min ;i++)
{
    if(num1%i==0 &&num2%i==0)
    {
        var gcd=i
     }
}

console.log(gcd);



