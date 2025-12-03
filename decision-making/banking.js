var dbPin = 2020;

var dbBalance = 45000;

var userPin = 2020;

var amount = 2500;

if (dbPin == userPin)//2020 == 2020 (true)
{
    if (amount <= dbBalance)//2500<=45000 (true)
    {
        console.log(`Withdrawal successful`);//true

    }
    else {
        console.log(`Insufficient amount`);//false

    }
}
else {
    console.log(`Incorrect Pin`);//falseew

}