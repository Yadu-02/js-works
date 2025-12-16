var word="malayalam";

var reversed="";

for(let i=0;i<word.length;i++)
{
    reversed=word.at(i)+reversed

}


console.log(reversed==word?"Palindrome":"Not Palindrome");
