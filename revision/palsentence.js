
    var newWord=word.toLowerCase().replaceAll(" ","");

    var sentence="A MAN a plan a canal panama"

    console.log(newWord);
    

    var result=""

    for(let ch of newWord)
    {
        result=ch+result;

    }

    console.log(result);
    
    
