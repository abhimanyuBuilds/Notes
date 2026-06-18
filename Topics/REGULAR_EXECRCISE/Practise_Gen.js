// if i want to update const value in object and array it will happen or not ? 




//  **********  [1]

// const info = {
//     userName: "Abhimanyu Singh",
//     Age: 24
// }

// // console.log(info)

// const result1 = info["userName"] = 'Abhimanyu Singh Chaudhary'

// // console.log(result1)
// console.log(info)


// const data = [ ' AbhimanyuSingh' , 'ShivamSingh' , 'Rohit Kumar ']


// const result  = data[0] = 'Abhimanyu Singh Chaudhary'

// console.log(result)
// console.log(data)


// if we have const and if we want to update an object or array we can do that with it 





// ******************   [2]


// Splice and Slice  

// const data = [1,2,4,5,'Abhimanyu','Shivam','Prince']

// // const result =data.slice(0,4)
// console.log("OG DATA:",data)
// const result1 = data.splice(0,4)

// console.log("Splice data = ",result1)
// console.log("OG DATA:",data)


// console.log(result)


// function calculateCart(...num){
//     return  num 
// }

// console.log(calculateCart(200,300,400,500))



// arrow function accesing property with this 

// const obj = {
//     userName: "Abhi",

//     greet: function () {
//         const hello =() => {
//             // console.log(this.userName)
//             console.log(`Hello ${this.userName}`)
//         }
//         hello()
//     }
// }

// obj.greet();


// Normal function accesing the property of object 

// const info = {
//     userName: "Abhimanyu",

//     greet: function(){
//         return `HELLO ${this.userName}`
//     }
// }

// console.log(info.greet())



// const info = {
//     userName: "Yash",

//     greet: function(){
//         const sayHi = () => {
//             return `Hello ${this.userName}`
//         }
//        return sayHi()
//     }
// }

// console.log(info.greet())


// function declaration Vs Function Expression 

// console.log(greet("Abhimanyu"))
// function greet(name){
//     return `Hello ${name}`
// }



// const add = function(a,b){
//     return a + b
// }

// console.log(add(23,45))


// CLOUSER 

// CLOUSER is nothing but when we write a function and in that funtion we have two scope one is outer and the other one is inner 
// and inner function remember the outer function variable at the time of creation and executing phase called clouser

// clouser is when a function is defined inside another function and 
// the inner function remembers the variable of outer function even after the outer function has finished execution 


// Destructuring and Hoisting 

// 1 
// const arr = [ 12 , 144 , 455 , 5665 , 765 , 565];

// const [a , b , c , d , e , f] = arr 

// console.log(e);
// console.log(f);
// console.log(a);

// Destructuring in Object 



// const dafo = {
//     userName: "Abhimanyu Singh",
//     Age: 23,
//     Address: {
//         city: "",
//         Village: "Assa",
//         Lok_Shabha: "Muzaffarnagar"
//     }
// };



// const {userName, Age, Address:{city, Village , Lok_Shabha} } = dafo; // if i want village directlly then use :{}


// console.log("Accessing it without key with :{} A")

// console.log("A:=",Village)

// Rename Variable

// const {userName:Name} = dafo; 

// console.log(Name)


// Default values

// const {city = "Jat-Land"} = dafo;

// console.log(city)



//  ...rest Operators 

// const { ...rest } = dafo

// console.log(userName)

// console.log(rest);


// // ----------------------------------------------- or --------------------------------------------------------------


// const {userName1, Age1, Address, city1, Village1 , Lok_Shabha1} = dafo;


// console.log("Using it without :{} to access it from Key B ")


// console.log("B:=",Address.Village)


//  for of loop 

// const map = new Map()

// map.set("IND","INDIA")
// map.set("USA","UNITED STATE OF AMERICA")
// map.set("UK","UNITED KINGDOM")


// for (const [key , values] of map){
//     console.log(`${key}:=${values}`)
// }


//  for in loop 


// const information = {
//     userName: 'AbhimanyuSingh',
//     Age: 23,
//     phone: 2020202
// }

