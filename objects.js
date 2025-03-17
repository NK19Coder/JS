// singleton - create by constructor - Object.create

//object literals 

const mySym = Symbol("key1"); //Symbol 


const jsUser ={
    name: "nishant",
    [mySym]: "mykey1", // if not used in square bracket then it will show like a string not a symbol
    age: 18,
    location: "delhi",
    isLoggedIn: false 

};

console.log(jsUser.age); 
console.log(jsUser["location"]); 
 
jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting()); 

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingTwo());     
 
 