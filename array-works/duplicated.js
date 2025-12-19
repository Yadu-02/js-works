var arr=[1,2,2,4,5,6]

var left=0

var right=left+1

while(left<arr.length-1)
{
    if(arr[left]==arr[right])

    {
        console.log(`${arr[left]}`);
        break;
        
    }
    left++
    right++
}