// for (const key in information){
//     console.log(`${key} ==:== ${information[key]}`)
// }

// with {for in} array 


// const arr = [12,3,14,15,16,'Abhi']

// for (let info in arr){
//     console.log(arr[info])
// }



// learning forEach 

// const data = ['AbhimanyuSingh','AdityaChaudhary','Shivam']

// data.forEach( function (info){
//     console.log(data)
// })

// it will also done with arrow function  

// const data = ['AbhimanyuSingh', 'AdityaChaudhary', 'Shivam']

// data.forEach( (info) =>{
//     console.log(info);
// })

// function printInfo(info){
//     console.log(info)
// }


// data.forEach(printInfo)


// data.forEach((item, index, data) => {
//     console.log(item, index, data)
// })


// in for each we have (values , index , data_that_to_be_print)



//  Array of Object 

// const info = [
//     {
//         userName: 'AbhimanyuSingh',
//         Age: 24
//     },
//     {
//         userName: "Rahul",
//         Age: 25

//     },
//     {
//         userName: "Krish",
//         Occupation: "Engineer",
//         Age: null
//     }
// ]

// // console.log(info)

// info.forEach((item) => {
//     if (item.Age > 24) {
//         console.log(item.Age , item.userName|| "No Person is greater then 24")
//     }
// })




// Filter 


// const numValue = [12, 13, 14, 15, 16, 17]
// const newValue = [];

// const result = numValue.filter( (num) => ( num > 14 ))   // if u start a scope then u need to add return key words 

// console.log(result)

//  this thing with for each 

// numValue.forEach((item) => {
//     if (item > 13) {
//         newValue.push(item)
//     }
// })

// console.log(newValue)






// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];




// const bookData = books.filter( (data) =>  data.genre === 'Fiction')

// console.log(bookData)

// const bookData1 = books.filter((data) => { return data.publish > 2000 && data.genre === 'History' }) // if opened scope then return key word must be used 
// console.log(bookData1)




// books.forEach((data) => {
//     if(data.genre === 'Fiction'){
//         console.log(data.title, data.genre , data.publish)
//     }
// })



// MAPS 

// const data = [12, 13, 14, 15, 16, 17]

// const result = data
//     .map((num) =>  num * 100 )
//     .map((num) =>  num + 2 )
//     .filter((num) =>  num >= 1300 )

// console.log(result)



//  reduce method 
//in reduce method we have 3 thing 
// let initalValue = 0 

// const data = [1,2,3,4,5,6,7,8]
// const multiply = data.reduce(function (acc , curr) {
//     console.log(`${acc} and ${curr}`)
//     return acc * curr 
// },1)

// console.log(multiply)

// finding maximin with reduce 


// const data = [ 12, 13 ,14 ,15 ,16 ,17 ,18 , 19]

// const result = data.reduce(function (acc , curr ) {
//     return curr > acc ? curr : acc 
// }, 12 )

// console.log(result)


// const fruitNames = ['Banana', 'Banana', 'Apple', 'Apple', 'Orange', 'Orange', 'Kiwi', 'Kiwi']

// const frequencyFnd = fruitNames.reduce(function (acc, curr) {
//     acc[curr] = (acc[curr] ) + 1
//     return acc 

// },{})

// console.log(frequencyFnd)





//  frequency with for loop 
// const fruitNames = ['Banana', 'Banana', 'Apple', 'Apple', 'Orange', 'Orange', 'Kiwi', 'Kiwi','Pineapple']

// let count = {};

// for (let i = 0 ; i < fruitNames.length ; i++){
//     let fruit = fruitNames[i];

//     if(count[fruit]){
//         count[fruit]++ 
//     }else{
//         count[fruit] = 1 
//     }
// }
// console.log(count)

// if (value exists) {
//    update it
// } else {
//    create it
// }





// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]



// let total_price ;
// const result = shoppingCart.reduce( (item)  => acc + item.price,0  )

// console.log(result)

