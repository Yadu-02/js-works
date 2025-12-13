function vowelCount(word)
{
   
    var vowcount=0;

    var concount=0;

    for(let ch of word)
    {
        
        if((ch =='a' || ch =='e' || ch =='i' || ch =='o' || ch =='u'||ch =='A' || ch =='E' || ch =='I' || ch =='O' || ch =='U'))
            {
                vowcount++;
            }
        else if(ch!=0)
            {
                concount++;
            }
    }

    console.log(`vowel count=${vowcount}`);
    console.log(`consonant count=${concount}`);
    
}

vowelCount("javascript")

vowelCount("Floccinaucinihilipilification")