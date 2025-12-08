var number=153;//0

var numberCopy=number;//153

var copy=number;//153

var sum=0;

var count=0;

while(number!=0)
{

    number=Math.floor(number/10);

    count++;

}

while(numberCopy!=0)//153!=0->t 15!=0->t 1!=0->t 0!=0->f
{

    let digit=numberCopy%10;//153%10=3  15%10=5 1%10=1
    
    let expon=digit**count; //3**3=27  5**3=125  1**3=1

    sum=sum+expon;//0+27=27  27+125=152   152+1=153

    numberCopy=Math.floor(numberCopy/10);//153//10=15 15//10=1 1//10=0

}

console.log(copy==sum?"Armstrong number":"not Armstrong number");




