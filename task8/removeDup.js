var word="javascript"

var rep=false

var result=""+word.at(0);

for(let i=1;i<word.length;i++)
{
    for(let j=0;j<=i;j++)
    {
        if(word.at(i)==result.at(j))
        {
            rep=true;
           
        }
        else{
            rep=false;
        }


    }
    if(rep!=true)
    {
        result=result+word.at(i)
    }
}



console.log(result);
