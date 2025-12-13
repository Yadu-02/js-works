function reverse(word)
{
    var result="";
    for(let ch of word)
    {
        result=ch+result
    }
    return result;
}

console.log(reverse("hello"));
