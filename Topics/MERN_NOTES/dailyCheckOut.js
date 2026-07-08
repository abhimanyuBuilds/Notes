/**
 * @REVIEWPDFDAILY   
 * @DSA_GUIDE    
 * @ALL_CONCEPT 1 topic daily 
 * @InterviewBit 1 question daily
 */


// ====================================  Question ===================================



/**Array
 * 
 * @Array 
 * 
push()  ✅
pop()   ✅
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
join() ✅
substring() ✅
slice()     ✅
replace()   ✅
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


/**@join() Method  
 * join method convert all element of an array into a single string
 * it join every element using a seprator that you provide 
 * @IMPORTANT JOIN doesn't modify the original array it returns a new string.
 * @syntax 
 * array.join(seprators)
 * but the original array remian same   
 * time-complecity join o(n) because js visits every element once to build the final string
 

// const fruits = [ "Apple" , "Orange" ,"Mango" ]

// console.log(fruits.join())
//Apple,Orange,Mango

// if u dont provide a seprators it will auto-matically implement comma

// const arr = [1, true, null, undefined];

// console.log(arr.join("-"));

// Output
// 1-true-null-



@Beginner Practice (Q1–Q5)

Q1 const fruits = ["Apple", "Banana", "Mango"];

Print:

Apple,Banana,Mango

console.log(fruits.join())

Q2

const fruits = ["Apple", "Banana", "Mango"];

Print:

Apple | Banana | Mango
console.log(fruits.join(" | "))

Q3

const numbers = [10, 20, 30, 40];

Print:

10-20-30-40
console.log(numbers.join("-"))

Q4

const letters = ["N", "o", "d", "e"];

Print:
console.log(letters.join(""))
Node
console.log(letters.join(""))

Q5

const date = ["02", "07", "2026"];

Print:

02/07/2026

console.log(date.join("/"))


Level 2 — Easy (Q6–Q15)
Q6
const colors = ["Red", "Green", "Blue"];

Print:

Red Green Blue


Q7
const marks = [85, 90, 76, 95];

Print:

85, 90, 76, 95
console.log(marks.join())


Q8
const route = ["home", "products", "mobile"];

Print:

home/products/mobile
console.log(route.join("/"))


Q9
const chars = ["H", "e", "l", "l", "o"];

Print:

Hello
console.log(chars.join(""))

Q10
const phone = ["+91", "9876543210"];

Print:

+91-9876543210

console.log(phone.join("-"))

Q11
const skills = ["HTML", "CSS", "JavaScript"];

Print:

HTML -> CSS -> JavaScript
console.log(skills.join(" -> "))

Q12
const fruits = ["Apple", "Banana", "Orange"];

Print:

Apple 🍎 Banana 🍎 Orange
console.log(fruits.join(" 🍎 "))


Q14

const words = ["Backend", "Developer"];
console.log(words.join(" "))
Backend Developer

Q15
const binary = [1, 1, 0, 0, 1];
console.log(binary.join(""))

Level 3 — Intermediate (Q16–Q25)
Q16
const path = ["Users", "Abhimanyu", "Downloads", "movie.mp4"];

Print:

Users/Abhimanyu/Downloads/movie.mp4
console.log(path.join("/"))


Q17
const css = [
    "display:flex",
    "justify-content:center",
    "align-items:center"
];

Print:

display:flex;justify-content:center;align-items:center
console.log(css.join(";"))



Q18
const logs = [
    "Server Started",
    "Mongo Connected",
    "Port 5000"
];

Print each item on a new line.
console.log(logs.join("\n"))
Server Started,Mongo Connected,Port 5000


Q19
const ip = [192,168,1,100];

Print:

192.168.1.100

console.log(ip.join("."))


192.168.1.100


Q20❌
const tags = ["Node","Express","MongoDB"];

console.log("#" + tags.join(" #"))

Q21
const emoji = ["😀","😂","😍","🔥"];
console.log(emoji.join(" "))

Q22
const grades = ["A","B","C","D"];

console.log(grades.join(" | "))

Q23
const url = ["https:", "", "github.com", "abhimanyu"];

Print

https://github.com/abhimanyu


console.log(url.join("/"))

https://github.com/abhimanyu ⁉️ how two works



Q24
const technologies = [
    "Node",
    "Express",
    "MongoDB",
    "Redis"
];

Print

Node, Express, MongoDB, Redis

// console.log(technologies.join(" , "))


Q25
const filename = ["resume","pdf"];

Print

resume.pdf

console.log(filename.join("."))


Level 4 — Practical (Q26–Q35)
Q26

Create

GET /api/v1/users

using



Q27 Create

2026-07-02

using

const date = ["2026","07","02"];

console.log(date.join("-"))


Q28

Convert

["A","B","C","D"]

into

A=>B=>C=>D

console.log(arr.join("=>"))


Q29

Convert

["apple","banana","mango"]

into

apple | banana | mango

console.log(fruits.join(" | "))

Q30

Convert

["John","Alice","Bob"]

output John & Alice & Bob
console.log(arr.join(" & "))


Q31

Convert

["Front-end","Back-end","DevOps"]

Front-end / Back-end / DevOps

console.log(arr.join(" / "))


Q32❌

Create

1*2*3*4*5

from

[1,2,3,4,5]



33

Convert

["M","E","R","N"]

into

MERN

console.log(mern.join(""))


Q34

Convert

["React","Node","MongoDB"]

into

React + Node + MongoDB

const skills = ["React","Node","MongoDB"]

console.log(skills.join(" + "))


Q35

Convert

["10","20","30","40"]

into

10:20:30:40

console.log(data.join(":"))




Level 5 — Interview Level (Q36–Q45)
Q36

Given

const users = [
    {name:"John"},
    {name:"Alice"},
    {name:"Bob"}
];

Output

John, Alice, Bob

// const names = users.map(user => (user.name))

// console.log(names.join(", "))


Q37
const products = [
    {id:101},
    {id:102},
    {id:103}
];

const product = products.map(prod => ( prod.id))


// Output

// 101-102-103
// console.log(product) [ 101, 102, 103 ]


console.log(product.join("-"))



Q38

Given

const sentence = [
    "JavaScript",
    "is",
    "awesome"
];

Output

JavaScript is awesome.
console.log(sentence.join(" "))


Q39 Given

const csv = [
    ["Name","Age"],
    ["John",25],
    ["Sam",30]
];

Output

Name,Age
John,25
Sam,30

(Hint: map() + join().)

const user = csv.map(us => us.join(",")).join("\n")
console.log(user)


Q40

Given

const matrix = [
    [1,2],
    [3,4],
    [5,6]
];

Output

1,2
3,4
5,6


const mat = matrix.map( matii => matii.join(",")).join("\n")
console.log(mat)


*/

