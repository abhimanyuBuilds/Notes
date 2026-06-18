
// **********************************  Learn:  **********************************

// Object.keys           ✅
// Object.values         ✅
// Object.entries        ✅ // help to convert object into array 
// Destructuring         ✅ (Basic extraction , Renaming variables , Default values , Nested destructuring , Rest operator , Computed property destructuring)
// Dynamic keys
// Nested objects
// Optional chaining
// Object Questions
// Beginner
// Count keys
// Merge objects
// Convert object to array
// Find property exists
// Clone object
// Intermediate
// Group users by role
// Count frequency using object
// Flatten nested object
// Deep clone object
// Compare two objects
// Convert array to object
// Nested object traversal


// // dot notation
// console.log(myObj.Name)
// //  Bracket Notation
// console.log(myObj["Name"])
// //Add a new property color.
// myObj.color = "Red";
// console.log(myObj)
// //Update the price
// myObj.price = 5500000
// console.log(myObj)
// // delete Object Property
// delete myObj.color
// console.log(myObj)


// **********************************    Note     ********************************************
// *** Accessing Value by using two loop {{for In} -- by using let key in myObj {key , myObj[key]} *** //
//***{{for of} by using for of the syntax is [key , value] of Object.entries(myObj)} ***


// Looping in Object

// console.log("For In Loop Begin")
// console.log("Output =>")
// for (let key in Data) {
//     setTimeout(() => {
//         console.log(key, ":", Data[key])
//     },1000)
// }


// for (let [key, value] of Object.entries(myObj)) {
//     setTimeout(() => {
//         console.log(key, value)
//     }, 2000)

// }

// print only values 


// console.log("Printing the values")
// for ( let key in myObj){
//     console.log(myObj[key])
// }


// **** count total properties in Object ***
/*
*** this will count the key of an object
console.log(Object.keys(myObj).length)

*** this will count the value

// console.log(Object.values(myObj).length)

*** count all key value pairs

//console.log(Object.entries(myObj).length)

 *** by Using for...In loop

// let count = 0
// for ( let item in myObj){
//     count++
// }

// console.log(count)

*/



// ****************** Task 3 **********************

// .... create an object with function 

// function creatingObject(){   // most effictive way most developer used this ****** 
//     return {}
// }
// console.log(creatingObject())


// function creatingObject(Name , Age){
//     return {
//         Name: Name,
//         Age: Age
//     }
// }
// console.log(creatingObject('Abhimanyu Singh' , 23))

// function newObject(){
//     return new Object();
// }
// console.log(newObject());







// const user ={
//     Name: "Abhimanyu Singh",
//     Course: "MCA",
//     Designation: "Junior Back-End Dev",
//     greet: function(){
//         console.log(`Hello ${this.Name}`)
//     }
// };

// console.log(user)
// user.greet()



// Create calculator object:
// const calculator = {
//     add: function(a , b){
//         return a + b
//     },
//     multiply: function(a ,b ){
//         return a * b
//     },
//     subtract: function(a , b){
//         return a - b
//     },
//     divide: function(a ,b){
//         return a / b
//     }
// };


// console.log("Here is the Addition Result:",calculator.add(34 , 56));
// console.log("Here is the Subtraction Result:",calculator.multiply(99 , 44));
// console.log("Here is the multiply Result:", calculator.multiply(88 , 77));

// ********************************************* Task 4 ************************************************


// Nested Object


// const Data = {
//     Name: 'Abhimanyu Singh',
//     Course: 'MCA',
//     College: 'SRM-IST KTR',
//     Education:{
//         UnderGrad: "BS(CS)",
//         PostGrad: "MCA"
//     },
//     Schooling:{
//         X: 'DAV',
//         XII: 'DAV'
//     }
// }

// // console.log(Data.Education.UnderGrad)

// //Updating Nested Object values
// Data.Education.UnderGrad = 'BSC(COMPUTER SCIENCE)'
// // console.log(Data)

// // Adding new Nested Property

// Data.Assecories={

//     Phone: 'S24' ,
//     Laptop:'ACER laptop'
// }


// Data.Marks = {
//     Physics: 88,
//     Chemistry: 77,
//     Maths: 88
// }

// Data.RemembrableDates = ['16/April2026', '24/April2026']
// // deleting  nested Object value    
// delete Data.Marks.Physics

// console.log(Data)



// *************************** task 5 *********************************

// Array of Objects

// Data.Students =[{Abhimanyu: 88 , Raghav: 66 , Karan: 56}]
// // Print All student names
// // console.log(Data.Students)   // ❌

// // Find student with highest marks.❌

// console.log(Array.isArray(Data.Students))




// ********************************* Task 6 *************************************


//  Before DSA Some QUestion
// Q -1 *** Frequency Counter




