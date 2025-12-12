var number=29;

var isPrime=true;

for(let i=2;i<=number;i++)
{
    if(number%i==0 && i!==number)
    {
        isPrime=false;
        break;
    }

}
console.log(isPrime?"Prime":"Not prime");

