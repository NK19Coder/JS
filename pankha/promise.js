// let promise1 = new Promise((resolve,reject)=>{
//     let sucess = false;
//     if(sucess){
//         resolve("Promise Fulfilled")
//     }else{
//         reject("Promise Rejected"); 
//     }
// })
// promise1.then((message)=>{
//     console.log("Then ka message hai : " + message)
//     return "2nd Promise message"
// }).then((message)=>{
//     console.log("Second msg is : " + message)
//     return "3rd Promise message"
// }).then((message)=>{
//     console.log("3rd Promise Received : "+message)
// }).catch((error)=>{ 
//     console.log("Error is : "+ error) 
// }) 

//  new Promise(function(resolve,reject){
//     //Do an async task
//     //DB call, N/w call , cryptography

//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("Promise consumed")
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Priyanka", email:"pankha@gmail.com"})
//     },2000)
// }).then((user)=>{
//     console.log(user) 
// })  


// let promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true 
//         if(!error){
//             resolve({username : "Priyanka", password : "1234"})
//         }else{
//             reject('ERROR: Something went Wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("Error is : "+error)
// }).finally(()=>{
//     console.log("Finally ")
// })


let promiseOne = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
})

let promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second")
})

let promiseThree = new Promise((resolve,reject)=>{
    setTimeout(reject,3000,"Third")
})

Promise.all([promiseOne,promiseTwo,promiseThree])
.then((values)=>{
    console.log(values)
}) 
.catch((error)=>{
    console.log(error)
}) 

 
 