/**
 * @Subsutring
 * substring extract a portion of a string and return it as a new string
 * Does not modify the original string
 * @Returns a new string
 * use start index and end index
 * end index is not included
 * @syntax string.Substring(startIndex , endIndex)
 * 
 *@Rule 

If start == end

Returns an empty string.

const str = "Hello";

console.log(str.substring(2,2));

Output

""
@Rule 

If start > end

It swaps them automatically.

const str = "JavaScript";

console.log(str.substring(7,2));

Actually becomes

str.substring(2,7)

Output

vaScr

This is one of the biggest interview questions.

 */

/**
 * @Slice
 * 
 * arr.slice(start , end )
 * start -> Inclusive 
 * end -> Exclusive
 * 
 * 
 * 
 * 1. Get first N elements
Input
arr = [1,2,3,4,5]
N = 3
Output would be 
[1, 2, 3 ]

2. Get last N elements

Input
[1,2,3,4,5]
N = 2
Output

[4,5]
console.log(arr.splice(3))
const arr = [1,2,3,4,5]

console.log(arr.slice(- 2))



3. Remove first element without modifying original

Input
[10,20,30,40]
Output
[20,30,40]


console.log(arr.slice(1))
const arr = [10,20,30,40]
console.log(arr.slice(1))


4. Remove last element

Input
[10,20,30,40]
Output
[10,20,30]

// const arr = [10,20,30,40]

// console.log(arr.slice( 0 , 3 ))


5. Copy an array

Without using

spread (...)
Array.from()

Only use slice().




// const arr = [ 12 , 14 , 16 , 20 , 22 ]

// const copies = arr.slice(0)

// console.log(copies)



6. Extract middle three elements

Input

[1,2,3,4,5,6,7]

Output

[3,4,5]


// const arr = [1,2,3,4,5,6,7]


// console.log(arr.slice(2 , 3))❌

Level 2 (Medium)
7. Split array into two halves

Input

[1,2,3,4,5,6]

Output

First Half:
[1,2,3]

Second Half:
[4,5,6]


const arr = [1, 2, 3, 4, 5, 6]
const firstHalf = arr.slice(0, 3)
const SecondHalf = arr.slice(-3)

console.log(firstHalf)
console.log(SecondHalf)






8. Rotate array left by K  ❌

Input

[1,2,3,4,5]
K=2

Output

[3,4,5,1,2]

Hint

slice(K)
slice(0,K)



// const arr = [ 1 , 2 , 3 , 4 , 5]

// const arrleft = arr.slice(2)
// const arrRight = arr.slice(0 , 2)

// const combineIt = arrRight.push(arrleft)
// console.log(combineIt)



10. Remove first K elements

Input

[1,2,3,4,5]
K=3

Output

[4,5]



const arr = [ 1 , 2 , 3 , 4 , 5]

console.log(arr.slice(3))





11. Remove last K elements

Input

[1,2,3,4,5]
K=2
Output
[1,2,3]



const arr = [1,2,3,4,5]

console.log(arr.slice(0 , 3))




12. Extract every element except first and last
Input
[10,20,30,40,50]
Output
[20,30,40]

console.log(arr.slice(1 , 4))
const arr = [10,20,30,40,50]

console.log(arr.slice(1 , 3))

13. Split array into chunks of size 3

Input
[1,2,3,4,5,6,7]
Output
[
 [1,2,3],
 [4,5,6],
 [7]
]


console.log(arr.sllice(0 , 2))


const arr = [1,2,3,4,5,6,7]
const first = arr.slice(0 , 3)
const second = arr.slice(3 , 6)
const third = arr.slice(6)
console.log([ first , second , third])




15. Rotate array left by K

Input:
[1,2,3,4,5]
K = 2

Output:
[3,4,5,1,2]

const arr = [1,2,3,4,5]

console.log(arr.slice( 2))


19. Replace the element at index K with 100
Input:
[1,2,3,4,5]
K = 2

Output:
[1,2,100,4,5]


11. Get the last three elements using negative indexing
Input:
[1,2,3,4,5,6]

Output:
[4,5,6]


const arr = [1,2,3,4,5,6]
console.log(arr.slice(-3))



12. Remove first three elements
Input:
const arr = [10,20,30,40,50,60]

Output:
[40,50,60]

console.log(arr.slice(2))
console.log(arr.slice(3))



13. Clone only first half of an array
Input:
[2,4,6,8,10,12]

Output:
[2,4,6]
const arr = [2,4,6,8,10,12]

console.log(arr.slice(3))



14. Extract the middle half
Input:
[1,2,3,4,5,6,7,8]

Output:
[3,4,5,6]



const arr = [1,2,3,4,5,6,7,8]

console.log(arr.slice(2 , 6))



Level 3 (Logic Building)
15. Rotate array left by one
Input:
const arr = [1,2,3,4,5]

Output:
[2,3,4,5,1]


const arr = [1,2,3,4,5]
 
const left = arr.slice(1 , 5)
const right = arr.slice(0 , 1)


const result = left.concat(right)

console.log(result)


16. Rotate array right by one
Input:
[1,2,3,4,5]

Output:
[5,1,2,3,4]



const arr = [1,2,3,4,5]

const last = arr.slice(4)
const first = arr.slice(0,4)
console.log(last.concat(first))





17. Rotate left by K
Input:
arr = [1,2,3,4,5]
k = 2

Output:
[3,4,5,1,2]




const arr = [1,2,3,4,5]

const leftRotate = arr.slice( 0 , 2)
const rightRotate = arr.slice(2 , 5)
console.log(rightRotate)
console.log(leftRotate)
console.log(rightRotate.concat(leftRotate))




18. Rotate right by K
Input:
arr = [1,2,3,4,5]
k = 2

Output:
[4,5,1,2,3]


const arr = [1, 2, 3, 4, 5]

const lastTwo = arr.slice(3)
console.log(lastTwo)
const first = arr.slice(0 , 3)
console.log(first)

console.log(lastTwo.concat(first))


19. Swap first and second half
Input:
[1,2,3,4,5,6]

Output:
[4,5,6,1,2,3]

const arr = [1,2,3,4,5,6]

const lasthalf = arr.slice(3)
const firsthalf = arr.slice(0 , 3)
console.log(lasthalf.concat(firsthalf))


20. Reverse only first half
Input:
[1,2,3,4,5,6]

Output:
[3,2,1,4,5,6]



8. Remove Element at Index K
Input
arr = [1,2,3,4,5]
K = 2


const arr = [ 1,2,3,4,5 ]
const k = 2

const left = arr.slice( 0 , k )

const right = arr.slice( k + 1)

const result = left.concat(right)
console.log(result)

19. Replace Element at Index K
Input
arr = [1,2,3,4,5]
K = 2
Replace with 100

const left = arr.slice(0 , K)
console.log(left)
const right = arr.slice(K+1)
console.log(right)
const result = left.concat([100] , right)

console.log(result)


20. Insert Element at Index K
Input
arr = [1,2,4,5]
K = 2
Insert 3



const arr = [1,2,4,5]
const K = 2
const left = arr.slice(0 , K)
const right = arr.slice(K )
const result = left.concat([3] , right)
console.log(result)
Output [1,2,3,4,5]  





22. Extract all elements except the middle one
Input:
[1,2,3,4,5]

Output:
[1,2,4,5]


const arr = [1,2,3,4,5]
const K = 2
const left = arr.slice(0 , K)
const right = arr.slice( K + 1)

console.log(left.concat(right))


23. Swap first and last element without modifying the middle
Input:
[10,20,30,40]

Output:
[40,20,30,10]


const arr = [10,20,30,40]

const first = arr.slice(0 , 1)
const middle = arr.slice(1 , 3)
console.log(middle)
const last = arr.slice(3)
console.log(first)
console.log(last)
const last2 = last.concat(middle)
console.log(last2.concat(first))



Level 4 (Interview Style)
24. Chunk an array into groups of size K
Input:
[1,2,3,4,5,6,7]
k = 3

Output:
[
 [1,2,3],
 [4,5,6],
 [7]
]



const arr = [1,2,3,4,5,6,7]



const K = 3

for ( let i = 0 ; i < arr.length; i += K){
    // console.log(arr.slice(i , i+K))
    // console.log(i)
    console.log(i+K)
}



25. Paginate an array
Input:
arr = [1,2,3,4,5,6,7,8,9]
page = 2
limit = 3

Output:
[4,5,6]


// let page = 2
// let limit = 3


// const arr = [1,2,3,4,5,6,7,8,9]

// const page2 = arr.slice(limit , 6 )
// console.log(page2)


 */

