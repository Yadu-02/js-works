var number=12345;
var count=0;

while(number!=0)
{
    let digit = number%10;//12345%10=5 1234%10=4 123%10=3 12%10=3 1%10=1

    number = Math.floor(number/10);//12345%10=3

    count++
    

}
console.log(count);
