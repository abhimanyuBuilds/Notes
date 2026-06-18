// In JavaScript shadowing means when in program their is a same variable name
// as in scope then the js script use that variable that are present as close as inside the function 

//  An inner variable has the same name as an outer variable
/*
Example


what is variable shadowing 

variable shadowing happens when a variable declared inside the inner scope has the same name as a varaible in outer scope .
the inner variable hides ( or shadow) the outer varaible within the scope 

How does javaScript resolve the shadowed variable

JavaScript starts looking the current scope . if it does not find it moves to parent then grandParent and then gloabl scope .This is called scope chain 


what is illegal shadowing

illegal shadowing occur when a var declaration tries to redeclare a let or const variable in the same function/global scope
*/

// let username = 'Abhimanyu'
// {
//     var username = 'Rahul'
//     console.log(username ,"I'M Function scope name");
// }
// names()
// conosle.log(username,"Global scope")
// console.log(username, "Hi I'm Global scope");

// Here X respect the var  


// {
//     let x = 10
// }

// console.log( x )


// var ignore {}

// {
//     var age = 10;
// }

// console.log(age)


// level 5

// parameters 

// let price = 100
// function calculate(price){
//     console.log(price)
// }

// calculate( 250 )

// console.log( price , "I'm Outer variable")



// clouser


// let count = 1
// function outer(){
//     let count = 2;

//     return function () {
//         console.log( count ) // inner function can access the function from outer function but outer function can't access the function of inner function
//     };
// }

// const fn = outer()
// fn()



// This is leagl because this var has function scope and it is not tries to Re-declare the x twice
// let x = 10 

// function a(){
//     var x = 20
//     console.log( x )
// }
// a()
// console.log( x)



// this is not legall because var is function scope that's why it is tries to redeclare the x in the same scope
// let x = 22 
// {
//     var x = 233
// }





// can a function parameter shadow a global variable 

// yes  

// let name = 'Global'

// function greet(name){
//     console.log(name)
// }
// greet("Rahul")


// Difference between shadowing ==/== overwritting

// let x = 10 
// function test(){
//     let x = 20 

// }


/*
// how illegal shadowing works
//  what is illegal shadowing
illegal shadowing occur when a var declaration tries to redeclare a let or const  variable in the same function / global scope
*/
var x = 20

{
    // var x = 20
    let x = 20
    console.log(x,"Inner")
}
console.log(x)

// let x = 20

// {
//     var x = 30
// }

/*
illegal shadowing occur when a var declare attempts to redeclare a let or const variable in the same function or global scope .
Since Var is function scoped declaring it inside the block does not create a separate scope which can lead to conflict
*/