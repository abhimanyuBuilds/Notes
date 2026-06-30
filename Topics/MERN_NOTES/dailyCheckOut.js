/**
 * @REVIEWPDFDAILY  
 * @DSA_GUIDE    
 * @ALL_CONCEPT 1 topic daily 
 * @InterviewBit 1 question daily
 */

// ====================================  Question ===================================



/**
 * 
 * @Array 
 * 
push() 
pop()
shift()
unshift()
slice()
splice()
concat()
sort()
reverse()
includes()
indexOf()
find()
findIndex()
filter()
map()
reduce()
some()
every()
 */

// ================================= @Array =================================================






//================================================ End of Array ==============================
/**
 * @String 
 split() ✅
join()
substring()
slice()
replace()
replaceAll()
trim()
includes()
startsWith()
endsWith()
repeat()
charAt()
charCodeAt()
 */

// ====================================== @STRING ============================
/**
 * @SPLIT Question

Conversion method 

These convert one data type to another

convert string --> array


// const str = "apple , banana , orange"


// const str = "I love JavaScript";


// const arr = str.split(" ")✅
// console.log(arr);
// [ 'I', 'love', 'JavaScript' ]

// Split Date✅
// const date = "27-06-2026";

// const newDate =  date.split("-")
// console.log(newDate)

// Split Every Character✅
// const str = "Hello";

// const everychar = str.split("")
// console.log(everychar)


// Split Email
// const email = "john@gmail.com";

// Return

// ["john", "gmail.com"]

// const splitMail = email.split("@")

// console.log(splitMail)




// Part 2: Medium Questions
// 6.
// const str = "HTML,CSS,JS,Node";

// Store only the first two technologies.

// Expected

// ["HTML","CSS"]

// const storeTwo = str.split(",",2)
// console.log(storeTwo)




// const str = "a-b-c-d-e";

// // Return

// // ["a","b","c","d","e"]

// const re = str.split("-")
// console.log(re)


// const str = "2026/06/27";

// // Print

// // Day : 27
// // Month : 06
// // Year : 2026


// const [year , month , day] = str.split("/")
// console.log("Day:" ,day)
// console.log("Month:", month)
// console.log("Year:" ,year)


// const str = "red|green|blue";

// // Convert into array.

// const convertArray = str.split("|")
// console.log(convertArray)




// 10.
// const name = "Abhimanyu Singh";

// Print only

// Abhimanyu

// const [fetchname] = name.split(" ")
// console.log(fetchname)




// Part 3: Advanced Questions
// 11.

// Convert

// const str = "Node.js Express MongoDB"

// into

// [
//  "Node.js",
//  "Express",
//  "MongoDB"
// ]


// const arrasss = str.split(" ")
// console.log(arrasss)



//12.

// Extract username

// const email = "developer123@yahoo.com";

// Expected

// developer123



// Part 4: Intermediate Practice
// 13. Extract Domain Name

// const email = "developer123@yahoo.com";

// Print only

// yahoo.com


// const domainName = email.split("@")[1]
// console.log(domainName)


//yahoo.com


// 14. Split Full Name
// const name = "Abhimanyu Singh Rajput";

// Print

// First Name: Abhimanyu
// Middle Name: Singh
// Last Name: Rajput

// const [ FirstName , MiddleName , LastName ] = name.split(" ")
// console.log("firstName:",FirstName)
// console.log("MiddleName:",MiddleName)
// console.log("LastName:",LastName)
/*
firstName: Abhimanyu
MiddleName: Singh
LastName: Rajput
*/

// 15. Count Words
// const sentence = "JavaScript is awesome";

// // Output

// // Total words: 3

// const totalWords = sentence.split(" ")
// console.log("Total words:",totalWords.length)




// // 16. Convert CSV into Array
// const csv = "apple,banana,orange,mango,grapes";

// // Output

// // ["apple","banana","orange","mango","grapes"]

// const convertArray = csv.split(",")
// console.log(convertArray);




// 17. Get Last Word
// const sentence = "I want to become a Full Stack Developer";

// Print

// Developer

// const lastWord = sentence.split(" ")[7]
// console.log(lastWord)




// 18. Extract File Extension
// const file = "resume.pdf";

// Print

// pdf


// const extractFileExt = file.split(".")[1]
// console.log(extractFileExt)





// 19. Extract File Name
// const file = "resume.pdf";

// Print

// resume

// const fileName = file.split(".")[0]
// console.log(fileName)



// 20. Split Phone Number
// const phone = "98765-43210";

// Print

// ["98765","43210"]

// const number = phone.split("-")
// console.log(number)



// Part 5: Real Backend Examples
// 21. Parse URL
// const url = "https://google.com/search";

