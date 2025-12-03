//titanic

var malePassengers=869;

var femalePassengers=412;

var survived=492;

var totPassengers= malePassengers + femalePassengers;

console.log(`Total passengers= ${totPassengers}`);

var unsurvived = totPassengers -survived

console.log(`unsurvived passengers =${unsurvived}`);

var percSurvived = survived/totPassengers *100;

console.log(` percentage of survived=${percSurvived}`);

var percUnsurvived = unsurvived/totPassengers *100;

console.log(` percentage of unsurvived=${percUnsurvived}`);

