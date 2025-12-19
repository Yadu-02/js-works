/*

    var array={
        length,
        push(value){}  =>adds a new value at the end of the array
        pop()  =>removes the value at the end of the array and returns it as a string
        unshift(value)  =>adds a value at the beginning of the array 
        shift()   =>removes a value from the beginning of the array

        indexOf(value)   =>returns the index of the specified value
        include(value)   => returns true if the value exist in the array 
        }    
*/

var foods=["dosa","chapathi","friedrice","dosa","coffee"]

// foods.push("arabian-rice")

// foods.pop();

// foods.unshift("tea")

// foods.shift();

// let pos=foods.at.indexOf("dosa")

let pos=foods.indexOf("biriyani")

console.log(foods.slice(0,3));



console.log(foods.includes("chapathi"));


console.log(pos);


foods.splice(1,2,"alfahm","mandhi","shawarma");

console.log(foods);



// console.log(foods);

// console.log(foods.length);
