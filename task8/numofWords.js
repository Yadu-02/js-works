var sentence="   Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking"

var wordCount=0;

var newsentence=sentence.trim()

for(let i=0;i<newsentence.length;i++)
{
   if(newsentence.at(i)==" ")
    {
        wordCount++;

    } 

}

console.log(wordCount+1);
