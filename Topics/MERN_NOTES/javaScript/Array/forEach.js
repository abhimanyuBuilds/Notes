/*  forEach is a method that is used to loop over every element */


///// first review 11 , 13 Question's logic           


// arr.forEach( function ( currentValue , index , array){
// })

// Print all elements 

// const arr = [10, 20, 30, 40];

// arr.forEach( (item) => {
//     console.log( item )
// });

// 2. Print index with value

// const fruits = ["Apple", "Mango", "Banana"];

// fruits.forEach((element , index) => {
//     console.log( index , element)
// });



// 3. Print only even numbers

// const nums = [3, 6, 9, 12, 15, 18];

// nums.forEach((item) => {
//     if(item % 2 === 0){ 
//         console.log("Even" , item)
//     }});



// 4. Print squares

// const nums = [2,3,4,5];


// nums.forEach((item) => { 
//     console.log(item ** 2);
// });



// 5. Sum of all numbers

// const nums = [10,20,30,40];
// let sum = 0
// nums.forEach((item) => {
//     sum += item
// })
// console.log(sum)


// Level 2 (Medium)

// 6. Count odd numbers

// const nums = [1,2,3,4,5,6,7];
// let count = 0

// nums.forEach(( num , index) => { 
//     if( num % 2 !== 0 ){
//         count++
//     }
// });
// console.log(count)




// 7. Print names only


// const users = [
//     {name:"Rahul", age:22},
//     {name:"Amit", age:25},
//     {name:"Ankit", age:30}
// ];

// users.forEach((user) => 
//     { console.log(user.name)

//     });



// 8. Print users older than 25


// const users = [
//     {name:"Rahul", age:22},
//     {name:"Amit", age:28},
//     {name:"Ankit", age:31}
// ];

// users.forEach((user) => {
//     if(user.age > 25){
//         console.log(user.name)
//     }
// });

// 9. Find total salary


// const employees = [
//     {name:"A", salary:50000},
//     {name:"B", salary:70000},
//     {name:"C", salary:60000}
// ];


// let totalSalary = 0
// employees.forEach((value) => { 
//     totalSalary += value.salary
//  });

// console.log(totalSalary);

 
// 10. Convert all names to uppercase using forEach


// const names = ["rahul","amit","vikas"];
// let uppercase = []

// names.forEach((name) => 
//     { uppercase.push(name.toUpperCase())})

// console.log( uppercase)


// Level 3 (Objects)
// 11. Print every key and value


// const user = {
//     name:"Rahul",
//     age:24,
//     city:"Delhi"
// };


// Object.entries( user ).forEach(([key , value ]) => {
//     console.log(key , value)
// })


// 12. Count completed tasks


// const tasks = [
//     {title:"Learn JS", completed:true},
//     {title:"Learn Node", completed:false},
//     {title:"MongoDB", completed:true}
// ];

// let count = 0
// tasks.forEach(( task) => { 
//     if( task.completed === true){
//         count++
//     }
// });
// console.log("Here is the count of completed task:",count);




// 13. Print all project names


// const employees = [
//     {
//         name:"Rahul",
//         projects:["CRM","ERP"]
//     },
//     {
//         name:"Amit",
//         projects:["HRMS"]
//     }
// ];




// employees.forEach((project) => { 
//     project.projects.forEach((item ) => {
//         console.log( item)
//     })
// });


// 14. Calculate total marks


// const students = [
//     {name:"A", marks:[80,90]},
//     {name:"B", marks:[70,60]}
// ];


// let totalMarks = 0

// students.forEach((mark) => { 
//     mark.marks.forEach((item) => {
//         totalMarks += item
//     })
// });
// console.log(totalMarks)










/* Rest Questions
Remaining Questions
15.

Print every skill

const users = [
{
    name:"Rahul",
    skills:["Node","MongoDB"]
},
{
    name:"Amit",
    skills:["React","Express"]
}
];

Output

Node
MongoDB
React
Express
16.

Count total skills

Expected

4
17.

Print

Rahul CRM
Rahul ERP
Amit HRMS
Amit Billing
const employees = [
{
    name:"Rahul",
    projects:["CRM","ERP"]
},
{
    name:"Amit",
    projects:["HRMS","Billing"]
}
];
18.

Count frequency

const fruits = [
"Apple",
"Mango",
"Apple",
"Orange",
"Mango",
"Apple"
];

Expected

{
    Apple:3,
    Mango:2,
    Orange:1
}
19.

Group by department

const employees = [
{name:"A", dept:"Backend"},
{name:"B", dept:"Frontend"},
{name:"C", dept:"Backend"},
{name:"D", dept:"DevOps"}
];

Expected

{
    Backend:["A","C"],
    Frontend:["B"],
    DevOps:["D"]
}
20.

Flatten array

const arr = [
[1,2],
[3,4],
[5,6]
];

Expected

[1,2,3,4,5,6]
The Pattern You're Missing

Most of your mistakes come from not identifying the shape of the data before writing the loop. A good habit is to ask:

Is this value...

Number?
String?
Object?
Array?

For example:

Q13
employees

↓

employee

↓

projects

↓

["CRM","ERP"]

↓

project
CRM
ERP

That tells you you need two forEach() loops.

Q14
students

↓

student

↓

marks

↓

[80,90]

↓

80
90

Again, two loops.
*/