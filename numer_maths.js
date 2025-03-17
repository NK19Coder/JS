const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
 
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //usa with comma
console.log(hundreds.toLocaleString('en-IN')); //withn Indian comma system


// ****************MATHS******************

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.min(4, 3, 6));

console.log(Math.random()); //always lies between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); //+1 is used as a number can be 0.02 also which can give o as a answer


const min=10;
const max=20;

console.log((Math.random() * (max-min + 1))); 
console.log(Math.floor(Math.random() * (max-min + 1)));  
console.log(Math.floor(Math.random() * (max-min + 1)) + min); //to make sure that it should be in the range b/w 10-20
 



 