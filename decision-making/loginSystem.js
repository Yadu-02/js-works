var dbPassword="Password@123"

var dbOtp="4959"

var userPassword="Password@123"

var userOtp="3831"

if(dbPassword==userPassword)//if Password@123==Password@123(false)
{
    if(dbOtp==userOtp)//if 4959=3831(false)
    {
        console.log(`Login successful`);
        
    }
    else//(true)
    {
        console.log(`OTP is invalid`);
        
    }
}
else//ignore
{
    console.log(`Password is incorrect`);
    
}