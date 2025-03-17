
let newElement = document.createElement('span')
newElement.textContent = "This is my new Element"

let myDiv = document.querySelector("#myDiv")
 
// myDiv.appendChild(newElement) 

myDiv.insertAdjacentElement('afterend',newElement)

let parent = document.querySelector('#myDiv')
let child = document.querySelector('.para')

parent.removeChild(child)
  
let h_element = document.querySelector('h1')

// in this only one style at a time
h_element.style.backgroundColor = 'orange'

// .cssText - using this multiple style at a time 

let fpara = document.querySelector('.para1')
fpara.style.cssText = "background-color :orange; color: white; padding : 0.5rem"

  
 



// // CREATE A ELEMENT
// const fheading = document.createElement('h1')
// fheading.textContent = "Hello Betuu"
// // console.log(fheading)

// // RENDERING TO UI
// let body = document.querySelector('body')
// body.appendChild(fheading)


// let val1 =10
// let val2 = 5

// function addNum(num1, num2){
//     let total = num1+num2
//     return total
// }

// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)