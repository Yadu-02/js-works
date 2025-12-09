var text="pneumonoultramicroscopicsilicovolcanoconiosis "

var vowcount=0

var concount=0

for(let ch of text)
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
console.log(`number of vowels in the text=${vowcount}`);
console.log(`number of consonant in the text=${concount}`);
