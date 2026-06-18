// // DAY 9 April 2026 Express.js Routing 


// const express = require("express");

// // const app = express();

// // app.use(express.json());

// // app.set("view engine","ejs");


// // app.use(express.urlencoded({extended:false}));






// // app.post("/SignUp",(req,res)=>{
// //     res.send(req.body);
// // });



// // app.get("/Login",(req,res)=>{
// //     res.send("Hi");
// // });






// // app.get("/home",(req,res)=>{
// //     res.send(req.protocol);
// // });




// // app.get("/about/:userid",(req,res)=>{
// //     res.send(req.route)
// // })





// // app.get("/about",(req,res)=>{
// //     res.send(req.route);
// // });


// // app.get("/home",(req,res)=>{
// //     res.send(req.secure);
// // });


// // app.get("/home",(req,res) => {
// //     if(req.accepts('html')){
// //         res.send("<h1> We are Accepting html</h1>");
// //     }else if(req.accepts("xml")){
// //         res.send("<h2> We are Accepting xml</h2>");
// //     }else if (req.accepts("Graphql")){
// //         req.send({message :" Graphql"})
// //     }else if(req.accepts("JSON")){
// //         req.send("<p1> We are Accepting JSON also</p1>");
// //     }else{
// //         req.send("Content type not supported");
// //     }
// // });


// // app.get("/home",(req,res)=>{
// //     res.send(req.get("Connection"));
// // });



// // app.post("/Aboutus",(req,res)=>{
// //     if(req.is("application/json")){
// //         res.send("Valid Json Data..");
// //     }else if(req.is("text/html")){
// //         res.send("Valid Html Data");
// //     }else{
// //         res.status(400).send("Invalid Data");
// //     }
// // });




// // app.get("/search",(req,res)=>{
// //     console.log(req.query);
// //     res.send(req.query);
// // });


// // app.post("/Login",(req,res)=>{
// //     const {username , password} = req.body;

// //     console.log(req.body);
// //     res.send(req.body);
// //     console.log(username);
// //     console.log(password);
// //     res.send("Login Succesfully")
// // })





// // app.post("/Login",(req,res)=>{
// //     const {username , password, email} =req.body;

// //     if(!username || !password || !email){
// //         return res.status(400).send("Your Miss Value");
// //     }
// //     res.send("Login Successfully");
// // });


// // app.get("/Login",(req,res)=>{
// //     res.send(req.headers.connection);
// // });



// // app.get("AboutUs...",(req,res)=>{
// //     res.send(req.get("host"));
// // });


// // app.listen(3000, ()=> {
// //     console.log("Server is running on port 3000");
// // });




// // app.get("/home",(req,res)=>{
// //     res.download("./files/ilovepdf_merged (2).pdf", "MYPDF.pdf");
// // });

// // app.get("/home",(req,res)=>{
// //     res.sendFile("files/ilovepdf_merged (2).pdf");
// // });




// // app.get("/error",(req,res)=>{
// //     res.sendStatus(200).send("Hello")
// // });


// // app.get("/check",(req,res)=>{
// //     res.set('custom-header',"Hiii12");
// //     console.log(res.get('custom-header'));
// //     res.send("header Set");
// // });

// // app.get("/check",(req,res)=> {
// //     res.set("DataTobeSend","Data 1234");
// //     console.log(res.get('DataTobeSend'));
// //     res.send("DataTobeSend");
// // })












// // const crypto = require("crypto");


// // function ifscgenerateNumber(){
// //     const bankCode = "AXISIND0";
// //     const branchCode =  crypto.randomBytes(2).toString("hex");
// //     return `${bankCode}${branchCode}`;

// // };


// // console.log(ifscgenerateNumber());

// // function customerNumbergenerator(){
// //     const bankName = "AXISIND";
// //     const customerid = crypto.randomBytes(2).toString("hex");
// //     return `${bankName}${customerid}`;
// // };

// // console.log(customerNumbergenerator())



// // const array = new Uint32Array(5); // Create a typed array for 5 numbers
// // window.crypto.getRandomValues(array);
// // console.log(array); // Example: [382910, 12930, ...]





// // AXIScd1526beok



// // let studentData = {
// //     StudentName : "Abhimanyu Singh",
// //     StudentID :"Ra243220410099",
// //     StudentCourse : "M.C.A",
// //     StudentEmail : "AbhimanyuNalwa99@gmail.com",
// //     StudentEnrollNo : "8291RA221",
// //     Branch : "CSE",
// //     GRADE : "O+"
// // };



// // In this I'll Add Login functionality and some front end task 

