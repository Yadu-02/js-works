function removeDuplicate(word)
{


    var pattern="";

    for(let ch of word)
    {
        var char="";

        pattern+=ch

        char=ch

        if(ch!=char)
        {

            pattern+=ch
        }
        return pattern

    }
}
console.log(removeDuplicate("hello"));

