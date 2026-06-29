/***
 * @this'Concept in JavaScript Class methods in NestJS, TypeScript services'
 * @GoldenRule this is determined by how a function is called , not by where the function was created or originally stored.
 * This is not belog to the function 
 * This is belong to function call 
 * many people think that this is belongs to function 
 * @instead this belongs to the function call
 * @This is a special keyword that help to refer the object that is currently calling the function
 * 
 * 
 */


// const User ={
//     name : "Abhimanyu Singh",

//     greet(){
//         console.log(this.name)
//     }
// }


// User.greet() // output Abhimanyu Singh


// User.fn = User.greet;
// const fn = User.greet.bind(User)
// User.fn()
// fn()
// fn()



/**
 * @Solution to solve this error we have many methods 
 * 1 use bind create a another varible and use bind with it 
 * 2 use apply fn.apply(User)
 * 3 Use call fn.call(User)
 */


// const bindfn = fn.bind(User)
// console.log("Hi 1 is bindfn")
// bindfn()  


// console.log("I'm Apply 2")
// fn.apply(User)

// console.log("I'm call 3")
// fn.call(User)

//{Output}
/*
Hi 1 is bindfn
Abhimanyu Singh
I'm Apply 2
Abhimanyu Singh
I'm call 3
Abhimanyu Singh
*/




// console.log(fn)
// console.log(typeof fn) // function 

// fn.call(User)

/***
 * @Error Why this error come 
        console.log(this.name)
                         ^

TypeError: Cannot read properties of undefined (reading 'name')
    at greet (file:///c:/Users/ACER/OneDrive/Desktop/Abhi/projects/PractiseFolder/Topics/MERN_NOTES/javaScript/THIS-METHOS.js/this.j
s:14:26)
    at file:///c:/Users/ACER/OneDrive/Desktop/Abhi/projects/PractiseFolder/Topics/MERN_NOTES/javaScript/THIS-METHOS.js/this.js:23:1
    at ModuleJob.run (node:internal/modules/esm/module_job:430:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:661:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

Node.js v24.14.0
 */

// becuase fn() has no owner object

// so

// this 
// ↓
// undefined(in strict mode)

// if i want to fix this 




/**
 * @ifThiscalledbyObject
 * if a function is called through an object
 * object.method()
 * then----> this === object
 * @Example
 */

// const User = {
//     name : "Abhimanyu Singh",
//     skills: ["Node.js" , "Express.js"],


//     greet() {
//         console.log("Hi Namaste from Gurugram..", this.name)
//         console.log(this.skills)
//     }
// }


// User.greet()

// becuase 

// User.greet()
// Owner -> user
// |
// this = user

// Rule-2

// Standalone Function 

// function greet(){
//     console.log(this)
// }
// greet()

// Output Undefined why becuase no object called it ...



// class user {
//     constructor(name){
//         this.name = name    
//     }
// }

// const User = new user("Abhimanyu")


// console.log(typeof User)

// console.log(User)


// If this is used in constructor then always point towards new object rather then old one

// example

// new user()
// ↓
// create new object
// ↓
// this point to new object
// ↓
// now return object



// but if we don't use constructor 
// Then the Memory 
// user 
// ↓
// name
// ↓
// Abhimanyu




// Rule -  4 class method

// class User {
//     name = "Abhimanyu"

//     greet(){
//         console.log("Hi",this.name)
//     }
// }

// const user = new User()
// user.greet()

// Object.method() will always refer to this



// Rule - 5 Arrow Function 
// Arrow function do not create their own this

// they borrow it from the sorroundings scope



// const user = {
//     name: 'Abhimanyu',

//     greet: () => {
//         console.log(this.name)
//     }
// }

// user.greet()



// class person {
//     name = "Abhimanyu";

//         greet = () => {
//             console.log(this.name)
//     }
// }    


// const user = new person()

// user.greet()




// case2 callback()

// without arrow


// class User {
//     name = "Abhimanyu"

//     start(){
//         setTimeout( function (){
//             console.log(this.name)
//         },2000)
//     }
// }

// new User().start()



class person{
    name = 'Rohit'

    pause(){
        setTimeout(() => {
            console.log(this.name)
        },3000)
    }
}

new person().pause()