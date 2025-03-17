 function addTwoNumbers(num1, num2) {
    console.log(num1+ num2);
 }

 const result = addTwoNumbers(3,4); 

 console.log(result); //will show undefined 

function addTwoNumbers1(num1, num2) {
    let result1 = num1+ num2;
    return result1; 
 }

 const result1 = addTwoNumbers1(3,4); 

 console.log("Result: " ,result1); //will now show the result       

 function loginUserMessage(username){
    if(username === undefined){  //if(!username)
        console.log("Please enter a username");
        return ; 
    } 
    return `${username} has logged in `;
 }
 
 console.log(loginUserMessage("nishant")); //if nothing has been passed then it will so undefined 

 function calculateCarPrice(...num1){ //here it is a rest operator 
    return num1;  
 }
       
 console.log(calculateCarPrice(200,400,500)); 
     
//the rest and spread are same it depends on their usecase 

function addone(num){
    return num+1;
}
addone(5); 


const addTwo = function(num){ //function with expresion 
    return num+2;
}
addTwo(5); 
  