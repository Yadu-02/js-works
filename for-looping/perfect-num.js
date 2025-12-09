var number=6;

var sum=0;

for(let i=1;i<number;i++)//1 2 3 4 5
{
    if(number%i==0)//1 2 4 

    {
        sum=sum+i;

    }

}
console.log(sum==number?"Perfect number":"Not perfect number");
