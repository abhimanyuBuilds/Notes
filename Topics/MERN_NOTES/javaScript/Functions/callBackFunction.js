//  Callback function is a function that is pass as an argument to the other function and it is executed later , usually after some operation or event has completed


// function Square(a){
//     console.log("Here is your Square")
//     console.log("I'm Call-Back")
//     return a * a
// }

// function executeHOF(fn , a){
//     console.log("Executing the part of call-back here: I'm HOF")
//     const result = fn(a)
//     console.log("result:",result)
// }

// executeHOF(Square,55)





// function printName(names){
//     // console.log("Hi i'm callback")
//     console.log(names)    // callback
// }


// function HOFWITHit(fn){
//     // console.log("I'm HOF")
//     return printName      // HOF function
// }

// HOFWITHit(printName("Sharma"))
//console.log(typeof HOFWITHit(printName("Sharma")))












// function greet(name) {
//     return `Hello ${name}`
// }

// function Hello(name) {
//     return greet('Abhimanyu')
// }

// console.log(Hello())   
// callback function is a function which take argument from another function and it is executed later..
// HOF is a function that takes another function as an argument and return a function as it result..







// callback function 


// function greet( name , callback ){
//     console.log("Hello", name)
//     callback()
// };

// function done(){
//     console.log("Greetings done!!")
// };



// greet("Abhimanyu" , done)

// A Callback is a function that pass as an argunment to another function that is executed after the current task finishes..