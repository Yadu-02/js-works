var num = 4;

if (num % 15 == 0)//If every condition is true 

//4%15==0(false)\
{
    console.log(`PINGPONG`);
}


else if (num % 5 == 0)//if divisible by 5
// 4%5==0(false)
{
    console.log(`PONG`);
    

}
else if (num % 3 == 0) //if divisible by 3 
//4%3==0(false)
{
    console.log(`PING`);

}
else //4 is not divisible by any 
{
    console.log(`INVALID`);

}