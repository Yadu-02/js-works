var cibil=420;

// 420  >= 300 &&  420<580
//   T        &&     T
if(cibil>=300 && cibil<580)
{
    console.log(`POOR`);//TRUE
    
}
else if(cibil>=580 && cibil<670)
{
    console.log(`FAIR`);//FALSE
    
}
else if(cibil>=670 && cibil<740)
{
    console.log(`GOOD`);//FALSE
    
}
else if(cibil>=740 && cibil<800)
{
    console.log(`VERY GOOD`);//FALSE
    
}
else if(cibil>=800 && cibil<=850)
{
    console.log(`EXCELLENT`);//FALSE
    
}
else
{
    console.log(`INVALID`);
    
}
