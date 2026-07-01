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

// -- Question on PUSH ----
/* 


/**
 * @RULETOREMEBER 
 * add element at the end 
 * change the original array 
 * return the new array length , not the array 
 */


/*
Beginner (1-5)
Q1

Using push(), add 40.

Print the array.

const numbers = [10, 20, 30];
numbers.push(40)
console.log(numbers)

{Output}[ 10, 20, 30, 40 ]
*/

/*
Q2


Add "Orange" and "Mango" using a single push().

Print the array.


const fruits = ["Apple", "Banana"];
fruits.push("Orange" , "Mango")
console.log(fruits)

{Output}
[ 'Apple', 'Banana', 'Orange', 'Mango' ]
*/


/*Q3
const cities = [];
Add

Delhi
Mumbai
Pune
using one push().

cities.push("Delhi" , "Mumbai" ,"Pune")
console.log(cities)
*/


/*
Q4 Add "CSS".

Store the return value of push().
Print

New Length:
Array:

const skills = ["HTML"];
skills.push("CSS")
console.log(skills)
*/

/*Q5
Q5
const arr = [5];

What will be printed?
console.log(arr.push(10));
console.log(arr);

// const arr = [5];
// console.log(arr.push(10)); // 2 return the new length of the array

// push has two job one is add the element at the end and return 
// return the new length of the array

// console.log(arr); // [5]

*/

/*Intermediate (6-10)
Q6
const numbers = [1,2];

numbers.push([3,4]);

console.log(numbers);
{Output}
[1 , 2 , [ 3 , 4]]

Predict the output before running. */


/*
Q7
const a = [1,2];
const b = [3,4];

Use push() so the final output becomes

[1,2,3,4]

const a = [1,2];
const b = [3,4];

a.push(...b)

console.log(a)
{Output}
[ 1, 2, 3, 4 ] 
*/


/*Q8
const users = [];

Push the following objects.

{
    id:1,
    name:"Abhimanyu"
}

{
    id:2,
    name:"Rahul"
}

Print the array.


const people = [{  
    id: 1 ,
    name: "Abhimanyu"
} , { 
    id: 2,
    name: "Rahul"
} ]


users.push(people)

console.log(users)


*/

/**
 Q9
const arr = [10,20];

Without writing another array manually, add

30
40
50

using one push().


arr.push( 30 , 40 , 50)
console.log(arr)

 */

/**
 Q10
const cart = [];

Complete the code.


cart.push("Laptop");
cart.push("Mouse");
cart.push("Keyboard");

console.log( ? );
console.log(cart.push("Laptop" , "Mouse" , "Keyboard"))
{Output} 3
*/


/*
Challenge (11-15)
Q11

Write a function

function addNumber(arr, value) {

}

that uses push() to add the value and returns the updated array.

Example

addNumber([1,2],3);

function addAnyValue(arr, ...args) {
    const length = arr.push(...args)
    return {
        length,
         arr
    }
};

console.log(addAnyValue( [ 123 , 1231 , 1321 , 1313 ] , 12 , 13 , 18 , 19 , 20 , 21 , 22))

*/


/**
Q12

Write a function

function addSkills(skills) {

}

that adds

Node.js
Express
MongoDB

using one push().


// function AddingSkills(arr , ...value){
//     arr.push(...value)
//     return arr
// }

// console.log(AddingSkills(["Node.js"],"Express" ,"MongoDB"))

 */


/**
Without using concat(), merge these arrays using push().

const frontend = ["HTML","CSS"];
const backend = ["Node","Express"];

Expected Output

["HTML","CSS","Node","Express"]


frontend.push(...backend)
console.log(frontend)
*/

/**
Q14
Find the mistake.

const arr = [1,2];

const result = arr.push(3);

console.log(result[0]);


Why does this not work?

becuase when i did 
console.log(typeof result[0]) then it is number

and after that it became undefined 
*/

/**Q15

Predict the output.

const arr = [];

console.log(arr.push(1)); // 1
console.log(arr.push(2)); // 2 
console.log(arr.push(3)); // 3

console.log(arr); {Output} [ 1 , 2 , 3]
*/
/*  
@InterviewQuestions
Does push() modify the original array?  // Yes push is a mutating method
What does push() return?   it return the new array and length of the array
Can push() add multiple elements at once? yes
What is the time complexity of push()?   --  o(1) because JavaScript add the element at the end
What is the difference between push() and concat()?

 PUSH                        ||        CONCAT
1. push change original      ||            concat does not change original array
array 
2. Return length             ||            Returns new array
3. Mutating                  ||            Non-Mutating
4 faster for creating array                creates another array 


What is the difference between push(array) and push(...array)?   

@Anserr in push(array) in this if we add another array it return as nested array 
@Answer but push(...array) destrucute it and combine it in one 



Why is push() generally O(1), and when can it become O(n)?


/**
 * @Answer 
 * 
 * Normally,

Arrays have extra allocated space.

Suppose

Capacity = 10

[1][2][3][ ][ ][ ][ ][ ][ ][ ]

Adding another element

[1][2][3][4][ ][ ][ ][ ][ ][ ]

No copying is needed.

That's

O(1)

Now suppose the array is full.

Capacity = 4

[1][2][3][4]

Now we push another element.

JavaScript may need to

Allocate a larger block of memory.
Copy all existing elements.
Add the new element.
Old

[1][2][3][4]

↓

New

[1][2][3][4][5][ ][ ][ ]

Copying takes

O(n)

This resizing doesn't happen on every push, so the amortized time complexity is still O(1).
 */

