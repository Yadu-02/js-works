var headCount =4;

var total=345;

var gst=8;

var totalGst =((gst/100)*345) + total

console.log(`total with gst =${totalGst}`);

var tipAmount = 25;

var totalwithTip=totalGst+tipAmount

console.log(`total including tip=${totalwithTip}`);

var split = totalwithTip / headCount

console.log(`individual split =${split}`);

