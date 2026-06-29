/*Conversion method 

These convert one data type to another

convert string --> array
*/

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
const name = "Abhimanyu Singh";

// Print only

// Abhimanyu

const [fetchname] = name.split(" ")
console.log(fetchname)




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