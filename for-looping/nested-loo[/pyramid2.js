var number=6;

for(let r=1;r<=6;r++)
{
    let pattern="";
    for(let s=1;s<=number-r;s++)
    {
        pattern+="\t"
        
        
    }
    for(let c=1;c<=r;c++)
        {
            pattern+="*\t\t"
        }
    
    
    console.log(pattern);
    
}