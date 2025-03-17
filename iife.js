// Immediately Invoked Function Expression (IIFE)
// due to golobal scope the function get pollluted coz of this we use IIFE 
function one(){
    console.log("DB connected");
}

one(); 

//IIFE 
//this is an example of named IIFE
(function nishant(){
    console.log("DB connected");
})(); 

//()-> first for defination and second for execution

//this is an example of simple or unnamed IIFE 
( (name)=> {
    console.log(`DB connected ${name}`);
}) ('nishant');    

//if we have to write 2 IIFE then we have to write ; at the send of execution ()