// // app.get("/",(req , res)=> {
// //     // res.send(studentData);
// //     // console.log("<h1>Welcome to My project</h1>");
// //     // console.log(`student data sent:${studentData}`)
// //     res.send("<h1>Hi this is our Home Page</h1>")
// // });













// // app.get("/home",(req,res)=>{
// //     res.send("<h1>Home-Page</h1>")
// // })

// // app.get("/login-page",(req,res)=>{
// //     res.send("Login-page")

// // });



// // app.get("/home",(req,res)=>{
// //     res.render('home')
// // });


// // app.get("/sign-up",(req,res)=>{
// //     res.send("sign-up")
// // });

// // app.get("/Withdrawl",(req,res)=>{
// //     res.send("Withdrawl")
// // });

// // app.get("/Transaction",(req,res)=>{
// //     res.send("Transaction")
// // });

// // app.get("/Deposit",(req , res)=>{
// //     res.redirect(301,"/transaction-history");
// // });




// // app.get("/transaction-history",(req,res)=>{
// //     res.send("<h1> Trasanction History</h1>");
// //     // res.json({
// //     //     message:"Data Sent",
// //     //     UserData : req.params.UserID
// //     // });
// // });


// // app.get("/search",(req,res)=> {

// //     // const Name = req.query.name
// //     // const Age = req.query.age

// //     // res.send(`Search Result for Name is:${Name} & Age is : ${Age}`);
// //     res.redirect("/home");
// // //   /  res.send(req.query);
// // });









// // app.put("/",(req,res)=> {
// //     studentData =req.body;

// //     res.json({
// //         message: "Student data replaced successfully ",
// //         updatedData: studentData
// //     });
// // });





// // app.patch("/student",(req,res)=> {
// //     const updates = req.body;

// //     console.log("Incoming Data",updates)
// //     studentData = {...studentData , ...updates};

// //     res.json({
// //         message: "Student data updated successfully",
// //         updatedData : studentData
// //     });

// // });




// // REQUEST PROPERTIES & METHODS


// // app.get("/Login",(req,res)=>{
// //     res.send(req.ip);
// // })






// // app.get("/Login",(req,res)=>{
// //     res.send(req.hostname);
// // })



// // app.get("/Login",(req,res)=>{
// //     res.send(req.method)
// // });




// // app.post("/Login",(req,res)=>{
// //     res.send(req.body);
// // });














// // const express = require("express");


// const {v4 : uuidv4} = require("uuid");
// const uuid = uuidv4();

// console.log(`UUID: ${uuid}`)
















// let User = {
//     "Name": "Abhimanyu Singh",
//     "Company": "Atthah",
//     "Designation": "Back-End Developer",
//     "Address": "Gurgaon,Haryana"

// }
// // Creating a Normal Route 

// app.get("/AboutUs", (req, res) => {
//     // console.log(res.status);
//     res.status(200).send("<h1> Please Login</h1>");
// });



// app.post("/SignUp", (req, res) => {
//     console.log(req.body);
//     res.send({
//         message: "Sign Up successfully...",
//         data: req.body


//     });
// });



// app.post("/Login", (req, res) => {

//     console.log(req.body);

//     res.send({
//         message: "Login successfully...",
//         data: req.body

//     });
// });


// app.patch("/Personal-Information", (req, res) => {
//     try {

//         const AllowedUpdateFields = ["Name", "Company", "Designation", "Address"];

//         const updates = Object.keys(req.body);

//         const isValid = updates.every(field => AllowedUpdateFields.includes(field));

//         if (!isValid) {
//             return res.status(400).send("Invalid field in update");

//         }
//         updates.forEach(field => {
//             User[field] = req.body[field]
//         });

//         res.send({
//             message: "Patch Edited Succesfully",

//             UpdatedData: User
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server Side Error");
//     }
// });



// app.get("/Information", (req, res) => {
//     res.redirect(301, "/Personal-Information");
// });




// app.listen(process.env.PORT, () => {
//     console.log(`Server running on Port${PORT}`)
// })



// console.log(connectionInstance);



// evenodd check 


// let num = 129292;

// let result = num >= 2000039 ? "Largest" : "Smallest";

// console.log(result);


// let string = "AbhimanyuSingh";

// let lengthCheck = string.length > 8 ? "we will not print" : `${string}`

// console.log(lengthCheck);


// let string = "AbA-AbA-AbA-AbA";

// let reverseString = "";

// for(let i = string.length -1 ; i >= 0 ; i--){
//     reverseString +=string[i];

// }
// const result = string === reverseString ? "Yes it is Palindrome" : "No it is not";
// if(string === reverseString){
//         console.log("Yes it is palindrome..");
//     }else{
//         console.log("Not a Palindrome");
//     }   

