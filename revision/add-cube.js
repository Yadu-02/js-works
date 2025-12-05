var num=200;

var sum=0;

while(num!=0)
{
    let digit=num%10;

    digitCube= digit**3;

    sum=sum+digitCube;

    num=Math.floor(num/10);

}

console.log(`Sum of cubes of digits is ${sum}`);