const clock = document.querySelector('#clock'); 




setInterval(function() {
    let date = new Date()
    console.log(date.toLocaleDateString()); 
    clock.innerHTML = date.toLocaleDateString();  
},1000) 
 
 