/*
read 3 marks mark1,mark2,mark3 each out of 50 */
var mark1=42;

var mark2=45;

var mark3=40;

var total= mark1+mark2+mark3;//total= 30+35+40=127

console.log(`TOTAL =${total}`);


if(total>140 && total<=150)//127>=140 (F)and 127<=150
{
    console.log(`GRADE A`);
    
}
else if(total>130 && total<=140)//127>130 (F) and 127<=140
{
    console.log(`GRADE B`);
    
}
else if(total>120 && total<=130)//127>120(t) and 127<=130(t)
{
    console.log(`GRADE C`);//true
    
}
else
{
    console.log(`FAILED`);
    
}