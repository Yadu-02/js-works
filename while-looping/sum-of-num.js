var limit=4;

var sum=0;

var i=1;

while(i<=4)//1<=4 T-> 2<=4 T ->3<= T -> 4<=4 T -> 5<=4 F
{
    sum=sum+i;//sum=0+1=1 sum=1+2=3 sum=3+3=6 sum=6+4=10
    i++;//1,2,3,4,
}
console.log(sum);//10
