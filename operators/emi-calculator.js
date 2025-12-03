var loanAmount = 50000;
var interestRate = 9;          
var loanTenure = 240;          

var r = interestRate / 12 / 100;   
var emi = (loanAmount * r * Math.pow(1 + r, loanTenure)) 
        / (Math.pow(1 + r, loanTenure) - 1);

console.log(ElementInternals);