// };

// console.log(`Here is your result => ${result} : ${reverseString}`);


// let Num = 121-121-121-121-1321;

// let reverse = "";

// for(let i = Num.length - 1 ; i >= 0; i--){
//     reverse += Num[i];
// }
// if(Num === reverse){
//     console.log("Yes it is a palindrome");
// }else{
//     console.log("No it is not..");
// }

// console.log(reverse);





// let isLogin = true;

// let Status = isLogin = 1 ? "Login" : "Logout"

// console.log(Status);



// calender 




// const prompt = require("prompt-sync")();

// const num = Number(prompt("Enter your Number..."));

// let date = num;

// let dayName = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];

// for (let i = 1; i<= 31; i++) {
//     console.log(`Day ${i}: ${dayName[(i - 1) % 7]}`);
//     // return `${num}${dayName}` 
// }



// fetch the value which is lower case 

// const Name = "ABhimanYU SINGH";
// let result = "";

// for (let i = 0; i < Name.length; i++) {
//     if (Name[i] === Name[i].toLowerCase() && Name[i] !== " ") {
//         result += Name[i];
//     }
// };
// console.log(result);


// fetch the value which is upper case

// const fullName = "AbhimanyuSingh"
// let result1 = " ";

// for(let i = 0 ; i < fullName.length ; i++){
//     if(fullName[i] === fullName[i].toUpperCase() && fullName[i] !== " ")
//         result1+= Name[i];
// }
// console.log(result1)


// fetch the value which is vowel  

// const Name = "AbhimanyuSinghChaudhary";

// let result = "";

// for(let i = 0; i < Name.length ; i++){
//     let char = Name[i].toLowerCase();

//     if(char === 'a' || char === 'e' ||char ===  'i' ||char ===  'o' ||char ===  'u')
//      result += char;
// }

// console.log(result)


// fetch the vowel with function 


// const Name = "AbhimanyuSinghChaudahry";


// function fetchingVowel(Name){
//     let result = "";
//     for(let i = 0 ; i < Name.length ; i++){
//         let char = Name[i].toLowerCase()

//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             result += char 
//         }

//     }
//     return result ;
// }


// console.log(fetchingVowel(Name))

// finding min value in array 



// const arr = [ 5,13,14,15,16,17,9]

// let minValue = arr[0];

// for(let i = 0; i < arr.length ; i++){
//     if(arr[i] < minValue){
//         minValue = arr[i]
//     }
// }
// console.log(minValue)



// finding max value 

// const arr2 = [1243, 47389, 19921, 1929933,190102]

// let maxValue = arr[0];

// for(let i = 0 ; i < arr2.length ; i++){
//     if(arr2[i] > maxValue){
//         maxValue = arr2[i]
//     }
// };


// console.log(maxValue)


// count the vowel how many vowel are there 

// const Name = "AbhimanyuSinghChaudhary";

// function vowelFind(Name){
//     
//     let count = 0 ; 
//     for(let i = 0 ; i < Name.length ; i++){
//         let char = Name[i].toLowerCase();
//         if(char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++
//         }
//     }
//     return count 
// }

// console.log(vowelFind(Name));



// removing duplicate 

// const arr = [12,12,13,13,14,15,16,16,17];

// const unique = arr.reduce((acc , curr) => {
//     if(!acc.includes(curr)) {
//         acc.push(curr);
//     }
//     return acc;
// },[])

// console.log(unique);

// // 


// const arr = [ 1 ,2 ,4 , 56 ,7 ,2, 3 , 4 ,56]

// const set = new Set(arr)

// console.log(set.has(111))

// console.log(set.add(23))

// console.log(set.delete(2))

// console.log(set.size)
// console.log(unique.has(2));





// const users = [
//     {id: 1 , Name: "AbhimanyuSingh"},
//     {id: 2 , Name : "ShivamSingh"},
//     {id: 1 , Name: "AbhimanyuSingh"}
// ]

// const unique = Object.values(
//     users.reduce((acc,curr)=> {
//         acc[curr.id]= curr;
//         return acc
//     } ,{})
// );

// console.log(unique);

// Ternary Operator 

// Ternary operator has 3 operand and it also know as special operator 

// if the value of age > 18 , set the value of the text then "Adult" , "Minor"

// let Age = 32;
// let text = (Age > 18)? "Adult":"Minor";
// console.log(text)



// ++ Prefix Operator  
// Postfix Operator -- 

// let gameCounter = 100 ;

// let Score = 50;

// ++gameCounter 

// Score--

