
// const findMax = students.reduce((acc, curr) => {
//   return curr > acc ? curr : acc
// }, students[0]);

// console.log(findMax)

// const arr = [ 12 ,[15] , [16] , [19 , 200]]

// const addAll = arr.reduce((acc , curr)=> {
//   return acc + curr
// },0)

// console.log(addAll)


// Find max value


// const maxValue = arr.reduce((acc , curr)=> {
//   return acc > curr ? acc : curr
// },0)

// console.log(maxValue)


// count occurance


// const countOccurence = arr.reduce((acc , curr ) => {
//    acc[curr] = (acc[curr] || 0) + 1
//   return acc
// },{})

// console.log(countOccurence)



// const flat = arr.reduce((acc , curr) => {
//   return acc.concat(curr)
// },[]);

// console.log(flat)


// find minimum number 

// const arr = [12 , 13 , 14 , 15 , 16]

// const minimumNumber = arr.reduce((acc , curr) => {
//   return acc < curr ? acc : curr
// },arr[0])

// console.log(minimumNumber);



// const arr = [ 1 , 1 , 1 , 1 , 1 , 2 , 2 , 2 , 3 , 3 , 3 , 4 , 5 , 6]

// const countFrequency = arr.reduce((acc , curr)=> {
//   acc[curr] = (acc[curr]|| 0) + 1
//   return acc
// },{});
// console.log(countFrequency);


// const arr = [ 12 , 12]

// const randomMultiplication = arr.reduce((acc , curr) => {
//     return (acc + 1) + (acc * curr)
// })

// console.log(randomMultiplication)


// find product

// const findProduct = arr.reduce((acc , curr) => {
//   return acc * curr
// })
// console.log(findProduct);

//Object Arrays
// 5. Total marks of all students
// const students = [
//   { name: "Abhi", marks: [80 , 88 , 99 , 78] },
//   { name: "Rohan", marks: [90 , 55 , 76 , 87 ] },
//   { name: "Rahul", marks: [70 , 23 , 42, ,76 ] }
// ];

// const totalMarks = students.reduce((acc , curr) => {
// const studentTotal = curr.marks.reduce((sum , mark) => sum + mark,0);

// return acc + studentTotal;
// },0);

// console.log(totalMarks)



// 11. Group by age
const users = [
  { name: "Abhi", age: 22 },
  { name: "Rohan", age: 22 },
  { name: "Rahul", age: 24 }
];



// const groupedAge = users.reduce((acc , curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc 
// })
// console.log(groupedAge)


// const groupedAge = users.reduce((acc , curr)=> {
//     acc[curr] = (acc[age] > 22 || acc[age] < 22) 
//     return acc
// })

// console.log(groupedAge)



const groupedTogether = users.reduce((acc , curr)=>{
    if(acc[curr.age]){
        acc[curr.age].push(curr)
    }else{
        acc[curr.age] = [curr]
    }
    return acc
},{});

console.log(groupedTogether)
