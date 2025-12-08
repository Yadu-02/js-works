var num=153;

var sum=0;

while(num!=0)//153!=0 15!=0 1!=0 0!=0->F
{
    let digit=num%10;//153%10=3 15%10=3 1%10=1

    digitCube= digit**3;//3**3=27 5**3=15 1**3=1

    sum=sum+digitCube;//0+27=27 27+15=42

    num=Math.floor(num/10);

}
console.log(sum);
