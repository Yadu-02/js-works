var num=1236576;

var sum=0;

while(num!=0)//123!=0->T 12!=0->T 1!=0->T 0!=0->F
{
    let digit=num%10;//123%10=3 12%10=2 1%10=1 

    num=Math.floor(num/10);//123//10=12 12//10=1 1//10=0

    sum=sum+digit;//0+1=1 1+2=3 3+3=6
}
console.log(sum);//6
