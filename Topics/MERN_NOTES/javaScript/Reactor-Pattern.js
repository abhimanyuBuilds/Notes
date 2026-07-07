import fs from "fs"

console.log("start")

fs.readFile("data.txt" , "utf-8" , (err , data) => {
    console.log(data)
});

console.log("End")