var char="$"

if(char>='A' && char<='Z' || char>='a' && char<='z')//alphabet
{

    console.log(`${char} is an alphabet`);

}
else if(char>='0' && char<='9')
{

    console.log(`${char} is a digit`);

}
else
{

    console.log(`${char} is a special character`);

}