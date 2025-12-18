
    var word="I love Programming"

    var longest="";

    var splitWord=word.split(" ");

    for(let w of splitWord)
    {
        if(w.length>longest.length)
        {
            longest=w;
        }
    }
    console.log(longest);
    
    