/**Replace()
 * Practice Questions
Level 1 — Basics
Question 1
const str = "I like Java";

Replace "Java" with "Node".

Expected Output

I like Node

const result = str.replace("Java" , "Node.js")
console.log(result)



Question 2
const str = "apple apple apple";

Replace only the first "apple" with "orange".

Expected Output

orange apple apple

const result = str.replace("apple" ,"orange")
console.log(result)


Question 3
const str = "Hello World";

Replace the space with -.

Expected Output

Hello-World


const result = str.replace(" " , "-")
console.log(result)



Question 4
const str = "1,2,3,4";

Replace the first comma with |.

Expected Output

1|2,3,4


const str = "1,2,3,4";

const result = str.replace("," , "|")

console.log(result)



Question 5
const str = "NodeJS";

Replace "JS" with "JavaScript".

Expected Output

NodeJavaScript



const result = str.replace("JS" , "JavaScript")
console.log(result)


Level 2 — Global Replacement
Question 6
const str = "apple apple apple";

Replace every "apple" with "orange".

Expected Output

orange orange orange


const result = str.replace(/apple/g , "orange")
console.log(result)


Question 7
const str = "1 2 3 4";

Replace every space with -.

Expected Output

1-2-3-4


const result = str.replace(/ /g , "-" )
console.log(result)


Question 8
const str = "Hello Hello Hello";

Replace every "Hello" with "Hi".

Expected Output

Hi Hi Hi


const result = str.replace(/Hello/g , "Hi")
console.log(result)



Question 9
const str = "abc123xyz456";

Replace every digit with #.

Expected Output

abc###xyz###
const result = str.replace(/\d/g , "#")
console.log(result)

Question 10
const str = "JavaScript";

Replace every vowel with *.

Expected Output

J*v*Scr*pt
const result = str.replace(/[aeiou]/gi ,"*"  )



Level 3 — Case-Insensitive Replacement
Question 11
const str = "Java JAVA java JaVa";

Replace every version of "java" with "Node".

Expected Output

Node Node Node Node


const result = str.replace(/java/gi , 'Node')





Question 15 – Replace Special Characters
New Concept: [^a-zA-Z0-9]
^ inside [] means not
So this pattern matches anything that is not:
a-z
A-Z
0-9
Question
const str = "Hello@World#2026!";

Replace every special character with _.

const result = str.replace(/[^a-zA-Z0-9]/gi , "_")
16

Question 17 – Rearrange a Date
New Concept: Multiple Capturing Groups

Input:

2026-07-07

Capture:

Year
Month
Day

Then rearrange them.

Question
const str = "2026-07-07";

Expected Output

07/07/2026

const str = "2026-07-07";

const result = str.replace(/(\d{4})-(\d{2})-(\d{2})/ , 
    "$3/$2/$1"




Question 18 – Callback Function
New Concept: Dynamic Replacement

Instead of a fixed replacement string, you can provide a function.

The function receives the matched text and returns the replacement.

Question
const str = "Price 10 and 20";

Double every number.

Expected Output

Price 20 and 40

const result = str.replace(/\d+/gi, (match) => {
    return Number(match) * 2
});



Question 20 – Title Case
Question
const str = "javascript is awesome";

Convert the first letter of every word to uppercase.

Expected Output

Javascript Is Awesome

    const result = str.replace(/\b\w/g , (upper) => {
        return String(upper).toUpperCase()
    })


Question 19 – Wrap Every Number
Question
const str = "A1 B2 C3";

Wrap every number inside square brackets.

Expected Output

A[1] B[2] C[3]

const result = str.replace(/\d+/g , (data) => `[${data}]`)





Question 16 – Capturing Groups
New Concept: ()

Parentheses create capturing groups.

Example:

John Doe
Group 1 → John
Group 2 → Doe

You can reuse them in the replacement string:

$1 → first group
$2 → second group
Question
const str = "John Doe";

Convert it to:

Doe, John

const result = str.replace( 
    /(\w+)\s(\w+)/, 
    "$2 , $1"

);

    */

