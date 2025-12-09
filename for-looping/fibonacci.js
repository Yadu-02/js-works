var limit=10;

var prev=0;

var cur=1;

console.log(prev);//0
console.log(cur);//1

for(let i=2;i<=limit-1 ;i++)//2 3 4 5 6 7 8 9
{

    let next=prev+cur;//0+1=1 1+1=2 1+2=3 2+3=5 3+5=8 5+8=13 8+13=21 13+21=34

    console.log(next);

    prev=cur;
    cur=next;

    
}
