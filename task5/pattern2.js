for(let r=1;r<=4;r++)
{

    let pattern="";

    for(let c=1;c<=4;c++)
    {
        pattern+=c==1||r==4||c==4||r==1?"R":"S";
    }
    console.log(pattern);
    

}