/**
 * @Apply
 * Exactly like call()
 * Difference is 
 * in call we pass argunment without array but in Apply we pass it in an array
 * function.apply(thisArgs , [ args])
 */



// const person = {
//     name: "Abhimanyu singh",
//     course: "MCA" , 
// }
// function printcourse(city , country){
//     console.log(`${this.course} and his city is ${city} and country is ${country}`)
// }

//  function printcourse(city , country){
//         console.log(`${this.course} and his city is ${city} and country is ${country}`)
//     }


// printcourse.apply(person , [ "Delhi" , "India"]);




// const arr = [ 1231 , 939103 , 10913 ]

// function add( ...numbers){
//     let sum = 0 
//     for ( const num of numbers){
//         sum += num
//     }
//     return sum 
// }

// console.log(add.apply(null , arr))




// const arr1 = [ 12 , 13 ]

// function adding(a , b ){
//     console.log( a + b)
// }

// adding.apply(null , arr1)




