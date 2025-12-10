var text="amanaplanacanalpanama"

var stringLength=text.length-1;//index starts from zero (21-1=20)

var result="";//empty string

for(let i=stringLength;i>0;i--)
{
    result=result=text[i]//a m a n a p l a n a c a n a l p a n a m a
}

console.log(result==text?"palindrome": "not palindrome");


