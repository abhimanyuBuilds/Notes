
import fs from "fs"

// console.log("Start")

// const files = fs.readFileSync('./Topics/beforeDSAQuestion/BEFORE_DSA.pdf')


// const files = fs.readdirSync('./Topics')


// console.log(files)

// files.forEach((file) => {
//     console.log(file)
// })

// const file = fs.readdirSync('./Topics/beforeDSAQuestion');



// fs.readdir("./" , function( err , files ){
//     if(err) {
//         throw err;  
//     }
//     console.log(files)
// });

// console.log("reading files...")


// reading a file 

// fs.readFile('./Guide.md', "utf-8", (err, readData) => {
//     if (err){
//         console.error( err )
//         return ;
//     }
//         console.log(readData)
// });

// console.log("Reading File...")


// writting and appending the file 

// create Dir


// fs.mkdir("FileHere" , (err , data )=> {
//     if( err ){
//         console.error("Error happen while creating dir")
//     }else{
//         console.log("Dir created")
//     }
// });



// rename file with fs

// Synchronous version


// fs.renameSync("./beforeDSAQuestion/ArrayQuestion.js" , "./beforeDSAQuestion/arrayQuestion.js")

// console.log("Array file is renamed")



// Async version

// fs.rename( "./beforeDSAQuestion/arrayQuestion.js" , "./beforeDSAQuestion/ArrayQuestion.js" , (err , data ) => {
//     if( err ){
//         console.error("Error" , err)
//     }else{
//         console.log("File Renamed Successfully")
//     }
// });

// console.log("Renamed successfully with async")


// remove the file from folder

// fs.unlinkSync("./fs/text.md")

// fs.unlink("./fs/text.md", (err , data ) => {
//     if( err ){
//         console.error( "Error" , err)
//     }else{
//         console.log("Removed File successfully")
//     }
// });


// {Output: Removed File successfully}





// create stream for reading data 



const readableStream = fs.createReadStream('./INTERVIEW/Topics.md', 'utf-8')

let count = 0


readableStream.on("data", (chunk) => {
    count++ 
    console.log(" Received chunk ")
    console.log(chunk )
    console.log( `count is ${count}`)
});

readableStream.on("end", () => {
    console.log(" File reading completed ")
});


// writeable stream 



