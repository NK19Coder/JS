const userEmail = [];

if(userEmail){
    console.log("Got user email");
} else{
    console.log("No user email");
}
 

/*
FALSY VALUSE :
 -> false
 -> 0
 -> -0
 -> BigInt 0n
 -> "" (empty string)
 -> null
 -> undefined
 -> NaN


  ***Except this all the other are truthy values***
  also "0", 'false', "  ", [], {}, funciton(){}
*/

const emptyObj ={};

if(Object.keys(emptyObj).length === 0){
    console.log("Empty object");
}
 
//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val2= null ?? 10; //-> it bascially handles null values
 
console.log(val1); //5
console.log(val2); //10

// Terniary Operator 

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80");
  