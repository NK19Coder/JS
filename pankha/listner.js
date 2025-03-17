let paras = document.querySelectorAll('p')

// for(let i=0; i<paras.length; i++){
//     let para = paras[i]
//     para.addEventListener('click', function(){
//         alert("You have clikced on para : " + [i+1])
//     })
// }

function alertPara(event){
    console.log(event.target)
    if(event.target.nodeName === 'SPAN'){
    alert("You have clikced on para :" + event.target.innerHTML)
}
}


// for(let i=0; i<paras.length; i++){
//     let para = paras[i] 
//     para.addEventListener('click',alertPara)
// }

let myDiv = document.querySelectorAll(".wrapper")

document.addEventListener('click',alertPara)