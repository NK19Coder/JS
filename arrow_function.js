//this -> current context

const user ={
    username: "nishant",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    console.log(this);
    }  

}      

user.welcomeMessage(); 
user.username = "nk"; 
user.welcomeMessage(); 

console.log(this);// if there is nothing then it will show empty object but in Chrome i will show windows



function chai(){
    console.log(this); //will print many global things
    let username = "nishant";
    console.log(this.username); //will print undefined 
}
chai(); 

const chai1 = function(){
    let username = "nishant";
    console.log(this.username); //will print undefined 
}
chai1(); 

//********arrow function************** */

const chai2 = () =>{
    let username = "nishant";
    console.log(this.username); //will print undefined 
}
chai2(); 
      
const addTwo = (num1, num2) =>{
    return num1 + num2; 

}

console.log(addTwo(3,4)); 

//implict return arrow function

const adddTwo = (num1, num2) => num1+num2;
//const adddTwo = (num1, num2) => (num1+num2); if we use curly bracket then we have to write return but if we use parenthesis then no need to write return
//const adddTwo = (num1, num2) => ({username: "nishant"}); the object can only be returned in parenthesis s
console.log(adddTwo(3,4)); 
 