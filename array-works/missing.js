var arr=[1,2,4,5,6]

var left=0

var right=left+1

while(left<arr.length-1)
{
    var difference=arr[right] -arr[left]
    if(difference!=1)

    {
        console.log(`${arr[left]+1}`);
        break;
        
    }
    left++
    right++
}