// Expected

// [
//   "https:",
//   "",
//   "google.com",
//   "search"
// ]

// const parts = url.split("/")
// console.log(parts)

// console.log(domain)
// console.log(websitename)
// console.log(engine)




// 22. Extract Route❌
// const route = "/api/v1/users/profile";

// Print

// api
// v1
// users
// profile


// const [, api , v1 , users , profile ] = route.split("/")
// console.log(api)
// console.log(v1)
// console.log(users)
// console.log(profile)
// console.log("api" ,api1)
// console.log("v1",v1)
// console.log("users",users1)
// console.log("profile",profile)





// 23. Parse JWT Header (Only Split)
// const token = "header.payload.signature";

// Print

// header
// payload
// signature

// const [header , payload , signature] = token.split(".")
// console.log(header)
// console.log(payload)
// console.log(signature)


// 24. Extract Country Code
// const mobile = "+91-9876543210";

// Print

// Country Code : +91
// Number : 9876543210


// const [code , Numbers] = mobile.split("-")
// console.log("Country code:",code)
// console.log("Number:", Numbers)



// 25. Split Tags
// const tags = "nodejs,express,mongodb,javascript";

// // Convert into array.

// const tagsArray = tags.split(",")
// console.log(tagsArray)




// Part 6: Interview Level
// 26.
// const str = "A_B_C_D_E";

// Print

// A
// B
// C
// D
// E

// const [ a , b , c , d , e] = str.split("_")
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)




// 27.
// const dob = "12-08-2001";

// Print

// Date : 12
// Month : 08
// Year : 2001


// const [Dates, Month, Year] = dob.split("-")
// console.log("Date:",Dates)
// console.log("Month:", Month)
// console.log("Year:",Year)







// // 28.
// const ip = "192.168.1.25";

// // Convert into array.
// const ipArray = ip.split(".")
// console.log(ipArray)



// 29.
// const text = "apple#banana#mango#orange";

// // Convert into array.

// const texted = text.split("#")
// console.log(texted)




// 30.
// const path = "C:\\Users\\Abhimanyu\\Desktop";

// Split into

// [
// "C:",
// "Users",
// "Abhimanyu",
// "Desktop"
// ]


// const alpha = path.split("\\")
// console.log(alpha)



// Part 7: Tricky Questions
// // 31.
// const str = "apple,,banana,,orange";

// // Convert into array.

// const arrayConvery = str.split(",")
// console.log(arrayConvery)


// const str = "hello"
// const result = str.split()
// console.log(result)

// 33.
// const str = "";

// // What is the output?

// const result = str.split("");

// console.log(result)

// //34.
// const str = "JavaScript";

// // Predict the output

// const result = str.split("", 4);

// console.log(result) // ['j' ,'a' ,'v' ,'a']

// 35
// const str = "a-b-c-d-e-f";

// Print only

// ["a","b","c"]

// const kkk = str.split("-",3)
// console.log(kkk)




// Challenge (No Hints)
// 36.
// const email = "abhimanyu.singh@gmail.com";

// Print

// Username : abhimanyu.singh
// Provider : gmail
// Domain : com

// const [Username, emailpart] = email.split("@")
// const [ Provider, Domain ] = emailpart.split(".")
// console.log(Username)
// console.log(Provider)
// console.log(Domain)
// 

// //.split("@")[1]

// console.log(Username )


// // 37.
// const date = "2026-06-29 10:30:45";

// // Print

// // Date : 2026-06-29
// // Time : 10:30:45

// const Dates = date.split(" ")[0]
// const time = date.split(" ")[1]
// console.log("Date:",Dates)
// console.log("Time:",time)



// // 38.
// const text = "HTML CSS JS React Node MongoDB";

// // // Print the last three technologies.

// const Tech3 = text.split(" ")
// console.log(Tech3[3])
// console.log(Tech3[4])
// console.log(Tech3[5])





// // 40.
// const url = "https://www.youtube.com/watch?v=abc123";

// // Print only

// // www.youtube.com

// const urls = url.split("//")[1].split("/")[0]
// console.log(urls)



// // 39.
// const path = "/home/user/documents/project/index.js";

// // Print only

// // index.js

// const paths = path.split("/")[5]
// console.log(paths)

// =================================== End of String =====================================


// ================================ @Object =============================================
/**
 * @Object 
 Object.keys()
Object.values()
Object.entries()
Object.assign()
spread (...)
destructuring
 * 
 */




// ================================== End of Object ========================================


// =============================================== @ES6 ======================================

/**
 * @ES6
 let
const
arrow function
rest operator
spread operator
template literals
destructuring
modules
 */


// =========================================== End of ES6 ====================================