function isPalindromeWord(word){

    var newWord=word.toLowerCase().replaceAll(" ","");

    console.log(newWord);
    

    var result=""

    for(let ch of newWord)
    {
        result=ch+result;

    }

    console.log(result);
    
    
    return result==newWord

}
console.log(isPalindromeWord("A MAN A plan a canal panama"));
