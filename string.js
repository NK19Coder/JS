const name ="nishant";


const repo =50; 

console.log(name + repo + "value"); 
//but this method is not being used now a days

//instead of this backtick is used 

console.log(`Hello my name is ${name} and my repo os ${repo}`);
  


const names = new String('nishant');
console.log(names[0]);
console.log(names.__proto__);
console.log(names.length);
console.log(names.toUpperCase());
console.log(names.charAt(2)); 

const newString = names.substring(0,4);
console.log(newString);

const newStringOne = "   nishant   ";
console.log(newStringOne); //will print with whitespaces
console.log(newStringOne.trim()); //will print without white spaces


const url = "https://nishantkumar.com/nishant%20kumar";
console.log(url.replace('%20', '-'));   
console.log(url.includes('nishant'));   
