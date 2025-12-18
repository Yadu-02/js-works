var numbers=[2,3,4,5,6,7,7,8,3,9,9,7]

// minNumber
// maxNumber
// sum of numbers
// sum of odd numbers
// sum of even numbers
// diviors of 3
// avg of numbers
// most frequent number

var minNumber=numbers[0]
var maxNumber=0
var sumOfNumbers=0
var sumofEven=0
var sumofOdd=0
var divisorOf3=""
var average=0


for(let i of numbers)
{
    if(minNumber>numbers[i])
    {
        minNumber=numbers[i]
    }
    
    else if(maxNumber<numbers[i])
    {
    maxNumber=numbers[i]
    }
    else if(numbers[i]%2==0)
    {
        sumofEven+=numbers[i]
    }
    else if(numbers[i]%2!=0)
    {
        sumofOdd+=numbers[i]
    }

    else if(numbers[i]%3==0)
    {
        divisorOf3+=numbers[i]+" "
    }
    sumOfNumbers+=numbers[i]
    



}

console.log(`max=${maxNumber}  \n min=${minNumber}  \n sum=${sumOfNumbers}  \n sumofeven=${sumofEven}  \n sum of odd=${sumofOdd}  \n divisor of 3=${divisorOf3}  \n average=${sumOfNumbers/numbers.length}`);



