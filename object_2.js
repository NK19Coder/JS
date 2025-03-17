const tinderUser = new Object(); //singleton object 
const tinderUser1 ={}; //non singelton object 

tinderUser.id ="12345";
tinderUser.name="Nishant";

console.log(tinderUser);

const regularUser = {
    email: "nishant@goole.com",
    fullname: {
        userfullname: {
            firstname: "Nishant",
            lastname: "kumar"  
        }
    }
} 

console.log(regularUser.fullname); 

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"a", 4: "b"};
const obj3 = {5:"a", 6: "b"};

const obj4 = Object.assign({}, obj1, obj2, obj3);

console.log(obj4);             

const obj5 = { ...obj1, ...obj2}; //spread operator will be used commonly 
console.log(obj5); 

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser));

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nishant"
} 

const {courseInstructor: instructor} =course; //destructor of object 
console.log(instructor);   
 