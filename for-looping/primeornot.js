var number=7;

var isPrime=true;//initializing as true

for(let i=2;i<number;i++)//checking numbers from 2 to (number-1) if its mod is 0
{
    
    if(number%i==0)
    {

        isPrime==false;
        break;
    }
}
console.log(isPrime?"prime Number":"Not Prime number");
