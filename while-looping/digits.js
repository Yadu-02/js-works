var number=523;

while(number!=0)//523!=0->T 52!=0->T 5!=0->T 0!=0->F
{
    let digit = number%10;//523%10=3 52%10=2 5%10=5

    console.log(digit);//3 ,2 ,5

    number = Math.floor(number/10);//523//10=52 52//10=5 5//10=0
    
}