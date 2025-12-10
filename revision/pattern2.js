for(let r=1;r<=4;r++)
{

    let pattern="";

    for(let c=1;c<=4;c++)
    {
        pattern+=c==r||c+r==5?"1\t":"0\t";
    }
    console.log(pattern);
    

}
