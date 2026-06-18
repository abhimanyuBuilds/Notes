// Hoisting


// Hoisting in nothing but a behaviour where function declarations are moved to the top of their scope during the memory creation phase.
//  before code execution .function declaration fully hoisted which means they can be called before initiallization in the code.

// let and const if u use in Hoisting then it will give u  Cannot access 'a' before initialization
// And if u use var for inistiallzation it will give undefined

// Exmaple

add(4,5)
function add(a , b){
    console.log( a + b)
    return a + b
}

console.log(a)
var a = 111;  //error undefined

console.log(b)
let b = 99   // error Cannot access 'b' before initialization



// Functions 
