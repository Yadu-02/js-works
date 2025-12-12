var limit=100;

var output=""

for(let i=1;i<=limit;i++)
{
    if(i%2!=0)
    {
        output+=`${i}\t`
        
    }
}

console.log(output);
