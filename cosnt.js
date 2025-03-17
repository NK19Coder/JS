const accountID = 12345;
let accountEmail = "nishantkuamrcoder@gmail.com";
var accoutPassword = "12345"; //never use 
accountCity = "Delhi";  


//after using const keyword we cannot change the value 

/*
    not use var keyword beacuse of block and 
    functional scope
*/

accountEmail = "accountEmail@gmail.com";
accountPassword = "43423523";
accountCity = "Del"; 

console.table([accountEmail, accountPassword, accountCity]);
console.log(accountEmail);
