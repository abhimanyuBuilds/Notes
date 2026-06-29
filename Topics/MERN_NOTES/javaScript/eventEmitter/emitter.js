/**
 * 
 * @EventEmitter 
 * EventEmitter is a design pattern and a built-in Node.js class that implements the 
 * Publisher–Subscriber (Pub/Sub) pattern. It enables loose coupling by allowing objects to 
 * emit named events and other objects to subscribe to and handle those events.
 * 
 * 
 * 
 * EventEmitter is a built-in Node.js class that lets one part of your application 
 * announce that something happened by emitting an event,
 * while other parts listen for that event and react without being directly connected.
 * 
 * 
 * @Diagram 
 * Publisher
(registerUser)

        |
        | emit("userRegistered")
        v

   EventEmitter
        |
        +-------------------+
        |                   |
        v                   v
Email Listener      Analytics Listener
(send email)        (save analytics)


@publisher emits the event 
@EventEmitter delivers the event to anyone listening 
@Subscriber ( listeners ) react to the event.
 */


import EventEmitter from "events";

const emitter = new EventEmitter()


// emitter.on("loginuser" , () => {
//     console.log("LoggedIn Successfully")
// });


// emitter.on("signup" ,() => {
//     console.log("signup done successfully")
// });



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

// emitter.once("Login" , () => {
//     console.log("sent verification email")
// });

// emitter.emit("Login")

// emitter.emit("Login")

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



// Removing listners

function login() {
    console.log("Logged-In ")
};

emitter.on("login", login)
// syntax emitter.on("login" , callback)

// node store
{
    login: [
        callback
    ]
}


// when
emit("login")

// Node finds

// find login

// loop through
// execute each callback

// internally it is almost like

// events:{
//     login: [fn1 , fn2 , fn3]
// }

// emitter.emit("login")


// emitter.off("login" , login)

// usefull when
// closing connection
// cleaning memory
// removing subscription




/* why this pattern exists 
Suppose 

.. user registered ..

After registration

you need 
.. send email 
.. save database
.. Generate JWT
.. Notify Admin

without EventEmitter 


register()
    ↓
sendMail()
    ↓
save database()
    ↓
Generate JWT
    ↓
Notify Admin

Huge coupling 


Instead 

register()
    ↓
emit("userRegister")

EveryOne else listens

Mail Service 
    ↓
Notification 
    ↓
loggin

Each independent 

this is called  
loose coupling



*/