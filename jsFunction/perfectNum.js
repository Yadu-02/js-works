function perfectNUm(num)
{
    var sum=0;

    for(let i=1;i<num;i++)
    {
        if(num%i==0)
        {
            sum+=i
        }
    }
    

    return sum==num?"perfect number":"not perfect number"
}

console.log(perfectNUm(20));
console.log(perfectNUm(28));
console.log(perfectNUm(25));