// const result2 = shoppingCart.filter( (num) => {num.price} )




// setTimeout()
// setInterval(() => {

// }, interval);


// const data = [12 , 13 , 14 , 15 ,16]

// let result = data.reduce((acc,num)  =>{
//     return acc + num
// })
// console.log(result)

// const info = {
//     userName: "AbhimanyuSingh",
//     UserID: "Atthah221",
//     role: "Back-End Dev"
// }

// let data = function(info){
//     return `${info.userName} , ${info.UserID} , ${info.role}`
// }

// // console.log(data(info)



// const  stopInterval = setInterval( ()=> {
//     console.log(data(info))
// }, 2000 )




// setTimeout( () => {
//     clearInterval(stopInterval)
// },12000)

// // clearInterval(stopInterval)



// console.log("Start")

// setTimeout( () => {
//     let date = Date
//     console.log('when it will print 0',date() )
// },0)

// console.log("Stop")



// for (let i = 0; i <= 7; i++) {
//     setTimeout(() => {
//         console.log(i)
//     })
// }



// function delaylog(greet , time,callback){

//     setTimeout( ()=> {
//         console.log(`${greet}`)
//         if(callback){
//             callback()
//         }
//     },time)
// }


// delaylog("Hello",2000, function(){
//     console.log("Executed")
// });




// Promises 


// const myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Hi We are moving the track...")
//         resolve()
//     }, 2000)
// }).then(function () {
//     console.log('Async completed');
// // })

