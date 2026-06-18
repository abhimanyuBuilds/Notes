console.log("Child process has started")


process.on( 'message' , ( data) => {
    console.log("Received Message:" , data)


    process.send({
        type: "reply",
        message: "Hello parent"
    });

    process.exit(1)
})