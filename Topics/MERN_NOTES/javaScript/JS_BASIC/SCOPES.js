// ****global Socpe

// let value = 2000;

// function adding(a , b){
//     return value + b
// }


// console.log(adding(value,444))

// Global scope in js is a variable that declared outside of function and scope  and it is lived in window object (in browser)



// ****function scope 

// function scope in js is declared using var and it can only be declared using var and it is only access inside the function scope

    // function value(){
    //     let a = 10;
    //     let b = 20;

    //     function adding(a , b){
    //         console.log(a)
    //         console.log(b)

    //         return a + b
    //     }   
    //     // adding()
    //     return adding(a , b)
    // };

    // console.log(value());



// **** Blocked scope

// variables declared using let and const are only be accessable inside their scope
// {This prevent many bugs that cause by var};

// let a = true
// function Adding(){
//     if(a){
//         let b = 3
//         console.log("Added")
//     }else{
//         console.log(b)
//     }
// };

// Adding()  // here 3 never print becuase of b is in other scope thats why it never print





//****Scope chain 
// Scope chaining is in js help to search the variable from current scope to global scope until the variable is find


// let x = 7 ;

// function One(){
//     let y = 8;
//     function Two(){
//         let z = 9;
//         console.log(x , y , z)
//     }
//     Two()
// }
// One()


// let country = "India";
// function Outer(){
//     let State = "Haryana"
//     function Inner(){
//         let city = "Gurgaon"
//         console.log("Our country :",country),
//         console.log("State:",State),
//         console.log("City:",city)
//     }
//     Inner()
// }
// Outer()




// **** Variable Shadowing

// Variable Shadowing is nothing but in js help to hide the vairable name if in global scope their is a same variable name as it has in scope

// let name = "Abhimanyu"

// function data(){
//     let name = "Abhi"
//     console.log(name)
// }

// data()




// TDZ temporal dead zone

// console.log(a) // cannot access 'a'  before initialization
// let a = 9
//var a = 9 // {Output:}  undefined