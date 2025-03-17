const marvel_heros = ["thor", "Iron man"];
const dc_heros = ["superman", "flash"];

marvel_heros.push(dc_heros); //it gives array under a array
console.log(marvel_heros); 
  
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); 

 const all_new_heros = [...marvel_heros, ...dc_heros];
 console.log(all_new_heros);

 console.log(Array.isArray("Nishant"));
 console.log(Array.from("Nishant")); //convert it into a array

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1, score2, score3));    