function isPangram(word)
{
    let pangramWord=true;

    var alphabets="qwertyuiopasdfghjklzxcvbnm"

    for(let al of alphabets)
    {
        if(word.indexOf(al)==-1)
        {
            pangramWord=false;

            break;
        }


    }

    return pangramWord
}

console.log(isPangram("the quick brown fox jumps over lazy dog"));
