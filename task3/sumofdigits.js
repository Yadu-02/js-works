var num=53421;

var sum=0;

while(num!=0)
{

    var digit=num%10;

    sum=sum+digit;

    num=Math.floor(num/10);

}

console.log(`Sum of digits=${sum}`);