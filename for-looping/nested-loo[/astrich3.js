for(let r=5;r>=1;r--)
{
    let pattern="";
    for(let c=1;c<=r;c++)
    {
        pattern+="*\t";

    }
    console.log(pattern);
    
}


for(let r=1;r<=5;r)
{
    let pattern="";
    for(let c=1;c<=5;c++)
    {
        if(r+c<=5){pattern+="*\t";
}
    }
    console.log(pattern);
    
}

