var word="hello"

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

    }
console.log(pattern);
