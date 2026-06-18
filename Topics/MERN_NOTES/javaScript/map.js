// const arr = [ 1231 , 3213 , 5434 , 6653 , 8939 , 3923]


// const doubledArr = arr.map(x => x * 2)
// console.log(doubledArr)

// const names = ['abhimanyu' , 'mohit' , 'jatin' , 'uday']

// const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(capitalized)



// const prices = [ 120.99 , 89.99 , 994.9];

// const withtax = prices.map(price => (price * 1.1).toFixed(2))

// console.log(withtax);



// const strings = ['1' , '2' , '3']

// const integers = strings.map(Number)

// console.log(integers)



// const users = [
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 3, name: 'Charlie', email: 'charlie@example.com' }
// ];


// const email = users.map(user => user.email)
// console.log(email)


// const name = users.map(nam => nam.name)
// console.log(name)





// const apiResponses = {
//     data: [
//         { id: 1, attributes: { name: 'Product 1', price: 100 } },
//         { id: 2, attributes: { name: 'Product 2', price: 200 } }
//     ]
// };


// const product = apiResponses.data.map(prod => prod.id)
// const attri = apiResponses.data.map(item => item.attributes.name)
// const ato = apiResponses.data.map(item => item.attributes.price)


// console.log(product)
// console.log(attri)
// console.log(ato)




// const arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9 , 10 ]

// arr.map(num => {
//     console.log(`12 * ${num} = ${num * 12}`)
// });

// console.log("End of 12th table")

// arr.map(item => {
//     console.log(`19 * ${item} = ${item * 19}`)
// });


//double every number = 

// const arr = [ 1 , 2 , 3 , 4 , 5 ]

// arr.map(item => {
//     console.log(`Here I'm doubling the arr ${item * 2}`)
// })


//square every number

// const arr = [ 2 , 9 , 14 , 16]


// arr.map(item => {
//     console.log(`Square of ${item} = ${item ** 2}`)
// });


// adding 10 to every number 

// const arr = [ 12 , 15 , 18]
// const addingDigit = 10

// arr.map(item => {
//     console.log(`Adding 10 to every element of an array: ${item} +  ${addingDigit} = ${item + addingDigit} `)
// });


// convert number to string 

// const arr = [ 1 , 2 , 3 , 6]

// const str = arr.map(String)
// console.log(str)


// const int = arr.map(Number)
// console.log(int)


// convert all names to upper case 


// const names = ['abhimanyu', 'aditya']

// const upperCase = names.map(item => item.charAt(0).toUpperCase() + item.slice(1))

// console.log(upperCase)


// add mr before every name

// const mrToEveryCase = names.map(name => "Mr." + name)

// console.log(mrToEveryCase)


// find length of each word..


// const lengthofWord = names.map(item => item.length)
// console.log(lengthofWord)






//Level 3: Objects (Important for MERN)
//Q8. Extract all names
// const users = [
//   { name: "Abhimanyu", age: 22 },
//   { name: "Rohan", age: 24 },
//   { name: "Aman", age: 21 }
// ];


// const nameFetch = users.map(data => data.name)
// console.log(nameFetch)


//Q9. Extract all ages

// const ageFetch = users.map(data => data.age)
// console.log(ageFetch)


// Q-10 Add a new property
// const addNew = users.map(item => ({
//     ...item , 
//     isAdult: item.age >= 22,
//     didMCA: item.age >=22
// }))
// console.log(addNew)



// Create User IDs

// const users = ["Abhi", "Rohan", "Aman"]

// const userID = users.map((name , index) => {
//     return {
//         id : index  + 1,
//         name: name
//     }
// }

// )

// console.log(userID)










// Nested Object Transformation
// const students = [
//   {
//     name: "Abhi",
//     marks: [80, 90, 70]
//   },
//   {
//     name: "Rohan",
//     marks: [60, 50, 70]
//   }
// ];

// const addMarks = students.map(item => ({
//   ...item,
//   totalMarks: item.marks.reduce((sum, mark) => sum + mark, 0)
// }))

// console.log(addMarks)

// let numbers = [ 1 , 2 , 3]

// numbers.map((value, index , array)=>{
//     console.log(value , index , array)
// });


// const result = numbers.map(item => {
//    return  item * 2
// })


// console.log(result);


// convert number to string


// const result = numbers.map(String)
// console.log(result)


// const result = numbers.map(Number)
// console.log(result);

// const result = numbers.map(item =>{
//    return item + 10
// })

// console.log(result)


// Square every number

// const result = numbers.map(item => {
//     return item * 2
// });
// console.log(result)


// Level - 2 Object 
// get only names

// Input

// const users = [
//   { name: "Abhi", age: 22 },
//   { name: "Rohan", age: 24 },
//   { name: "Rahul", age: 21 }
// ];

//["Abhi", "Rohan", "Rahul"] ouput

// const result = users.map(key =>{
//     return key.name 
// });
// console.log(result)

