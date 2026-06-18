// Arrow Function is a shorter way to write a function in a js 


//  Main feature of Arrow function 
//  1. cleaner and concise
//  2. No own this
//  3. Arrow function does not have their own this
//  4. if you want to use this then use normal function (Arrow function take {this} from the surrounding scope)




// basic syntax
// const add = (a ,b) => {
//     return a + b
// }

// shorter way if their is only one expression , return is automatic

// const add = ( a , b ) => a + b;
// if their is only one expression then return is automatic

// console.log(add(2 , 3))

// if one parameter then parantheses are optional

// const square = x => x * x

// console.log(square(3))

//  if no parameter then use empty parantheses ()

// const greet = () => {}




// const Data ={
//     Name: "Abhimanyu",
//     Course: "MCA",

//     arrow: () =>{
//         console.log(this.Name)
//     }
// }

// Data.arrow() // error cannot read properties of undefiend



// const Data ={
//     NAME: "Abhimanyu",
//     EDUCATION: "MCA",

//     greet(){ // regular method 
//        return ` Hello ${this.NAME} Here is you're Educational Background: ${this.EDUCATION}`
//     }
// }


// console.log(Data.greet())













