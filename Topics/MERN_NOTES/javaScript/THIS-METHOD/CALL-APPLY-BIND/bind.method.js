/**
 * @BIND
 * bind does not execute immediately
 * it create a new function whose this is permanently bound
 */

// syntax
// const newFunction = oldFunction.bind(thisargs)


// const person = {
//     name: "Abhimanyu" , 
//     course: "MCA"
// }

// const user = {
//     name: "Hritik" , 
//     course: "MBA"
// }
// function greet(city){
//     console.log(`${this.name} , ${city}`)
// }
// // greet.bind(user) if it used nothing happen


// const fn = greet.bind(user , "Delhi")
// // const fns = greet.bind(person)
// fn()
// fns()




// const user = {
//     name: "Abhimanyu",

//     userss(){
//         console.log(this.name)
//     }
// };

// setTimeout(user.userss.bind(user) , 10000)