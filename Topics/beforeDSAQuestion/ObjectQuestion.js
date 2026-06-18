// Get all usernames




// const users = [
//   { id: 1, name: "Abhi" },
//   { id: 2, name: "Rohan" },
//   { id: 3, name: "Rahul" }
// ];

// const user = users.map(item => {
//     return item.name
// });

// console.log(user)


//Add a new field

// const users = [
//     { name: "Abhi", age: 22 },
//   { name: "Rohan", age: 16 }
// ]

// const user = users.map(item=>{
// return {
//     ...item , 
//     isAdult: item.age>=18
// }
//      })

// console.log(user);



// Get only active users


// const users = [
//   { name: "Abhi", active: true },
//   { name: "Rohan", active: false },
//   { name: "Rahul", active: true }
// ];



// const user = users.filter(item =>  item.active)

// console.log(user)




// Level 2: Real API Response Style
// 4. Calculate total order amount
// const orders = [
//   { id: 1, amount: 500 },
//   { id: 2, amount: 1000 },
//   { id: 3, amount: 2000 }
// ];

// const total = orders.reduce((acc , na ) => acc + na.amount, 0);

// console.log(total)



//Find user by ID use find


// const users = [
//   { id: 1, name: "Abhi" },
//   { id: 2, name: "Rohan" }
// ];


// const findid = users.find(element => element.id  === 2)

// console.log(findid);

// Sort by age

// const users = [
//   { name: "Abhi", age: 22 },
//   { name: "Rohan", age: 19 },
//   { name: "Rahul", age: 25 }
// ];
// const sortByAge = users.sort((a ,b)=> a.age - b.age)
// console.log(sortByAge)



// Nested Objects (Very Common in APIs)
// 7. Get all product names
// const response = {
//   success: true,
//   data: [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" }
//   ]
// };


// const getProduct = response.data.map(item => item.name)
// console.log(getProduct)








// Get total quantity



// const cart = {
//   items: [
//     { name: "Laptop", qty: 2 },
//     { name: "Phone", qty: 3 },
//     { name: "Mouse", qty: 1 }
//   ]
// };

// const totalQt = cart.items.reduce((acc , curr )=>  acc + curr.qty, 0)

// console.log(totalQt)










// Get users who purchased Laptop


// const users = [
//   {
//     name: "Abhi",
//     purchases: ["Laptop", "Mouse"]
//   },
//   {
//     name: "Rohan",
//     purchases: ["Phone"]
//   }
// ];



// const fetchedUser = users
// .filter( item => item.purchases.includes('Laptop'))
// .map(item => item.name)

// console.log(fetchedUser )











// Level 4: Interview Level
// 10. Group users by age
// const users = [
//   { name: "Abhi", age: 22 },
//   { name: "Rohan", age: 22 },
//   { name: "Rahul", age: 24 }
// ];



// const groupedAge = users.reduce((acc , person ) =>  {
//     const {age} = person;
//     acc[age] = acc[age] ?? []
//     acc[age].push(person)
//     return acc;
// },{})

// console.log(groupedAge)









// Most expensive product 
// const products = [
//   { name: "Phone", price: 20000 },
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1000 }
// ];

// const expensive = products.reduce((acc  , curr ) => {
//     return curr.price > acc.price ? curr : acc
// })

// console.log(expensive)








// Create Leaderboard
// const students = [
//   { name: "Abhi", score: 80 },
//   { name: "Rohan", score: 95 },
//   { name: "Rahul", score: 70 }
// ];


// const sorted = students.sort((a ,d) => d.score - a.score)
// console.log(sorted)



// const ranking = sorted
// .map((item , index) => ({
//     ranking: index + 1,
//     ...item
// }));

// console.log(ranking)



// Expected output:

// ["ABHI", "RAHUL"]

// Rules:

// Keep only active users.
// Age must be 18+.
// Convert names to uppercase


// const users = [
//   { name: "Abhi", age: 22, active: true },
//   { name: "Rohan", age: 16, active: false },
//   { name: "Rahul", age: 25, active: true }
// ];


// const data = users
// .filter(item => item.active && item.age > 18)
// .map(item => item.name.toUpperCase())



//console.log(data)