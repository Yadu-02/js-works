var arr=[1,2,3,3,5,6,7,9]

for(let i=0 ;i<arr.length;i++)
{
    if(arr[i]!=i+1)
    {
        var least=i
        break;        
    }
}
console.log(`Duplicated number is ${least}`);