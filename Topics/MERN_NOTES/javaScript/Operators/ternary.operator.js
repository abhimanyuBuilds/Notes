/** Ternary Operators
 * 
 * Ternary operators is a short way of writing an if..else statement
 * condition ? valueIfTrue : valueIfFalse 
 * 
 * Think of it as 
 * if( condition ){
 * return valueIfTrue
 * }else{
 * return valueIfFalse
 * }
 * 
 */

// let age = 20 ;

// let result = age >= 20 ? "Adult" : "NotAdult"

// console.log( result )




// let num = 88

// let result = num % 2 === 0 ? "Even" : "Odd"

// console.log( result )



// with function 

// function checkAge( age ){
//    return  age > 18 ? " can vote " : "can't vote"
// };

// console.log( checkAge( 16 ));

// let str = 'Abhi'
// function checkStr( x ){
//     return str.length > 8 ? " Will not print it too much data" : `${x}`
// };

// console.log( checkStr( str))



//Nested Ternary


// let marks = 54;

// let grade =
//      marks > 77 ? "A" : 
//      marks < 77 && marks > 65 ? "B" :
//      marks < 65 && marks > 55 ?  "C" :
//      "fail"

// console.log( grade )





// Interview Question 

// 1. Positive or Negative

// let num = -9

// let result = num >= 0 ? "Positive" : "Negative"

// console.log(result)



// Largest of Two Number

// let a = 9
// let b = 20

// let largest = a > b ? a : b

// console.log( largest )


// Login Status

// let isLoggedIn = true 

// let showResult = isLoggedIn ? " You're already loggedIn " : "Please Log-In First"

// console.log( showResult )


// check if number is divisible by 5


// let n = 45

// let result = n % 5 === 0 ? "Yes it is % by 5" : " No it not "

// console.log( result)


// check wheather a number is positive , negative or zero

// let n = 0

// let result = 
//     n > 0 ?  "Positive" :
//     n < 0 ? "Negative": 
//     n === 0 ? "Zero": 
//     Done; ⁉️
// console.log( result)


// Find the smaller of two numbers. 

// let a = 10 
// let b = 2

// let result = a < b ? a : b
// console.log( result )


// check if string is empty 

let str = "";

let isEmpty = str.length === 0 ? "String is Empty" : "Not Empty"

console.log( isEmpty)