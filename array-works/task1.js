var arr=[-1,0,-1,0,0,-1,0,0,-1]

var arr2=[]

for(let num of arr)
{
    if(num<0)
    {
        arr2.unshift(num)
    }
    else{
        arr2.push(num)
    }
}

console.log(arr2);
