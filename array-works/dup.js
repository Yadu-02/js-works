var arr1=[10,20,30,40]

var arr2=[8,9,20,21,30,45]

var left=0

var right=0

var largest=0

arr1.length>arr2.length?largest=arr1.length:largest=arr2.length

for(let i=0;i<largest;i++)
{
   
   if(arr1[left]==arr2[right])
   {
        console.log(`${arr1[left]}`);
        right++
        left++
        
   }
   else if(arr1[left]>arr2[right])
   {
        right++
   }
   else{
    left++
   }

}