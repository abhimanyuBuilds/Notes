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




emitter.on("login" , (user , password , db_name , request) => {
    console.log(user.name) ,
    console.log(user.password) , db_name , request)
});

emitter.emit("login" , {
    user.name: "Abhimanyu" , 'db@@'
})


