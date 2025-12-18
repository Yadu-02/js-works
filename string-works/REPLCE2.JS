var word="ABC123"

var challengecode="7YZ"

var word2=word.concat(challengecode)

console.log(newest);


var newest=""



for(let i=0;i<=word2.length-1;i++)
{
    if((i+1)%3==0)
    {
        newest+="X"
    }
    else{
        newest+=word2[i]
    }
}

console.log(newest);
