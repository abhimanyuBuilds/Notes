what are the common method for express routing 
1. send - sends the http response
2. json - sends a JSON response 
3. download - Transfer the file as an attachment  


app.get("/download-photo", ( req , res )=> { 
    res.download("public/Hand.jpg")
});

4. redirect - redirect the user to the specified path

app.get("/transfering-To", ( req , res )=> { 
    res.redirect("https://www.mockaroo.com/")
});


what is route chaining in express







custom error handler function 

app.use(( err , req , res , next) => {
    console.log( err.stack);
    res.status(500).send("Something went wrong..")
})






Built-In middleware functions

1. express.json: parse incomming request with json payload
2. express.static : servers static assets
3. express.urlencoded : parses incomming requests with url-encoded payloads





How to debug your express application
DEBUG=express:* node --experimental-json-modules index.js
Now in new express world we use logger to debug the issue 



what is route parameter 

Route parameter is a dynamic part of the url

in Express we define it by :

The :id is called as route parameter
Accessing Route Parameter 
Express stores all route parameter inside 
req.params

why is req.params.id is a string
Beacuase URL path segment are text .Convert them with number if you need a numeric value






Query Parameter - is nothing but when we query something by url with ? called query parameterquery parameter is used for filtering , sorting , pagination , searching 
Example:- /users?page=2&sort=asc