// let arr = [122, 133, 144, 155, 166, 177]
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let maxValue = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > maxValue ) {
//                 maxValue = arr[i]

//             }
//         }
//         resolve({maxValue})

//     }, 2000)

// }).then(function (maxValue) {
//     console.log(`Highest Value in the array would be ${maxValue}`)
// })



// const promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({userName:'AbhimanyuSingh' , Age:24})
//         }else{
//             reject('Error is there')

//         }
//     },2000)
// })


// async function consumepromise(){
//     try{
//     const response = await  promise
//     console.log(response)
// }catch(error){
//     console.log(error)
// }
// }


// consumepromise()




// const str = 'AbhimanyuSingh'
// // let vowels = '';

// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let vowels = '';
//           let name = str.toLowerCase()
//         for (let i = 0; i < name.length; i++) {
//                 if ('aeiou'.includes(name[i])) {
//                     vowels += name[i]

//                 }
//             }
//              resolve(vowels)
//         },2000)
//     }

// )


// async function vowelCheck(){
//     try{
//     const response = await promise 
//     console.log(response)
// }catch(error){
//     console.log(error)
// }
// }

// vowelCheck()






// const promise = new Promise((resolve , reject)=> {
// 	setTimeout(()=>{
// 	let success = true
// 	if(success){
// 	resolve('Data Sent')
// 	}else{
// 	reject('Data not sent')
// 	}


// },2000)
// })


// promise
// .then((res)=>console.log(res))
// .catch((err)=> console.log(err))






// function promise(){
// return new Promise((resolve , reject)=>{
// 	setTimeout(()=>{
// 	let output = true ;
// 	if(output){
// 	resolve('Data Sent111')
// 	}else{
// 	reject('Data can not sent')
// 	}
// },2000)
// });
// }


// promise()
// .then((item)=>console.log(item))
// .catch((err)=> console.log(err))





// Difference between process.nextTick() ,


// console.log(1)

// process.nextTick(()=> {
//     console.log('2 Hi I M Process nextTick()')
// });

// setTimeout(()=>{
//     console.log('3 Hi IM SetTimeout MACROSTACK QUEUE')
// },3000);

// function promise(){
//     return new Promise((resolve , reject)=> {
//         resolve('4 Hi IM MICROSTACK QUEUE')
//     })
// }


// promise()
// .then((result)=> console.log(result))



// setImmediate(()=>{
//     console.log('5 Hi IM setImmediate()')
// })

// console.log(6)  // check notepad for further explanation 




// const Obj = {
//     userName: 'AbhimanyuSingh',
//     Age: 24,
//     PhoneNo: 7899289292,
//     Address: 'D175-D Uday Kunj pallav puram phase2',
//     Email:  'AbhimanyuSingh705@gmail.com',
//     Caste: 'jat',


//     greet: function(){
//         console.log(`Hello ${this.userName}`)
//     }
// }
// // console.log('DEbug')

// console.log(Obj)
// Obj.greet()
// // console.log("Hi")
// // console.log('Debug')
// console.log(`You're Age is ${this.Age}`)
// console.log(`Your Phone no is - ${Obj.PhoneNo}`)
// console.log(`You're Address is ${Obj.Address}`)
// console.log(`You're mail id is - ${Obj.Email}`)
// console.log(`You're Caste Data is - ${Obj.Data}`)







// function obj(userName , Age , PhoneNo , Address , Email , Caste ){
//     this.userName = userName;
//     this.Age = Age
//     this.PhoneNo = PhoneNo 
//     this.Address = Address 
//     this.Email = Email 
//     this.Caste = Caste

//     this.greetings = function(){
//         console.log(`welcome ${this.userName}`)
//     }
//     return this 
// }


// const userOne = new obj('Abhimanyu Chaudhary' , 24 , 7888223443,'D175-D UDAY KUNJ','AB@gmail.com','jat')

// const userTwo = new obj('Aditya Chaudhary' , 25 , 8281828299 , 'D12 SHEEL KUNJ' , 'AD-ORACLE@gmail.com')

// console.log(userTwo.userName)






// console.log(userOne.constructor)



// console.log(userOne.userName)
// console.log(userOne['Address'])

// console.log(userOne['Caste'])

// console.log(userOne.Email)



// console.log(this)


// function  


// function addingTwo(num1 , num2){
//     // console.log(num1 + num2) 
//     return num1 + num2
// }

// const result = addingTwo(123 , 432)
// console.log("Result after adding:",result)

// function userInfo(name){
//     if(userInfo === undefined){
//         console.log("please enter a valid userName")
//         return
//     }
//     return `${name} just logIn`
// };

// console.log(userInfo('Abhimanyu'))






// const userInfo = {
//     userName: "Abhimanyu Singh",
//     Gender: "M",
//     Role: "Back-End Dev",

//     userRoleDescribe: function(user){
//         console.log(`${this.userName} welcome to the website`)
//         console.log(this)
//     }
// }


// userInfo.userRoleDescribe()
// userInfo.userName="SAM"
// userInfo.userRoleDescribe()
// console.log(this)



// Truthy / Falsey values are 

// falseyValue = false , 0 , -0 , BigInt 0n , ""(Empty String) , null , undefined , NaN

// truthyValue = true , [] , {} , "0" , 'false' (becuase in a string that's y and not matter '' ,"") , (empty function) function(){}


// if you want to check the length of an Object then u first have to find keys

// const emptyObj = {}

//     if (Object.keys(emptyObj).length === 0){
//         console.log("Object is Empty");
// }


// and if you want to see the empty arr then 

// const emptyArray = [];

// if(emptyArray.length===0){
//     console.log("Empty Array")
// }


// Null coalescing operator  // this topic is only used when we connect to DB to check the null value 

// let val1 
// val2 = 5 ?? 19
// val1 = undefined ?? 19

// console.log(val2)
// console.log(val1)


// ternary operator 

// let iceCreamPrice = 200

// iceCreamPrice > 190 ? console.log("Yes it's on sale") : console.log("No it's not");



// Rest Operator and Spread Operator


// const arr = [121,133,144,155]

// const newArr = [...arr , 4 , 3]
// console.log(newArr)

// const arr = ["student" , "admin" , "super_admin"]

// function collectRest(...arr){
//     console.log(arr)
// }

// collectRest(arr)


// rest operator 
// const newObj ={
//     name: "Abhimanyu Singh",
//     designation: "Junior Back-End Dev",
//     companyName: "Atthah"
// }

// const Data ={
//     ...newObj,
//     city: "Meerut"
// }

// console.log(Data)



// function sum(...nums){
//     return nums.reduce((a , b)=> a+ b,0)
// }

// console.log(sum(12 , 23));


// function multiply(...nums){
//     return nums.reduce((a,b)=> a * b )
// }
// console.log(multiply(12 , 13))


// REST AND SPREAD OP


// Q-1 Predict the output 

// const arr = [12 , 13 , 14]
// console.log(...arr)

// [12 , 13 , 14] {Output}


// Q - 2  Predict the output 

// const a = [ 1 , 2];
// const b = [...a , 3];

//console.log(b)  // {Output would be} [1 , 2 , 3]

// Q-3 Fill in the blank using spread operator


// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const merged = [...arr1 , ...arr2]

// console.log(merged);
// [1,2,3,4]

//  Q - 4. Predict the output
// function test(...nums) {
//   console.log(nums);
// }

// test(5, 10, 15);
// 5 , 10 , 15 my but 
// [5 , 10 , 15]

//  Q - 5 Predict the output
// const [a, ...rest] = [10, 20, 30];

// console.log(a); // 10 
// console.log(rest); // [20 , 30]


// Q - 6 What will this print?

// const user = {
//   name: "Rahul",
//   age: 25
// };

// const updatedUser = {
//   ...user,
//   city: "Delhi"
// };

// console.log(updatedUser);

// {
//     name: "Rahul",
//     age: 25 , 
//     city: "Delhi"
// }


// Q -7 predict the output

// const nums = [1, 2, 3];

// const copy = [...nums];

// copy.push(4);

// console.log(nums); // 1 , 2 , 3
// console.log(copy); // 1 , 2 , 3 , 4

// Q - 8Complete the function

// Create a function that accepts any number of arguments and returns their sum.

// function sum(...num) {
//     const result = num.reduce((a,b)=> a + b)
//     return result
// }

// console.log(sum(12 , 14))


// 9. Predict the output
// const obj1 = {
//   a: 1,
//   b: 2
// };

// const obj2 = {
//   b: 10,
//   c: 20
// };

// const result = {
//   ...obj1,
//   ...obj2
// };

// console.log(result);

// {
//     a: 1 ,
//     b: 2,
//     b: 10 , 
//     c: 20
// }



//  Q - 10 predict the output

// const arr = [1 , 2 , 3 ]
// function test(a , b , c){
//     console.log(a + b + c)
// }


// test(...arr)  // {Output would be} 6

// Q = 11 find the mistake
// function demo(a, b) {
//   console.log(a, b);
// }
// demo(12 , 34) // in rest operator we don't use symbol at function 




//  Q - 12  predit the output
// const user = {
//   name: "Aman",
//   address: {
//     city: "Delhi"
//   }
// };

// const copied = { ...user };

// copied.address.city = "Mumbai";

// console.log(user.address.city); // Mumbai


//  Q - 13 Convert this to use rest parameter
// function add(a , b) {
//   console.log(a + b);
// }


// function add(...num){
//     const result = num.reduce((a , b)=> a +b)
//     return result
// }

// console.log(add(12 , 14))



// const add = (...args)=>{
//     console.log(args)
// }


// add(12 , 13)


//  write a function to remove first
// const arr = [12 , 13 ,14 , 15 , 16]
// function removeFirst(array){
//     let [firstValue , ...lastValue] = array
//     return [...lastValue]
// }

// console.log(removeFirst(arr))



// console.log(...[1 , 2], ...[23 , 24])

// const obj = {
//   a: 1,
//   b: 2
// };

// const newObj = {
//   ...obj,
//   a: 100
// };

// console.log(newObj);










// const updatedData = {
//   Name:"Abhimanyu",
//   Age: "23",
//   School: "SRM",
//   Course: "MCA"


// }

//  updatedData.Name = "Shivam"
//  updatedData.Age = "24"
//  updatedData.School = "CCSU"
//  updatedData.Course = "MBA"

// console.log(updatedData)

