// Higher order function is a function that takes another function as an argunment and returns a function as its result

// .map() . filter() . reduce() .setTimeout() they all accept a callback function


// function greet(name){
//     return "Hello"+" " +name
// }

// function ExecuteOuter(callback){
//     console.log(callback(("Rahul")))
// }

// ExecuteOuter(greet)




// HOF Higher order function is a function that take as an argunment from another function..
// function Average(value){
//     return `Here is you're Average` +  " " + value/5
// }
// function Execute(calculate){
//     console.log(calculate(("33")))
// }
// Execute(Average)


// function OddEven(num){
//     if(num % 2 === 0){
//         return 'Even'
//     }else{
//         return 'Odd'
//     }
// }

// function ExecuteEven(even){
//     console.log(even((34)))
// }

// ExecuteEven(OddEven)

// Higher order function is nothing but a function which take another function as an argunment


// function PrintingTwoVal(str1 , str2){
//     return `Here is your Name: ${str1} ${str2}`
// }

// function ExecutePrint(Str){
//     console.log(Str("Rishabh" , "Bajaj"));
// };

// ExecutePrint(PrintingTwoVal)


// const arr = [12, 14, 15, 16]
// function findMissing(arr) {
//     let isMissing = false
//     for (let i=0; i < arr.length - 1; i++) {
//         if (arr[i + 1] - arr[i] !== 1) {
//             return `Here is the Missing Number: ${arr[i] + 1}`
//         }
//     }
//     return   `No Number is Missing..`
// }

// function ExecuteMissing(fn) {
//     console.log(fn((arr)))
// }

// ExecuteMissing(findMissing)


// function add(a , b){
//     return a + b
// }
// // Higher order function
// function execute(fn , x , y){
//     const result = fn(x,y)
//     console.log("Result=", result)
// }

// execute(add, 12 ,13)




// const num = [2222 , 232920 , 4899922 , 3 , 99]
// function averageFind(num) {
//     for (let i = 0; i < num.length ; i++) {
//         if(num[i] % 2 === 0 ){
//             console.log(num[i] , "Even")
//         }else{
//             console.log(num[i] , "odd")
//         }
//     }
// }

// function executeCheck(fn) {
//     return (fn(num))
// }
// executeCheck(averageFind)





// find average with callback and hof

// let num = 550


// function findAverage(num){
//     return `The Average is ${num} is` + " ", num / 5
// }

// function printAverage(fn){
//    console.log(findAverage(fn(num)))
// }


// printAverage(findAverage);


// Arrow function as callback

// function calculate(callback,...n ){
//     return callback(...n)
// }



// const sum = calculate((x , y) => x + y , 5, 6)

// console.log(sum)




s

