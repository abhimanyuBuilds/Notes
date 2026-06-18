import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
dotenv.config({ path: "./.env" });
// DataBase connection

console.log(process.cwd())
async function connectedDB(){
try {
    console.log(process.env.MONGODB_URI)
 await  mongoose.connect(process.env.MONGODB_URI)
  console.log(("✅MongoDB is Connected succesfully"));
} catch (error) {
    console.error("DataBase connection failed ❌",error)
}
return mongoose.connection
}

connectedDB()



// db.MongoDB_Practise.insertOne({
//     Name: "Abhimanyu Singh",
//     UserAddress: "Meerut/Gurugram",
//     LocalHost: "Same"
// })



// // create
// db.Practise.insertOne(
//     {
//         Name: "Abhimanyu Singh",
//         Designation: "Junior Back-End Dev",
//         CompanyName: "Atthah",
//         Scale: "L1",
//         Verified: false,

//         Education: {
//             Bachelors: "BS(CS)",
//             Masters: "MCA",
//             XII: "DAV"
//         },

//         Hobbies: {
//             outDoor: ["Running", "Shooting"],
//             inDoor: ["Badmintoon"]
//         },
//         PayingScale: "L2-Y7"
//     })

// Update  updateMany(filter, update) use $set for that 



// db.Practise.updateMany({
//     Name: "Abhimanyu Singh",
//     Designation: "Junior Back-End Dev",
//     CompanyName: "Atthah",
//     Scale: "L1",
//     Verified: false
// },
//     {
//     $set: {
//         Education: {
//             Bachelors: "BS(computer science)",
//             Masters: "MCA(computer application)",
//             XII: "DAV public school"
//         },
//         Hobbies: {
//             outDoor: ["Running",  "Cycling" ],
//             inDoor: ["Badmintoon" , "Shooting"]
//         },
//         PayingScale: "L2-Y7"
//     }
//     }
// );


// db.Practise.updateMany({
//     Name: "Abhimanyu Singh",
//     Designation:"Junior Back-End Dev"
// },
// {
//     $set: {
//         Skills: {ProggramingLanguage: ["JavaScript" , "Python"],
//             DataBases: ["PostgreSQL" , "MYSQL" , ""],
//             cloud: ["Azure" , "AWS"]
//         },
//     }
// }
// )


//  Quesry to find some data 

// db.Practise.find({Name: "Abhimanyu Singh"})

//  Query to find the data where their is nested inside some object or array 


// db.Practise.find({"Hobbies.outDoor": {$in: ["Running" , "Shooting"]}})





// db.Practise.updateMany(
//     {
//         Name: "Abhimanyu Singh" , 
//         Designation: "Junior Back-End Dev"
//     }, 
//     {
//     $set:
//         { SubjectMarks: 
//             { Physics: 78, 
//                 Maths: 77, 
//                 Chemistry: 78 ,
// }
// }
// });



// find the less then marks 

// db.Practise.find({"SubjectMarks.Physics":{ $lt: 80}})


// db.Practise.insertOne({
//      Name: "Karan Malhotra" , 
//      Designation: "Java Spring Boot Dev" ,
//      Company: "Nortlesa" , 
//      Scale: "EMP-l1" , 
//      Verified: "false",

//      Education: {
//      Bachelors: "B-tech" , Masters: "MCA" , XII: "BDS",
//      },

//     Hobbies:{
//         Sports:{
//         outDoor:"Cycling" ,
//         indoor:"GYM"
//         }
//     }
// });


// db.Practise.insertOne({
//     Name: "Rajan Chaudhary",
//     Education: "B-tech(CSE)",
//     Gender: "M",
//     PhoneNo: "+91-888392099",
//     Skills:{
//         DataBases:{
//             SQL: ["ORACLE PL/SQL" , "MYSQL" , "POSTGRESQL",] ,
//             NOSQL: ["DYNOMODB" , "MONGODB" , "AWS RDS"],
//         },
//         PMP:{
//             CERTIFICATION: ["PMP CERTIFIED" , "B2B CERTIFIED"] ,
//         },
//         Hobbies:{
//             OUTDOOR: ["Cricket" , "GYM" , "HOURSE RIDING"],
//             INDOOR: ["SHOOTING"]
//         },
//     }
// }
// )



// ==================================== DB Connected===================================


// CURD OPERATIONS

// C Create 

// db.Practise.insertOne([
//     {Name:{
//         FirstName: "Abhimanyu",
//         LastName: "Singh"
//     }},
//     {Education:{
//         "Master's": "M-tech",
//         "Bachelor's": "BS(CS)",
//         "SCHOOLING": "X -XII",
//         "SCHOOL-SUBJECT": "PCM",

//     } },
//     {CompanyName: "Deustche Bank"},
//     {PastCompanies:["IBM" , "NCR Atelos" , "Hexa-Ware"  , "Deustche Bank" ,"IBM" ,"HCLtech" ,"Deustche Bank"]},
//     {timestamps: true}
// ])

// db.Practise.insertMany({})

db.Practise.find()

db.Practise.find({Age: 24})
