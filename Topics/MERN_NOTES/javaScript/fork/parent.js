import { fork } from "child_process";

const child = fork("./child.js")


console.log("parent process has started")


child.send({
    type: "greetings",
    message: "Hello child"
});


child.on("message" , ( data) => {
    console.log( "parent message received:" , data)
});

child.on("exit", ( code )=> {
    console.log(`Child exit with code ${code}`)
});


/* Output 
parent process has started
Child process has started
Received Message: { type: 'greetings', message: 'Hello child' }
parent message received: { type: 'reply', message: 'Hello parent' }
Child exit with code 1 
*/