// Add isAdult on users ❌ 

// const result = users.map(item => ({

//     ...users,
//     isAdult: true
// }));

// console.log(result)



//Create greeting messages

// input 
// const users = [
//     { name: "Abhi" },
//     { name: "Rohan" }
// ];

// //Output[
//   "Welcome Abhi",
//   "Welcome Rohan"
// ]


// const greetings = users.map(item=>{
//     return `welcome  ${item.name}`
// });

// console.log(greetings)


// level 3

// Add index to every number

// const number = [ 10 , 20 , 30 , 40]

// const result = number.map((value , index )=>{
//     return  value + index
// })

// console.log(result)



// Create serial numbers

// const fruit = ['Banana', 'Apple', 'Fruits']


/*Output
[
  "1. Apple",
  "2. Banana",
  "3. Mango"
]
  */

// const number = fruit.map((item , index) => {
//     return `${index + 1}. ${item}` 
// });

// console.log(number)



//Level 4: Real World

// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 }
// ];
// Format products
/* Input

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

Output 

[
  "Laptop - ₹50000",
  "Phone - ₹20000"
]

*/

// const result = products.map(item =>{
//     return `${item.name} - ₹${item.price}`
// });

// console.log(result)

// 11. Convert marks to percentage
/*
// Input 
// [450, 380, 490]

// Assume total marks = 500

// Output:

// [90, 76, 98]
*/

// const number = [450, 380, 490]

// const result = number.map(item=>{
//     return item / 500 * 100
// });

// console.log(result)


// 12. Extract emails


/* 
Input:

const users = [
  { name: "Abhi", email: "abhi@gmail.com" },
  { name: "Rohan", email: "rohan@gmail.com" }
];

Output:

[
  "abhi@gmail.com",
  "rohan@gmail.com"
]

*/

// const email = users.map(item=> {
//     return `${item.email}`
// })

// console.log(email)




// Level 5: Advanced
// 13. Nested map❌

// Input:

// const students = [
//   {
//     name: "Abhi",
//     marks: [80, 90, 100]
//   },
//   {
//     name: "Rohan",
//     marks: [70, 60, 50]
//   }
// ];

/* Output:

[
  {
    name: "Abhi",
    marks: [85, 95, 105]
  },
  {
    name: "Rohan",
    marks: [75, 65, 55]
  }
]*/

// console.log(students)

// const user = students.map(( item )=>{
//     return item
// });

// console.log(user)


// 14. Convert users into HTML

// Input:
//output[
//   "<li>Abhi</li>",
//   "<li>Rohan</li>",
//   "<li>Rahul</li>"
// ]

// const users = ["Abhi", "Rohan", "Rahul"];

// const result = users.map(item=>{
//     return `<li>${item}</li>`
// })
// console.log(result)


// 15. Create username from names

// Input:
// const names = [{name:"Abhimanyu Singh", name:"Rohan Kumar"}];


// ["Abhimanyu Singh", "Rohan Kumar"]

// Output:

// [
//   "abhimanyu_singh",
//   "rohan_kumar"
// ]
// const userName = names.map(item =>{
//     return `${[item.name]}`
// });
// console.log(userName);


// Challenge Questions (Interview Style)
// 16.
// const number = [1, 2, 3, 4, 5]

// Output:

// [
//   { value: 1, square: 1 },
//   { value: 2, square: 4 },
//   { value: 3, square: 9 },
//   { value: 4, square: 16 },
//   { value: 5, square: 25 }
// ]


// const square = number.map(item =>{
//     return `Value:${item} , Square${item ** 2}`
// })

// console.log(square)


// 17.


// const users = [
//   { name: "Abhi", age: 22 },
//   { name: "Rohan", age: 18 }
// ];


// Output:

// [
//   "Abhi (22)",
//   "Rohan (18)"
// ]


// const result = users.map(item => {
//     return `${item.name} (${item.age})`
// });
// console.log(result);



// 18.✅
// const users = [
//   { name: "Abhi", skills: ["JS", "Node"] },
//   { name: "Rohan", skills: ["React", "MongoDB" , "SQL"] }
// ];


// Output
// [
//   {
//     name: "Abhi",
//     totalSkills: 2
//   },
//   {
//     name: "Rohan",
//     totalSkills: 2
//   }
// ]

// const result = users.map(item=> {
//     return `${item.name} , totalSkills:${item.skills.length}`
// })

// console.log(result)






// Now the username question✅

// Input:

// const name = ["Abhimanyu Singh", "Rohan Kumar"]

// Output:

// [
//   "abhimanyu_singh",
//   "rohan_kumar"
// ]


// const names = name.map(item=>{
//     const result = item.toLowerCase().replace(" ","_")
//     return result
// });

// console.log(names)



const users = [
    { name: "Abhi", age: 22 },
    { name: "Rohan", age: 17 }
];


const name = users.map(item => {
    return {
        ...item,
        isAdult: item.age >= 18
    };
});

console.log(name);