// console.table([gameCounter , Score])

// DataType conversion 



// let Score = 33;

// console.log(typeof Score);

// const cricketScore = String(Score)

// console.log(cricketScore);
// console.log(typeof cricketScore);

// let score = 1 ; 

// console.log(Boolean(score));  true 



// let score = 0 ; 

// console.log(Boolean(score));  false


// let value = 33;

// let negValue = -value 

// console.log(negValue);


// premitive Datatype it is used to take copy of from stack by default their nature is immutable Stored by Value  (Number , BigInt , Symbol , String , Boolean , Null , Undefined)

// Number , String , Boolean , BigInt , Null , Undefined , Symbol 

// Non Premitive Datatype it is used to take refrence from Heap and then used to Store data by refrences and their nature is Mutable (Object , Array , Function) 

// Object , Array , Function 



// We can also print output in table format 

// like this  
// let Score = 22;
// let admin = "harsh";
// let user = "jatin"
// console.table([Score,admin, user]) But their KEY would be shown in Index like this Value..
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │ 0       │ 22      │
// │ 1       │ 'harsh' │
// │ 2       │ 'jatin' │
// └─────────┴─────────┘



// console.log("2"===2);

//  ---------------------------  STACK and HEAP ---------------------------------

// ------------------ STACK -----------------------
// let mailID = "AbhimanyuSingh7@gmail.com"          IN STACK THEIR ARE PREMETIVE TYPE DATA ARE PRESENT 
// let anotherid = mailID;                           AND STACK TAKE THE VALUE OF A COPY AND THATS Y IT NEVER CHANGE VALUE  
// anotherid = "Abhi33@gmail.com";                   ALSO IN STACK ALL THE DATATYPE ARE IMMUTABLE ....
// console.log(mailID)                               like (Number , Boolean , BigInt , Symbol , Null , Undefined , String)
// console.log(anotherid)


// ---------- HEAP --------------------- 

// const mailID = {                          IN HEAP THE VALUE IS STORED BY REFRENCES AND IT IS IN NATURE Is MUTABLE 
//     email : "Abhimanyu88@gmail.com",      AND IT CAN BE CHANGED AS A RESULT OF THAT IN HEAP NON PREMETIVE DATA TYPE ARE USED 
//     userName: "Abhi88Singh"               LIKE (Object , Array , Function )
// };

// let onemailID = mailID
// onemailID.email = "Abhi66@gmail.com";

// console.log(onemailID.email)  Abhi66@gmail.com
// console.log(mailID.email)      Abhi66@gmail.com




// ---------------------------   String  ---------------------------------- 




// const gameChanger = new String("Abhimanyu");
// console.log(gameChanger) [String: 'Abhimanyu']

// console.log(gameChanger[1])  b 


// console.log(gameChanger.charAt(3)) // i 

// console.log(gameChanger.indexOf("m"))  4

// console.log(typeof gameChanger)



// const newVar = new String("AbhimanyuSinghChaudhary");
// console.log(newVar)
// // console.log(newVar.length) 25
// console.log(newVar.trim())

// console.log(newVar.trimEnd())
// console.log(newVar.trimLeft())
// // console.log(newVar.valueOf())?? 
// // console.log(newVar.replace('-','','-',''))  AbhimanyuSingh-Chaudhary

// console.log(newVar.includes('man','ngh','ary'))

// console.log(newVar.endsWith("ary")) true 

// console.log(newVar.bold()) 

// console.log(newVar.constructor())

// console.log(newVar.search("Singh"));

// console.log(newVar.repeat(2))

// console.log(newVar.match(/(?<letter>h)/));
// console.log(newVar.split('-'))

// const words = newVar.split(" ");
// console.log(words[2])

// const chars = newVar.split(" ");
// console.log(c[2])


//  --------------------------  Number and Math -------------------------------------------- 


// const Score = 100 ; 
// console.log(Score.toString().length)


// const Score = new Number(100);
// console.log(Score.toString().length);  4 

// console.log(Score.toPrecision(10))  1000.000000
// console.log(Score.toFixed(1))

// console.log(Score.toLocaleString('en-IN'))    10,00,00,00,00,000

// console.log(Score.valueOf(999));


// --------------------------- Math ---------------------------------


// console.log(Math)

// console.log(Math.random())

// console.log(Math.abs(-55))

// console.log(Math.ceil(33.9))

// console.log(Math.floor(45.9))

// const minValue = Math.min(12,13,14,15,9)
// console.log(` Here Min value is :${minValue}`)


// const maxValue = Math.max(12,188,199,1299,28929)
// console.log(maxValue)





