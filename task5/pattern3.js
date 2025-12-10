for(let r=1;r<=5;r++)
{

    let pattern="";

    for(let c=1;c<=5;c++)
    {
        pattern+=c==r||c+r==6?"1\t":"0\t";
    }
    console.log(pattern);
    

}