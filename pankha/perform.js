// const t1 = performance.now()
// for(let i=1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = "This is Para : "+i;
//     document.body.appendChild(para);
// }   

// const t2 = performance.now()

// console.log("total time taken by program is :" + (t2-t1))

// const t1 = performance.now()

// let myDiv = document.createElement('div')
// for(let i=1; i<100; i++){
//     let para = document.createElement('p')
//     para.textContent = "This is Para : "+i;
//     myDiv.appendChild(para);
// } 
// document.body.appendChild(myDiv)

// const t2 = performance.now()

// console.log("total time taken by program is :" + (t2-t1))

const t1 = performance.now()

let fragment = document.createDocumentFragment()
for(let i=1; i<100; i++){
    let para = document.createElement('p')
    para.textContent = "This is Para : "+i; 
    fragment.appendChild(para)
}
document.body.appendChild(fragment)

const t2 = performance.now()
console.log("total time taken by program is :" + (t2-t1))