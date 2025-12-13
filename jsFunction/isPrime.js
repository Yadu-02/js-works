function isPrime(num)
{
    var isPrime=true

    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            isPrime=false;
            break;
        }


    }

    return isPrime
}


console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(9));



