
function changeText(e){
    console.log(e)
    let para = document.querySelector('#fpara')
    para.textContent =" hello pankhe"
}

  
let para = document.querySelector('#fpara')
 
para.addEventListener('click',changeText);


 




let anchorElement = document.querySelector('#anchor') 

anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent = "Done"

})


// para.removeEventListener('click',changeText)


// Syntax = <event_target>.addEventListner('<event_type>','<fxn-action>') 

// changeText () -> exection ussi tmy ho jayegi
// changeText -> refrence deta hai 

// in case of removing we need the same object of yhe function which was
// created to add Event 