// const Info = ['Apple' , 'Banana' , 'Kiwi' , 'Kiwi' , 'Apple' ,'Banana'];
// let count = {}
// for( let i = 0 ; i < Info.length -1; i++){
//     let char = Info[i]

//     if(count[char]){
//         count[char]++
//     }else{
//         count[char] = 1
//     }
// }
// console.log(count)


// Q -2 *** Find duplicate elements.
// Input: [1,2,3,2,1]

// Find first non-repeating character.
// const arr = [12, 13, 14, 15, 16, 12, 13]

// let seen = new Set()
// let duplicate = new Set()

// for ( let i = 0 ; i < arr.length -1 ; i++){
//     if(seen.has(arr[i])){
//         duplicate.add(arr[i])
//     }else{
//         seen.add(arr[i])
//     }
// }

// console.log([...duplicate])


// for (let i = 0; i < arr.length; i++) {
//     let isRepeated = false;
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j && arr[i] === arr[j]) {
//             isRepeated = true
//             break;
//         }
//     }
//     if (!isRepeated) {
//         console.log("Here is your first non repeated Character", arr[i])
//         break;
//     }
// }






// **** Destructuring ****

/* */

let Data = {
    Name: "Abhimanyu Singh",
    EDUCATION: ['M.C.A', 'BS'],
    Position: "Junior Back-End Dev",
    Detail: "D175-D UDAY KUNJ",
    price: 880000,
    Subject:{
        XII: "PCM",
        GRADUATION:{
            BS: "CS",
            POSTGRAD:{
                MASTERS: "MCA"
            }
        }
    }
}



// const {Name: name , EDUCATION: education , Position: position ,Detail: detail ,price: price   } = Data

// console.log(name)
// console.log(position)

// const {Name , ...rest} = Data
// // const {...rest} = Data
// console.log(Name)
// console.log(rest)
// const {Unique = "hello"} = Data
// console.log(Data)
// console.log(Unique)


// const users = [{
//     name: 'Abhi',
//     age: 23
// }]


// const [{name , age}] = users     

// console.log(name , age)


// Nested destructuring

// const {Subject , Subject:{GRADUATION: grad ,  POSTGRAD: post }} = Data
// console.log(post)




/* Topic ***Deep copy vs shallow copy*/
// Detail study

// {shallow copy} is create a new object , but nested objects/ arrays are still refrenced from the original (non-primitive type)
// {Deep copy} creates a completely independent copy where everything is new (no shared refrences)




// to create a shallow copy we have different methods 
//  step - 1 : by using spread operator {...data}
//  step - 2 : by Object.assign({} , original) 

const data = {
    Name: 'Abhimanyu Singh',
    Age: '24',
    Course: 'MCA',
    Designation: 'junior Back-End Developer',
    Company: 'Atthah',
    Education: ['BS' ,'MCA'],
    Past_History: {
        XII: 'PCM',
        X: 'General',

    }
};


// const shallowCopy = {...data}

// const shallow2 = Object.assign({} , data)

// console.log(shallowCopy);

// shallowCopy.Name = 'Aditya Chaudhary'
// shallowCopy.Education.pop()
// shallowCopy.Education.shift()
// shallowCopy.Education.push('BS(computer science)' ,'MCA(computer application)') 
// in shallow copy nested object/array are refrenced not copy that y  original object may get influenced
// console.log(shallowCopy)
// console.log("Hi i'm shallow-2 made up of Object.assign",shallow2)



/* Deep Copy Methods */

/*{structuredClone} <- Method to create Deep copy  
work with most type : object , arrays , premitive , Dates , Maps , Sets
But not : functions , DOM node , Symbols , class instances
*/

/* Json.parse(Json.stringify())  <- Method to create a Deep copy
Limitations:
    Loses functions , undefined , Symbol 
    -convert Dates to String
    Can't handle circular refrences
    handles Nan/Infinity as null
*/

/* _.cloneDeep() (Lodash library)
import _ from 'lodash';

const deep = _.cloneDeep(original)

//Handels almost everything

*/


const deep = structuredClone(data)
console.log("Original:",deep)
deep.Name = 'Shivam Singh'
// deep.Past_History = {XII: 'PCMB'}
// deep.Past_History = {X: 'General'}


// to push in nested object use .dot notation
deep.Past_History.XIII = 'Something'

// to push in nested Object use [] bracket notation

deep.Past_History['XV'] = 'MCA'
console.log("Modified Data:",deep)
console.log("Original:",deep)



//**Important Notes**

// Spread/assign (shallow) 0n where n = top level keys
// JSON methods (deep) - O(n) but serialization overhead
// 3. structuredClone (deep) - Native, decent speed
// 4. Manual recursion (deep) - Slowest for large structures 


// use modern Best practise  2024+ structureClone()

// if you need to clone function then use library lodash()  import _ from 'lodash'