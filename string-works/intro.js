/*

Definition

string is a sequence of charcaters

string is an object that has been predefined in javascript


var string={
    length,
    toUppercase(){}
    tpLowercase(){}
    charAt(index){}   //return charcater at specified index
    at(index){}   //return charcater at specified index , also support negative indexing
    concat(value){}  //concatenate a value with the string
    slice(start,end){} //slice a portion from the string using index(support negative indexing) 
    subsrtring(start,end){} //slice a portion from the string using index(does not support negative indexing) 
    trim(){} //remove the leading and trailing white spaces in a string


    trimStart()
    trimEnd()
*/

var companyName="Luminar Technolab"

var newCompany="     luminar technolab   "



console.log(companyName.length);

console.log(companyName.toUpperCase());

console.log(companyName.toLowerCase());

console.log(companyName.charAt(5));

console.log(companyName.at(-5));

console.log(companyName.concat(".com",".edu"));

console.log(companyName.slice(0,7));

console.log(companyName.slice(8,companyName.length));

console.log(companyName.slice(-9,));

console.log(companyName.substring(8,));

console.log(`new string:${newCompany.trim()}....`);
console.log(`new string:${newCompany.trimStart()}....`);
console.log(`new string:${newCompany.trimEnd()}....`);

console.log(companyName.padEnd(25,"&"));
console.log(companyName.padStart(23,"&"));