/**replaceAll()
Example 4 Double Every Number
const str = "10 20 30";

const result = str.replaceAll(/\d+/g, (match) => {
    return match * 2;
});

console.log(result);
Output
20 40 60


Level 1 – Double Every Number (\d+)
const str = "Price 10 and 20";

Expected Output

Price 20 and 40

const result = str.replaceAll(/\d+/g , (match) => Number(match)*2)


Level 2 – Wrap Every Number (\d+)
const str = "A100 B25 C9";

Expected Output

A[100] B[25] C[9]
const result = str.replaceAll(/\d+/g , (data) => `[${[data]}]`)

Level 3 – Add 5 to Every Number (\d+)
const str = "Age 18, Score 95";

Expected Output

Age 23, Score 100

const result = str.replaceAll(/\d+/g , (match) => Number(match)+5)


Level 4 – Triple Every Number (\d+)
const str = "5 apples and 12 oranges";

Expected Output

15 apples and 36 oranges
const result = str.replaceAll(/\d+/g , (match) => Number(match)*3)



Level 5 – Replace Every Digit with * (\d)
const str = "Room 123, Floor 45";

Expected Output

Room ***, Floor **

const result = str.replaceAll(/\d/g , "*")


Level 6 – Increment Every Digit (\d)
const str = "12345";

Expected Output

23456


const result = str.replaceAll(/\d/g , (match) => Number(match)+1)


Level 7 – Square Every Digit (\d)
const str = "234";

Expected Output

4916
const result = str.replaceAll(/\d/g , (match) => Number(match)**2)


Level 8 – Put Every Digit in Parentheses (\d)
const str = "A12B3";

Expected Output

A(1)(2)B(3)

const result = str.replaceAll(/\d+/g , (match) => `(${[match]})`)



Level 9 – Add Commas Around Every Number (\d+)
const str = "Item100 Price250 Qty3";

Expected Output

Item,100, Price,250, Qty,3,

const result = str.replaceAll(/\d+/g , (match) => `,${[match]},`)

 */





















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





























