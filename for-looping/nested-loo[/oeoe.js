for(let r=1;r<=3;r++)
{
    let pattern=""

    for(let c=1;c<=4;c++)
    {
        pattern+=c%2==0?"E\t":"O\t"
        
    }
    console.log(pattern);
    
}