var limit=10;

var sum=0;

var i=1;

while(i<=limit)//i=1<=5 t i=2<=5 t i=3<=5 t i=4<=5 t i=5<=5 t i=6<=5 F
{
    if(i%2==0)//i=1%2==0 F i=2%2==0 T i=1%3==0 F i=4%2==0 T i=5%2==0 F
    {
        sum=sum+i;//0+2=2 2+4=6
    }

    i++;
        

        
  
}
console.log(sum);//6
