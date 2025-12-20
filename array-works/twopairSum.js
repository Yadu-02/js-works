var arr=[1,2,4,5,6]

var left=0

var target=6;

var right=arr.length-1

for(let i=0;i<arr.length;i++)
{
    sumPair=arr[left]+arr[right]
   if(sumPair==target)
   {
        console.log(`${arr[left]},${arr[right]}`);
        break;
   }
   else if(sumPair<target)
   {
        left++
   }
   else{
    right--
   }

}



