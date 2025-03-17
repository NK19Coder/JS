const myNum = [1,2,3,4,5,6,7,8,9,10]; 

const newNums = myNum.map( (num)=> num+10 );
console.log(newNums);  

const myynums = myNum
                .map( (nums) => nums*10 )
                .map( (nums)=> nums+1 ) //chaining of map
                .filter( (nums)=> nums>=40); 
                console.log(myynums);  
