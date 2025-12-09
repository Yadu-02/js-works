var number=7;

var isPrime=true;//initializing as true

for(let i=2;i<number;i++)//checking numbers from 2 to (number-1) 
{
    
    if(number%i==0)//7%2==0 ->false  7%3==0->f 7%4==0 ->f 7%5==0 ->f 7%6==0 ->f
    {

        isPrime==false;//its a prime numbet
        break;//break out of the loop 
    }
}
console.log(isPrime?"prime Number":"Not Prime number");
