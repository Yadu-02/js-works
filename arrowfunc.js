/* 
syntax
variable =(p1,p2,p3...) => expression
variable =(p1,p2,p3...) => {
    
    return expression
    }
*/

let add=(n1,n2)=>n1+n2
let sub=(n1,n2)=>n1-n2
let lastDigiMax=(n1,n2)=>n1%10>n2%10?n1:n2
let lastDigiSum=(n1,n2)=>n1%10+n2%10
let square=(n)=>n**2
let maxTwo=(n1,n2)=>n1>n2?n1:n2

console.log(add(20,15));

console.log(sub(10,3));

console.log(lastDigiMax(127,181));

console.log(lastDigiSum(137,174));

console.log(square(4));

console.log(maxTwo(200,350));






