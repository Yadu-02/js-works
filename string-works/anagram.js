function isAngram(word1,word2)
{

isAngram=true;

for(let ch of word1)
{
    if(word2[ch]==-1)
    {
        isAngram=false;

        break;
    }
}
for(let ch of word2)
{
    if(word1[ch]==-1)
    {
        isAngram=false;

        break;
    }
}
}
console.log();

