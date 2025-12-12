var limit=200;

var count=0;

var output=""

for(let i=1;i<=limit;i++)
{

    if(i%3==0 && i%5==0)
    {
        output+=`${i}\t`
        count++;
        
    }

}
console.log(output);

console.log(`count=${count}`);



