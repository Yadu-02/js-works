function fact(num)
{
    var fact=1;

    for(let i=1;i<=num;i++)
    {

        fact*=i

    }
    return fact
}

console.log(fact(5));
