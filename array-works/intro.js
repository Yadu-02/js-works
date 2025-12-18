/*
    if we want to store and organize multiple objects with same or different types

    creat: var name=[]

    keeps order

    duplicates allowed

    mutable

    var colors=["red","blue","black"]

*/

    var expenses=[23000,20000,15000,23500,23000,14000,15000,30000,18000,20000]
    //              1     2     3     4      5     6    7     8     9     10


    // console.log("\niterating using index\n");

    // for(let i=0;i<expenses.length;i++)
    // {
    //     console.log(expenses[i]);
        
    // }

    // console.log("iterating using of\n");


    // for(let e of expenses)
    // {
    //     console.log(e);
        
    // }
// var total=0;

//     for(let e of expenses)
//     {

//         total+=e

//     }

//     console.log(`Total= ${total}`);
    
    
var maxExp=0

var minExp=expenses[0]



for(let e of expenses)
{
    if(e>maxExp)
    {
        maxExp=e;
    }
    else if(e<minExp)
    {
        minExp=e
    }

   
}

console.log(`maximum expenese=${maxExp} \nminimum expenese=${minExp}`)
