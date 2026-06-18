// Function Declaration 
// ***Important thing to remember about Function declaration ***

// *** Basic Syntax ***
// function greet(name){
//     return `Hello + ${name}`
// }

//  2 Point 
//  {Hoisting} = Hoisting is nothing but javaScript behavior of moving declaration to the top of their scope before code execution 
//  And in JS function declaration is Hoisted completely

//  That mean you can call the function before it is execute


// greet() // work perfectly
// function greet(){
//     console.log("Hello Abhi")
// } this happen because js move the function declaration to the top during compilation



// unlike function expression , function declaration are 
// available at every where in scope 
//  created before code runs


// function declaration has a block Scope Behavior


// if(true){
//     function greet(){
//         console.log("Hi i'm Abhi..")
//     }
// }

// greet()

//  Error greet() not defined  {BLOCKED SCOPE} a function or variable declared inside
/* Reason
I'm using a ES6+ version and for that a function in block scope was never execute and it give the {not defined error} 
Avoid using function inside block scope 
Here are the list{if for while switch }
*/


/* Solution
Here is the catch we can use Arrow function and function expression for that
const arr = () => {}  {ARROW-FUNCTION}
const expression = function(){} {EXPRESSION-FUNCTION}
*/