import express from "express"
import Data from "./MOCK_DATA.json" with { type: "json"}
const app = express()

const PORT = process.env.PORT || 1010


// using the public folder at the root project


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Using the image folder at the route / images 

app.use("/images" , express.static( "images"))




app.get("/",(req , res ) => {
    res.json(Data)
});
// === get with next 

// app.get("/next" , ( req , res , next ) => { 
//     console.log(" The response will be sent by the next function")
//     next()
// }, ( req , res) => {
//     res.send("I just set up a route with a second callback ")
// }
// );





// app.get("/download-photo", ( req , res )=> { 
//     res.download("public/Hand.jpg")
// });

// app.get("/transfering-To", ( req , res )=> { 
//     res.redirect("https://www.mockaroo.com/")
// });

// ============= Routing Parameter ===============


app.get("/class/:id" , ( req , res) => { 
    const studentId = Number(req.params.id)

    const student = Data.filter((student) => student.id === studentId)

    res.send(student)
});

// ============================== Route chaining

app
    .route("/class")
    .get((req , res) => { 
        res.send("Here is get request")
    })
    .put((req , res) => { 
        res.send("Here is the put method")
    })
    .post((req , res) => { 
        res.send("Here is the post method")
    })
    .delete(( req , res) => { 
        res.send("Here is the delete method ")
    })

// ========================= 


app.post("/item" , ( req , res)=> { 
    console.log(req.body)
    res.send(req.body)
});






app.listen(PORT , () => { 
    console.log( `Here PORT is listing on ${PORT}`)
    // console.log(Data)
});


