var number=10;

var sum=0;

for(let i=1;i<number;i++)
{
    if(number%i==0)

    {
        sum=sum+i;

    }

}
console.log(sum==number?"Perfect":"Not perfect");
