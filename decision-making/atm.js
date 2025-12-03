var dbPin = 2020;

var dbBalance = 45000;

var userPin = 2020;

var withdrawal = 25000;

if (dbPin == userPin)//2020==2020(true)
{
    if (withdrawal % 100 == 0)//25000%100==0(true)
    {
        if (withdrawal <= dbBalance)//25000<=45000(true)
        {
            console.log(`Withdrawal Successful`);//true

        }
        else {
            console.log(`Insufficient balance`);//false

        }
    }
    else {
        console.log(`Not a multiple of 100`);//false

    }
}
else {
    console.log(`Incorrect pin`);//false

}


