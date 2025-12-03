var year=2024;

//     t     &&      t
if((year%100==0 && year%400==0)||(year%100!=0 && year%4==0))//2024 is not a cneturay year and divisible by 4
{
    console.log(`${year} is a leap year`);//true
    
}
else
{
    console.log(`${year} is not a leap year`);//false
    
}