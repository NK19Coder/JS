//for of loop 

const arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num); 
} 

const greeting = "hello world";
for( const greet of greeting){
    console.log(`Each char is ${greet}`);
} 

//Maps 

const map = new Map();
map.set('IN',"india");
map.set('USA',"United States of America"); 
map.set('Fr',"France"); 

console.log(map);

for(const [key, value] of map) {
    console.log(key, ':-', value); 
}

//Note: In the same way we cannot iterate over objects


const myObject = {
    js: 'javascript',
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

//To iterate over object we use for in loop 

for(const key in myObject){
    console.log(key); //will print all keys  
    console.log(myObject[key]);// will print values
    console.log(`${key} shortcut is for ${myObject[key]}`); 
} 

//Note: if we iterate over array using for in loop then it will only print the keys not the values
  

//for each loop 

const coding = ["js", "c++", "swift", "python", "ruby"];

coding.forEach( function (item) { //call back function is a function without name 
    console.log(item); 
} )

coding.forEach( (val)=>{
    console.log(val);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "C++",
        languageFileName: "cpp"
    },

    { 
        languageName: "python",
        languageFileName: "py"
    } 
];

myCoding.forEach( (item)=> {
    console.log(item.languageName); 
} )

//note: for each loop never return values 
