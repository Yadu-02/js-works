function largest(num1,num2,num3)
{
    return num1>num2 && num1>num3?`${num1} is the greatest`: num2>num1 && num2>num3? `${num2} is the greatest`  : `${num3} is the greatest`
}

console.log(largest(4,2,9));
