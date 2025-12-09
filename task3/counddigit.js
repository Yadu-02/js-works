var num=1234;

var count=0;

while(num!=0)
{

    var digit=num%10;

    count++;

    num=Math.floor(num/10);
}
console.log(`number of digits=${count}`);