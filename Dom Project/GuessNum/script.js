const random = (parseInt(Math.random()*100+1)) 
const submit = document.querySelector('#subt') 
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')  
const remaining = document.querySelector('.lastResult') 
const lowhi= document.querySelector('.lowOrHi')   
const startOver = document.querySelector('.resultParas')             
 

const p = document.createElement('p')                               

let prevGuess = []                   
let numGuess = 1 
let playGame = true  

if(playGame){ 
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)         
        console.log(guess)
        validateGuess(guess) 
    })  
}

function validateGuess(guess){
    if(isNan(guess)){          
        alert("Please enter a valid number.")
    }else if(guess<1){
        alert("Please enter a valid number more than 1")
    }else if(guess<1){
        alert("Please enter a valid number less than 100") 
    }else {
        prevGuess.push(guess)  
        if(numGuess === 11){
            displayGuess(guess)
            displayMessgae(`Game Over, Random Number: ${randomNumber}`)
                endGame()             
        }
    }      
}      

function checkGuess(guess){

}

function displayGuess(guess){

}               

function displayMessgae(messgae){ 

}

function newGame(){

}

function endGame(){

}
            