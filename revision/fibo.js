var limit=25;

var prev=0;

var cur=1;

console.log(prev);
console.log(cur);

for(let i=2;i<=limit-1 ;i++)
{

    let next=prev+cur;

    console.log(next);

    prev=cur;
    cur=next;

    
}