/*Can push() be used on array-like objects? If so, how?

Yes by using 
Array.prototype.push.call()

const obj = {
    0: "Abhi",
    1: "Raj",
    2: "Shiv",
    length: 3
};

Array.prototype.push.call(obj , "javaScript")
console.log(obj)

{Output:} { '0': 'Abhi', '1': 'Raj', '2': 'Shiv', '3': 'javaScript', length: 4 }

What happens if you call push() with no arguments?

const arr = [1,2];

const len = arr.push();

console.log(arr);

console.log(len);

@Output

[1,2]

2

In what real-world backend or frontend scenarios would you commonly use push()?

*/

// ---- Question on POP ---


/** POP RULE 
 * @Returns 
 * The last element that was removed
 * if the array is empty , it return undefined
 * change the original array (Mutable)
 * remove the last element 
 * Array remains []
 * pop() returns undefined
 * 
 * Time complexity pop()   o(1)
 * 
 * 
 * Beginner Practice (1–5) Q1
const numbers = [10, 20, 30];

Remove the last element.

Print:

Updated array
Removed element

const removedElement = numbers.pop()
console.log("Updated array:" , numbers)
console.log("Removed element" , removedElement)




Q2
const fruits = ["Apple", "Banana", "Orange"];

Remove "Orange" using pop().

fruits.pop()
console.log(fruits)




Q3
const arr = [100];

Use pop().

What are the outputs?

console.log(arr); []
console.log(removed); 100 



const arr = [100];
const removed = arr.pop()
console.log(arr); 
console.log(removed);  



Q4
const colors = [];

Call pop().

What does it return? 
undefined  why becuase when we do 

const removed = colors.pop()
console.log(removed)
// undefined


Q5

Predict the output.

const arr = [1, 2, 3];

console.log(arr.pop()); // 3
console.log(arr);  // [ 1 , 2 ]




==========   Intermediate Practice (6–10)
Q6
const arr = [10, 20, 30, 40];

Remove the last two elements.

Expected Output

[10, 20]




arr.pop()
arr.pop()
console.log(arr)

[ 10, 20 ]


Q7
const stack = [];

Perform:

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();

Print the final array.

[10 , 20 ]


Q8
const names = ["Ram", "Shyam", "Mohan"];

Store the removed name in a variable and print:

Removed:
Remaining:

const removed = names.pop()
console.log("Removed:",removed)
console.log("Remaining:",names)

Q9 Predict the output.

const arr = [];

arr.push(1);
arr.push(2);

console.log(arr.pop()); // 2
console.log(arr.pop()); // 1
console.log(arr.pop()); // undefined 


Q10 Complete the code.

const cart = ["Laptop", "Mouse", "Keyboard"];

const removed = cart.pop();

console.log(removed); //Keyboard 
console.log(cart); //Laptop, Mouse

What will be printed?

console.log(removed); //Keyboard 
console.log(cart); //Laptop, Mouse




Challenge (11–15)
Q11 Write a function.

function removeLast(arr) {

}

Example

removeLast([1, 2, 3]);

// Returns:
// [1,2]


function removedLast(arr){
    arr.pop()
    return arr
}

console.log(removedLast( [ 121 , 131 , 141]))


Q12 Write a function.

function undo(history) {

}

It should remove the latest action using pop().


function undo(history){
    history.pop()
    return history
}

console.log(undo( [ "Abhimanyu " , "Singh" , "MCA" , "Hi " , "IX-JAT" , "12RR"]))


Q13 Using only push() and pop(), reverse this array:

[1, 2, 3]

(Hint: Think about using another array as a stack.)


const arr = [1, 2, 3]
const reversed = []

while(arr.length > 0){
    reversed.push(arr.pop())
    
} 
console.log(reversed)





Q14 Find the mistake.

const arr = [1, 2];

const result = arr.pop();

console.log(result.length);

Will this always work? Explain why.

becuase it store the removed element not the array and if you have curoucity and want to check the typeof of result 
then you may find the typeof of result it will shock u because it is number and length is find when their is array or object 

Q15 Predict the output.

const arr = [5, 10, 15];

console.log(arr.pop()); // 15
console.log(arr.pop()); // 10 
console.log(arr); [ 5 ]

  

Interview Questions
Does pop() modify the original array?
What does pop() return?
What happens if you call pop() on an empty array?
Why is pop() generally O(1)?
What is the difference between pop() and shift()?
Can pop() remove multiple elements at once?
Where is pop() commonly used in DSA?
Can pop() be used on array-like objects?
What is the difference between pop() and splice()?
How would you implement a stack using only push() and pop()?

*/





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