import EventEmitter from "events";

const emitter = new EventEmitter()


emitter.on("loginuser" , () => {
    console.log("LoggedIn Successfully")
});


emitter.on("signup" ,() => {
    console.log("signup done successfully")
});



// emitter.emit("login");

// emitter.emit("signup");

/* Multiple listner */


// emitter.on("Login" , () => {
//     console.log("Sent Email")
// });

// emitter.on("Login" , () => {
//     console.log("Sent SMS")
// });


// emitter.on("Login",() => [
//     console.log("Password fetched")
// ]);

// emitter.on("Login" ,() => {
//     console.log("Request handel")
// });

// emitter.emit("Login")

// output
// Sent Email
// Sent SMS
// Password fetched
// Request handel


/* Passing Data*/

// emitter.on("login" , (user , password , db_name , request) => {
//     console.log(user.name) ,
//     console.log(user.password) 
//     console.log(user.db_name) 
//     console.log(user.request)
// });

// emitter.emit("login" , {
//     name: "Abhimanyu",
//     password: 12323,
//     db_name: "Atthah",
//     request: {
//         ip: 910920,
//         address: "020jida"
//     }
// })

// once() // Runs only once

emitter.once("Login" , () => {
    console.log("sent verification email")
});

emitter.emit("Login")

emitter.emit("Login")

//Output
// sent verification email


// Second emit ignored.

// Useful for

// DB connected
// App initialized
// Server started


/* 
Event Names

Usually strings.

"userCreated"

"payment"

"login"

"logout"

"dbConnected"

Can also use Symbols
*/


/* Most people think it is asychronous but its not here is why 

Synchronous Nature

Most people think EventEmitter is async.

Wrong.

It is synchronous.

emitter.on("test",()=>{

console.log(1);

});

console.log(2);

emitter.emit("test");

console.log(3);

Output

2

1

3

Listener runs immediately.

To make async

emitter.on("test",()=>{

setImmediate(()=>{

console.log("Async");

});

});

*/