// -------------------------   Dates   ----------------------------------

// let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toString())
// console.log(mydate.toUTCString())
// // console.log(mydate.to)

// console.log(mydate.getDate());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth()+1);
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());

// console.log(mydate.getSeconds());
// console.log(mydate.getMilliseconds());
// console.log(mydate.getTime())


// ------------------- Array ------------------------------



// const data = ['Abhimanyu' , 'Meerut' , 'DAV' , 'CCS' , 'SRM' , 'BIT']
// // const info = ['Muzaffarnagar' , 'Bagpat' , 'Barout' , 'Shamli', 'Sardhana']

// data.push('MIT')      addds at end , return length 
// data.pop()            remove BIT 
//  const result = data.unshift('MCA')            //adds at start and return length
// data.shift()        //  remove first and return first element 

// const result = data.concat(info)   // merge array 

// spread operators  (...) to join two array without any limitations 


// const result = [...data , ...info];

// console.table(result);
// console.log(result);

// Splice  difference b\w slice and splice is in splice the data is out from the array 

// console.log('OG A',data)
// const result = data.splice(1,5);

// console.log('Data in Splice left ',data)
// console.log('Data with Splice',result)


// slice 


// console.table(data)
// const result1 = data.slice(0,5)
// console.log('Data Used after slice',data)
// console.log('Slice data',result1)



// const updatedData = [...data , 'MIT']
// console.table(data);

// indexof tell the index of value 

// const result = data.indexOf('SRM');
// console.log(`Your SRM is at ${result}th index`);
// console.table(data)

// includes() tell in array it include the value or not 

// const result = data.includes('BIT')
// console.log(result);
// console.table(data);



// flat() use flat when u have nested array and u have to solve it means open in one array 

// const data = ['Abhimanyu' , 'Meerut' , 'DAV' , 'CCS' , 'SRM' , 'BIT' ,['Muzaffarnagar' , 'Bagpat' , 
//     'Barout' ,
//      'Shamli', 'Sardhana'] , [1,2,3,4,'IXjat','IAF Garood',"PARASF","NPG",'HARYANA SOG','CIA','NIA']
// ]

// const result = data.flat(Infinity)
// console.table(result)


// isArray()

// console.log(Array.isArray("Abhimanyu"))  // return false/ true if they are array or not   --- false 

// console.log(Array.isArray(["Abhimanyu"]))   // return false/ true if they are array or not   ---  true



// .from() Basically give the array from a string [
//   'A', 'b', 'h',
//   'i', 'm', 'a',
//   'n', 'y', 'u'
// ]

// console.log(Array.from('Abhimanyu'))



//  .from()  {name: 'Abhimanyu'}

// console.log(Object.keys(Array.from({name:'Abhimanyu'})))

// console.log(Object.keys({name:'Abhimanyu'}));
// console.log(Object.values({name:'Abhimanyu'}));


// .of()
// let Physics = 88;
// let Chemistry = 90;
// let Maths = 77; 

// console.log(Array.of(Physics,Chemistry,Maths))

// ---------------------- OBJECTS -------------------------
//    **** IMPORTANT INTERVIEW ****
//  take a symbol and define it in key and then take symbol 
// To access symbol from object 

// const mysymbol = Symbol("AbhimanyuSingh@gmail.com")

// const data = {
//     name:"Abhi",
//     Age:24,
//     [mysymbol]:"AbhimanyuSingh@gmail.com",
//     Course:"MCA",
//     Graduation:"BSC CS",
//     XII:"PCMB",

// }

// console.log(typeof mysymbol)

// console.log(Object.keys(data))

// console.log(Object.keys(data))

// console.log(typeof mysymbol)

// console.log(typeof [mysymbol])

// console.log(data)
// data.email = 'Abhimanyu77@gmail.com'   // to update the values by key 

//  to freez the object 
// Object.freeze(data)
// data.Age = 23; not changed because we freeze the Object 
// console.log(data)

// data.greetings = function(){
//     return `Hello ${this.name}`
// }

// console.log(data.greetings())
// Because symbol keys are hidden from Object.keys()
// TO CHECK THE TYPEOF WE NEED TO ONLY SEE THE KEY TYPEPF BECAUSE THE VALUE ALWAYS BE THE STRING
// END QUESTION 



//  Object IMPORTANT TOPIC SINGLETON / NON SINGLE TON 

// SINGLETON = WHEN WE HAVE ONE INSTANCE OF THE OBJECT .
//  WE DON'T NEED TO CREATE COPIES OF OBJECT  .
//  WE ALREADY HAVE THE OBJECT WE DON'T NEED TO CREATE THEM .
// ONLY ONE REFRENCES ARE USED ..
//  BOTH POINT TO SAME OBJECT IN MEMORY  THAT'S WHY IT BEHAVE LIKE SINGLETON 

