function isPalindrome(text)
{
    let isPword=true

    var result=""

    for(let i=0;i<text.length;i++)
    {
        result=text.at(i)+result;


    }

    if(result!=text)
    {
        isPword=false;
    }



    return isPword
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("java"));

// var data="sample"
// console.log(data.slice(-1,));

