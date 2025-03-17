// Dates-> object 

let myDate = new Date();
console.log(myDate);  //2024-04-20T18:59:54.442Z
console.log(myDate.toString());  //Sun Apr 21 2024 00:29:54 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); //21/4/2024
console.log(myDate.toDateString()); //Sun Apr 21 2024
console.log(myDate.toLocaleString());  // 21/4/2024, 12:29:54 am 

let myTimeStamp = Date.now();
console.log(myTimeStamp); //in millisec
console.log(Math.floor(Date.now()/1000)); //in sec

let newDate = new Date();
console.log(newDate.getMonth()); 

newDate.toLocaleString('default', {
    weekday: "long",
});
console.log(newDate); 