// const data = new Object()   example 


// EXAMPLE 
// const obj1 = {
//     name: "Abhimanyu"
// }

// const obj2 = obj1;

// obj2.name = "Rahul";

// console.log(obj1.name) // Rahul this is called single ton 



// NON SINGLE TON 

// A NON-SINGLE TON OBJECT MEANS YOU CAN CREATE MULTIPLE INSTANCE COPIES

// example 

// function User(name){
//     this.name = name
// }

// const u1 = new User("Abhimanyu");
// const u2 = new User("Rahul");

// console.log(u1);
// console.log(u2);



// const data = {
//                               NON SINGLETON OBJECT 
// }



//  Merging two objects   spread operators will always be use with [] , {}; 
// TO MERGE OBJECT WE HAVE 2 WAY 1. Object.assign 2.spread operators [] ,{} ...

// const obj = {
//     name: "Abhi"
// };

// const obj2 = {
//     name2: "Shivam" 
// }

// const obj3 = Object.assign(obj,obj2);
// // const obj3 = {...obj , ...obj2};

// console.log(obj3);

// Array of Objects

// const data = [
//     {
//         id: 2,
//         email: "AbhimanyuSingh7@gmail.com"
//     },
//     {
//         id: 3,
//         email: "Yash@gmail.com"
//     },
//     {
//         id: 4,
//         email: "Jatin@gmail.com"
//     }
// ];

// const result = data[2].email
// console.log(result);




// console.log(Object.keys(data))
// console.log(Object.values(data))

// console.log(data.hasOwnProperty("XII"))



// ALTERNATIVE METHOD TO FETCH DATA FROM OBJECT 




// const mysymbol = Symbol("AbhimanyuSingh@gmail.com")

// const data = {
//     name:"Abhi",
//     Age:24,
//     [mysymbol]:"AbhimanyuSingh@gmail.com",
//     Course:"MCA",
//     Graduation:"BSC CS",
//     XII:"PCMB",

// }


//  we can also define our own name 

// const {Course: course} = data

// console.log(course)



// FUNCTION && PARAMETER 


// function emailchecker(email){
//     if(!email){
//         console.log("please enter your Email..");
//         return
//     }
//     return `User email is ${email}`
// }

// console.log(emailchecker('AbhimanyuSingh77@gmail.com'));
// console.log(emailchecker("Abhi33@gmail.com"));


// function sayhello(name){
//     return `greetings ${name} `
// }

// console.log(sayhello("Abhi"))


// taking n number of parameter  with REST Operator (...) it can be used as both spread and rest but use cases are differenet 

// function calculateCart(...num){
//     return num
// }

// console.log(calculateCart(200,138,233,453,233,5600))


//  **** INTERVIEW **** 

// if we have 3 parameter like this 

// function calculateCart(val1,val2, ...num){
//     return num 
// }

// console.log(calculateCart(200,300,4000,540303))
// output [ 4000, 540303 ]   

// why these two come only [ 4000, 540303 ]  because it goes into (...) rest operator and it came from rest operator 


// Your question:

// "if you put val1,val2 in return then also it never came as output is this true?"

// ❌ Not true

// You can absolutely return them — you just need to include them in the return.


//  you can also return all with using object and array 




// function calculateCart(val1,val2, ...num){
//     return [
//         val1,
//         val2,
//         num
//     ]
// }

// console.log(calculateCart(200,300,4000,540303))



//  using object with function 

// const info = {
//     id: 204,
//     name: "Abhimanyu Singh",
//     Course: "MCA",
//     College: "SRM"
// }


// function talkingobj(anyobj){
//     return anyobj["name"]
// }

// console.log(talkingobj(info))


// using array with function 

// const data = [12,13,14,"Abhi"]

// function check(anyarr){
//    let result = data.push(8)
//    console.log(result)
//    return data
// //    return result
// }

// console.log(check(data))


// GLOBAL SCOPE AND LOCAL SCOPE 


// var c = 990;

// if(true){
//     let a = 50
//     let b = 40 
//     var c = 30
//     console.log("Inner",a) 
// }

// console.log(c)




// THIS AND ARROW FUNCTION 


// this method is used to call this in arrow function beasically arrow function inherite from parent to give property of object 



// const user = {
//   name: "xyz",

//   hello() {
//     return {
//       tt: () => {
//         console.log(this.name)
//       }
//     }
//   }
// }

// const yy = user.hello();
// yy.tt();   




