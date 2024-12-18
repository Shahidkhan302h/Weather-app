// SYNCHRONOUS JS code

// console.log("first")
// console.log("second")
// console.log("third")
// console.log("fourth")


// asynchronous code

// function print(){
    
//     setTimeout(()=>{
//         console.log("this is set time out")
//     } ,5000)
// }

// print()

// function nextprint(){
    
//     setTimeout(()=> {
//         console.log("this is nextprint function")
//     }, 2000)
// }
// nextprint()


// // setTimeout function  (delay)
// // setTimeinterval function  ( interval time)

// // cleartimeout ()

// console.log("stard")

// function delay(){
//     setTimeout(()=> {
//         console.log("this is delay function")
//     },2000)
// }

// delay()

// console.log("end")

// function nextdelay(){
//     setTimeout(()=>{
//         console.log("next delay function")
//     },1000)
// }

// nextdelay()


// this ( refer object )

// global context 
console.log(this)


// const person = {
//     username : "shahid",
//     age : 19 ,
//     thisid : function (){
//         console.log(this.username)
//     }
// }

// person.thisid()

// function person(){
//    let username = "SHAHID"
//     console.log(this.username)
// }
// person()


// console.log(person.username)
// console.log(person.age)

// const person = {
//     username : "shahid",
//     age : 22,

//     print:  ()=>{
//         console.log(this.username)
//         console.log(this.age)

//     }
// }
// person.print()


// function getuser(user , callback){
//     setTimeout(()=>{
//         callback(user)

//     },1000)
// }

// function getname(user , callback){
//     setTimeout(()=>{
//         callback(user)
//     },1000)
// }

// getuser({ username : "shahid" , age : 19}
//     getname((user)=>{
//         console.log(user.username)
//     })
// )

 //promise
 //resolve(than)
 //reject(catch)
//  const mypromis = new Promise((resolve , reject)=>{
//    let succes = true
//     setTimeout(()=>{
// if(succes){
//    resolve()
// }else{
//    reject()
// }
   //  resolve()
   //  reject()
   //  console.log("data is successfully")
//     },1000)
//  } )

//  mypromis()
//  .than(()=>{
//     console.log("data et")

//  })
 

//  .catch(()=>{
//     console.log("data nat found")
//  })
 

//25-11-2024

//is not use full

// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then((response)=>{
//    // return response
//    // console.log(response)
//    return response.json()

// }).then((data)=>{
//    console.log(data)
// })
// .catch((err)=>{
//    console.log(err)
// })

// is use full
async function getdata (){
try{
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
   const data  = await response.json()
   console.log(data)
   console.log(data[0].userId, data[0].title , data[0].completed)
}
catch{
   console.log(err)
}
}


getdata()


