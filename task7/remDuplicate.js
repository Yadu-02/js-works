function removeDuplicate(word)
{


    var result="";

 

    for(let i=0;i<word.length;i++)
    {
      
        if(word.indexOf(word[i])==i)
        {
            result+=word[i];
        }
    }
    return result;
}
console.log(removeDuplicate("banana"));