// const info = {
//     userName: "AbhimanyuSingh",
//     Age: 24,
//     welcome: function () {
//           const now = () => {
//                 console.log(this.userName);
//             };
//             now();
//         }
//     }
// info.welcome()






// const obj = {
//     name: "Abhi",

//     normal: function () {
//         console.log(this.name); // Abhi
//     },

//     arrow: () => {
//         console.log(this.name); // ❌ undefined
//     }
// };

// obj.normal();
// obj.arrow();




// const info = {
//     userName: "Abhimanyu Singh",
//     Age: 24,

//      welcome: function (){
//         console.log(`${this.userName} Ram Ram...`)
//         return `You're Age is ${this.Age}`
//     }
// }

// console.log(info.welcome())


// function greet(){
//     return `${this.userName}`
// }

// console.log(greet())


// arrow function

// in arrow function we have two type of function explicit and implicit function

// IN ARROW FUNCTION IF WE WRAP IN {} THEN NEED TO USE RETURN


// explicit function


// const addTwo=(num1,num2)=>{
//     return num1 + num2;
// }


// console.log(addTwo(34,45));


// implicit function



// const addThree = (num3,num4,num5)=> (num3+num4+num5)
//    //                or
// const addFour = (num6,num7,num8) => num6+num7+num8


// console.log(addThree(12,13,14));


// console.log(addFour(23,43,56));




// Arrow function it take this from global scope but only run i browser only know thats it 

// Arrow is just a tool to inherit (this)
// object method -> always prefer normal fucntion 


// Real-world Example

// const obj ={
//     userName: "Abhi",
//     fetchData: function(){
//         setTimeout(()=>{
//             console.log(this.userName)
//         },3000)
//     }
// }

// obj.fetchData()





// IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION 


// WHY WE USE IT  

// BECUASE IN OUR GLOBAL SCOPE THEIR ARE MANY POLLUTION THAT ARE BEING POLLUATED OUR CODE BASE TO REMOVE 
// THAT VARIABLES OR  WHATEVER DECLARED NEED TO REMOVE WITH THE HELP OF (IIFE)


// THERE ARE TWO TYPE OF IIFE 1.NAMED 2.NON NAMED 

// (function greet(){
//     // Named iife
//     console.log("ABHI")
// })();



// (()=>{
//     // UnNamed IIFE
//     console.log("Hello")
// })()


// Parameter and Argument Passed IIFE

// ((name)=>{
//     console.log(`Hi you just sing up ${name}`)
// })("ABHIMANYU")


// if you write two IIFE together then u need to add (;) at the end of starting one like this 


// (function greet(name){
//     console.log(`Hello ${name} please enter OTP`);
// })("Abhimanyu");

// ((name)=>{
//     console.log(`Hi You're good please have a seat ${name}`)
// })("Ajay")


// Hello Abhimanyu please enter OTP
// c:\Users\ACER\OneDrive\Desktop\Abhi\Atthah_practise\student-api\server.js:1521
// ((name)=>{
// ^

// TypeError: (intermediate value)(...) is not a function
//     at Object.<anonymous> (c:\Users\ACER\OneDrive\Desktop\Abhi\Atthah_practise\student-api\server.js:1521:1)
//     at Module._compile (node:internal/modules/cjs/loader:1812:14)
//     at Object..js (node:internal/modules/cjs/loader:1943:10)
//     at Module.load (node:internal/modules/cjs/loader:1533:32)
//     at Module._load (node:internal/modules/cjs/loader:1335:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.14.0


// to remove this error add ; to first one 

// After adding ; 

// Hello Abhimanyu please enter OTP
// Hi You're good please have a seat Ajay



// what is hoisting and destructuring


// Hoisting is basically in js is refer to when we write a function declaration.
// and then we used to access not in after the function but in 
// before the function also 
// Hoisting is js is a behaviour where variables and function declaration are moved to the top of their scope during the creation phase of execution


// Destructuring is the syntax that allow us to extract values from array (by position) 
// and from object (by Properties) and stored them into seprate values 

// Array Destructuring is done by position 

//  while Object Destructuring is done by key 



// JavaScript Oops concept 


// Starting with Encapsulation 

// Encapsulation  in oops is to bundling data (variables) and method (function) 
// together and private them to not access out side the class

// why it use 

// it use to hide the data  


// EXAMPLE OF ENCAPSULATION

// class BankAccount{
//     #balance = 0  // private field 

//     deposite(amount){
//         if(amount > 0){
//             this.#balance += amount
//         }
//     }
//     withdraw(amount){
//         if(this.#balance >= amount){
//             this.#balance -= amount
//         }
//     }
//     getBalance(){
//         return this.#balance;
//     }


