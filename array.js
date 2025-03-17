const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const myName = ["nishant", "kumar"];
const myAr = new Array(1,2,3);
   
myArr.push(10);
console.log(myArr);

myArr.unshift(11); //11 at starting point of array but highly time taking
console.log(myArr); 
console.log(myArr.includes(9)); 
console.log(myArr.indexOf(10));

const newArr = myArr.join();
console.log(newArr); //it bind in type of string 
console.log(myArr);

//slice and splice 

console.log("A", myArr);
const myn1 = myArr.slice(1,3); // it doesn't manuplulcate the original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3); // it manuplicate the original array
console.log("C", myArr);
console.log(myn2);     