// }

// const acc = new BankAccount();
// acc.deposite(1000);
// acc.withdraw(450)
// console.log(acc.getBalance());





// function user(userName, Email, PhoneNo, Address, Designation) {
//     this.userName = userName
//     this.Email = Email
//     this.PhoneNo = PhoneNo
//     this.Address = Address
//     this.Designation = Designation




//     this.greetings = function () {
//         console.log(`Hello ${this.userName}`)
//     }
// }

// const userOne = new user('Abhimanyu Singh', 'Ab@gmail.com', 998282877, 'D12D Meerut', 'Back-End Dev')
// const userTwo = new user('AdityaSingh', 'OracleDB@gmail.com', 7792343123, 'Noida-D99', 'Oracle DB Engineer')
// userOne.greetings()
// console.log(userOne)
// userTwo.greetings()
// console.log(userTwo)

// console.log(userOne instanceof user)
// console.log(userTwo instanceof user)



//  Prototype  This prototype is just another object that your object can “inherit” properties and methods from.








                //  FUNCTION -----------------> 


                // ARRAY ---------------------->          OBJECT  --------------> NULL 


                // STRING --------------------->








// function data(userName, Age, Email, Education, Designation, Gender, Address) {
    // this.userName = userName
    // this.Age = Age
    // this.Email = Email
    // this.Education = Education
    // this.Designation = Designation
    // this.Gender = Gender
    // this.Address = Address



    // data.prototype.increment = function () {
    //     ++this.Age
    // }

    // data.prototype.sayHello = function () {
    //     console.log('RamRam')
    // }
// }

// const user = new data('AbhimanyuSingh', 23, 'AB@gmailcom', 'MCA', 'Back-End Dev', 'M', "MeerutD112")
// user.sayHello()
// user.increment()
// console.log(user)
// console.log(user.Age)


// console.log(user.__proto__ === data.prototype)




// const data = ['userName' , 'Email', 'Password','Gender', 'PhoneNo','Address' , 'Pincode' ]

// const info = {
//     userName: "Abhimanyu Singh",
//     Email: 'Abhimanyu@gmail.com',
//     Password: '1234',
//     Gender: 'M',
//     PhoneNo: 9293949599,
//     Address: 'MeerutD12',
//     Pincode: 234123,

//     getDetails : function(){
//         console.log(`${this.userName}`)

//     }
// }
// Object.prototype.Abhimanyu = function(){
//     console.log(`Object has the access to the Array...`)
// }


// Array.prototype.Abhimanyu23 = function(){
//     console.log(`Array has the power to access the object  ${info.userName}`)
// }


// data.Abhimanyu23()
// info.Abhimanyu23()
// data.Abhimanyu23()
// info.getDetails()
// data.Abhimanyu()
// data.Abhimanyu()







// const user = {
//     isActive: true
// }

// const accountDetails = {
//     HolderName: 'Abhimanyu Singh',
//     Email: 'AB@gmail.com',
//     PhoneNo: '9993434255',
//     Address: 'D-Meerut',
//     // __proto__ : Nominee
// }


// const accountKYC ={
//     isKycDone: true
// }

// const Nominee = {
//     Name: 'Shivam Singh'
// }

// const NomineeDetail = {
//     contactNo: 9293949333,
//     address: 'D12 Meerut',
//     isVerified: true,
//     ispasthistory: true
// }

// accountDetails.__proto__ = user



// Mordern Approach 

// Object.setPrototypeOf(user , accountDetails)

//  console.log(user.HolderName)


// this and call methods 

// To hold the refrence we should use .call()

// function setuserName(userName){
//     this.userName = userName
// }

// function createUser(userName,email,password ){
//     setuserName.call(this,userName)
//     this.email = email 
//     this.password = password
// }


// const user = new createUser('Abhimanyu','AbDB@gmail.com','PW12II')
// console.log(user)


// Bind in js 


// class user {
//     constructor(userID,userName,userDesignation,userEmail,userpassword){
//         this.userID = userID,
//         this.userName = userName , 
//         this.userDesignation = userDesignation , 
//         this.userEmail = userEmail,
//         this.userpassword = userpassword
//     }
//     encryptPassword(){
//         return `${this.userpassword}@$%`
//     }
//     stringlowercase(){
//         return `${this.userName.toLowerCase()}`
//     }
// } 




const detail = new user('Atthah12@','Abhimanyu Singh','Back-End dev','Abhimanyu77@gmail.com','123')


console.log(detail.encryptPassword())
console.log(detail.stringlowercase())































