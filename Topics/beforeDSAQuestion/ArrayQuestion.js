// Phase 1 — Understand Array Basics & Memory Flow
//  *** Understand how values are stored ***

// How indexes work
// How loops move through memory
// ===========================================================================================
/* All Array methods 





// *** Questions *** 
/*
Print all elements of array              ✅
Print array in reverse                   ✅
Find length manually without .length     ✅
Sum all elements                         ✅
Find average                             ✅
Find largest element                     ✅
Find smallest element                    ✅
Find second largest                      ✅
Find second smallest                     ✅
Count even and odd numbers               ✅
Find max difference between two elements ✅
Copy one array into another manually     ✅
Reverse array without .reverse()         ✅  
Swap first and last element              ✅ 
Move all zeros to end                    ✅
Move all negative numbers to left side   ✅
Check if array is sorted                 ✅ 
Find missing number from 1 to N          ✅  
Linear Search both backward              ✅ 



*Traversing array (Traversing an array means accessing every element of the array one by one.)   

*******************   {Why Traversing is Used    ***********************

                            We traverse arrays to:
                            Print elements
                            Search data
                            Update values
                            Count elements
                            Find max/min
                            Perform calculations



Find first duplicate
Find all duplicates
*/



// const arr = ["Abhimanyu Singh", "Karan Rathore" , "Gurdeep Randhawa" , "Sukhvinder Dhillon" , "IX-JAT" , "PUNJAB" , "RR" , "RVC" , "AMC" , "GAROUD" , "SOG" , "SPG"];
// const arr = [12, 13, 14, 15, 16]

// console.log(arr) Q -1 

// Q-2 with reverse method and without reverse method 


// console.log(arr.reverse()) 

/* Solution with reverse method  
[
  'SPG',
  'SOG',
  'GAROUD',
  'AMC',
  'RVC',
  'RR',
  'PUNJAB',
  'IX-JAT',
  'Sukhvinder Dhillon',
  'Gurdeep Randhawa',
  'Karan Rathore',
  'Abhimanyu Singh'
]*/

// for (let i = arr.length -1 ; i >= 0 ; i--){
//     console.log(arr[i])
// }

/*Solution with out reverse method
SPG
SOG
GAROUD
AMC
RVC
RR
PUNJAB
IX-JAT
Sukhvinder Dhillon
Gurdeep Randhawa
Karan Rathore
Abhimanyu Singh
*/

//  Q-3 find length with out length
/*
// console.log(arr.length) 
// 12 length with method to see only now doing this without method


// let count = 0 
// for (let item of arr){
//     count++
// }
// console.log(count)  // 12

*/


//  Q-4 sum all element
/*
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }                                                                                  // const arr = [12, 13, 14, 15, 16]
// console.log(sum)     // if u write only sum += i then output would be {10} because of indexing 0 + 1 + 2 + 3 + 4 = 10 



// let sum = 0 ;
// for (let arrays of arr){
//     sum += arrays
// }
// console.log(sum)

*/
//  Q-5 Average find
/*
// function findAverage(arr){
//     let sum = 0 
//     for (let Array of arr){
//         sum += Array
//     }
//     let result = sum / arr.length
//     return result

// }

// console.log(findAverage(arr))


// console.log(arr.length) // 5

// function findAverage() {
//     let sum = 0;
//     let totalArray = 0;
//     for (let arrays of arr) {
//         totalArray++
//         sum += arrays
//     }
//     let result = sum / totalArray
//     console.log("Total array would be:", totalArray)
//     console.log("Sum of the array would be:", sum)
//     return result
// }
// console.log(findAverage())
*/
// Q - 6 finding largest element
/*


// function largeFind(arr){
//     let maxValue = arr[0]
//     for (let Array of arr){
//         if(Array > maxValue){
//             maxValue = Array
//         }
//     }
//     return maxValue
// }

// console.log(largeFind(arr))



// function largestElement(){
//     let firstMax = arr[0];
//     for (let i = 0; i < arr.length ; i++){
//         if(arr[i] > firstMax){
//             firstMax = arr[i]
//         }
//     }
//     return firstMax
// }
// console.log(largestElement())
*/


//  Q -7 finding smallest Element
/*
// function smallestElement(arr){
//     let small = arr[0]
//     for ( let Array of arr ){
//         if(Array < small){
//             small = Array
//         }
//     }
//     return small
// }
// console.log(smallestElement(arr))



// function smallestElement(){
//     let SmallValue = arr[0];
//     for (let i = 0 ; i < arr.length ; i ++){
//         if(arr[i] < SmallValue){
//             SmallValue = arr[i]
//         }
//     }
//     return SmallValue
// }
// console.log(smallestElement())

*/
//  Q- 8
// finding second largest
/*
// const arr = [12, 13, 14, 15, 16]

// function secondLargestFind() {
//     let firstLargest = -Infinity
//     let secondLargest = -Infinity

//     for (let item of arr) {
//         if (item > firstLargest) {
//             secondLargest = firstLargest
//             firstLargest = item
//         }else if(item > secondLargest && item !== firstLargest){
//             secondLargest = item
//         } 
//     }
//     return {
//         firstLargest,
//         secondLargest
//     }
// }

// console.log(secondLargestFind(arr))
*/

//  Q - 9 Find second smallest 
/*
const arr = [12 , 13 , 14 , 15 , 16 , 17]
function secondSmallestFind(arr){
let firstSmallest = Infinity
let secondSmallest = Infinity
for ( let item of arr){
    if(item < firstSmallest){
        secondSmallest = firstSmallest
        firstSmallest = item 
    }else if (item < secondSmallest && item !== firstSmallest){
        secondSmallest = item
    }
}
 return {
        secondSmallest, 
        firstSmallest
    }
}
console.log(secondSmallestFind(arr))


// */

//  Q - 10 count odd even
/*
// function oddEvenCount(arr){
//     let oddCount = 0
//     let evenCount = 0

//     for ( let Array of arr){
//         if(Array % 2 === 0){
//             evenCount++
//         }else{
//             oddCount++
//         }
//     }
//     return {oddCount , evenCount}
// }

// console.log(oddEvenCount(arr))



// function evenOddCount(arr) {
//     let evencount = 0
//     let oddcount = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evencount++
//         } else {
//             oddcount++
//         }
//     }
//     return { "even": evencount, "odd": oddcount }
// }

// console.log(evenOddCount(arr))

*/

//  Q - 11 find max difference between two element
/*
// const arr1 = [12 , 18]
// function findDifference(){

//     if(arr1[0]>arr1[1])
//     {
//         return arr1[0]-arr1[1]
//     }
//     else
//     {
//         return arr1[1]-arr1[0]
//     }
// }

// console.log(findDifference(arr1))


// const arr1 = [12,  14, 18, 24]



// function findDifference(arr){
//     let differenes = []
//     let refrenceValue = arr1[0]
//     for ( let Array of arr1){
//         differenes.push(Array - refrenceValue)
//     }
//     return differenes
// }
// console.log(findDifference(arr1))

// function findDifferenceBetween(arr1) {
//     let differences = [];
//     let refrenceValue = arr1[0]
//     for (let i = 1; i < arr1.length; i++) {
//         differences.push(arr[i] - refrenceValue)
//     }
//     return differences
// }

// console.log(findDifferenceBetween(arr1))


// function findDifferenceOfEach(arr1){
//     let differences = [];
//     let refrenceValue = arr1[0]

//     // console.log(refrenceValue)
//     for ( let i = 0 ; i < arr1.length ; i++){
//         differences.push(arr1[i] - refrenceValue)
//     }
//     return differences
// }

// console.log(findDifferenceOfEach(arr1))

// function differenceElement(arr){
//     for ( let i = 0 ; i < arr.length - 1 ; i++){
//         if( arr[i] > arr[i+ 1]){
//             return arr[i] - arr[i+1]
//         }else{
//             return arr[i+1] - arr[i]
//         }
//     }
// }

// console.log(differenceElement(arr))
*/

//  Q - 12 copy all array from another array manually
/*
// const arr1 = [ 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 ]
// let arr3 = []
// let arr2 = []

// function copyingArray(arr1){
//     for ( let i = 0 ; i < arr1.length; i++){
//         arr2.push(arr1[i])
//     }
//     return arr2
// }


function copy(arr1){
    for ( let i = 0 ; i < arr1.length ; i++){
        arr3[i]= arr1[i]  // if we dont write arr3[i] then output would be {19} because it will overwrite the array again and again 12 come okay store but when iteration goes to 13 it will over write 12 that'y arr3[i] comes if u use arr3[i] then it will ask arr2[i] that store each element at their own index
    }
    return arr3
}
console.log(copy(arr1))


// console.log(copy(arr1), "This is a copy ")
// console.log(copyingArray(arr1), "I'm Array function copyingArray")

// let arr4 = arr1.slice(0 , )
// console.log(arr4, "I'm Array 4")

*/

//  Q - 13 Reverse an array without reverse

/*
// const arr1 = [123,13444 ,1483 , 13930 , 1939 , 29292 , 29383]
// function reverseArray(arr1){
//     let reverse = []
//     for (let i = arr1.length - 1; i >= 0; i--){
//         reverse.push(arr1[i])
//     }
//     return reverse
// }


// console.log(reverseArray(arr1))
*/

//  Q - 14 Swap first and last number

/*
// const arr1 = [1244, 4431, 4453, 5543, 6675]

// function swapTwoNumber(arr1){
//     let firstValue = arr1[0];
//     let lastValue = arr1[arr1.length-1];

//     arr1[0] = lastValue;
//     arr1[arr1.length - 1] = firstValue
//     return arr1
// }
// console.log(swapTwoNumber(arr1))




//swap two number
/*
const arr = [12331 , 939394  , 9902030 ]


// function swapTwo(arr){
//    

//      firstValue = arr[0]
//      secondValue = arr[1]

//     arr[0] = secondValue
//     arr[1] = firstValue
// }
// swapTwo(arr)
// console.log(arr)



// swap first and last
// function firstLast(arr){
//     let firstValue = arr[0]
//     let lastValue = arr[arr.length - 1]

//     arr[arr.length - 1] = firstValue
//     arr[0] = lastValue
// }
// firstLast(arr)
// console.log(arr)

*/


// Q - 15 move all zeros to end
/*
// const arr1 = [0, 0, 0, 1, 12, 13, 14, 15, 16, 17, 18]

// function zeroAtEnd(arr1) {
//     let arr2 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== 0) {
//             arr2.push(arr1[i])

//         }
//     }
//     for (let j = 0 ; j < arr1.length; j++){
//         if(arr1[j] === 0){
//             arr2.push(arr1[j])
//         }
//     }
//     return arr2

// }
// console.log(zeroAtEnd(arr1))



// removeZero from start
const arr = [0 , 0 , 0 , 0 , 12 , 12 , 12 , 13 , 13 , 14 , 15 , 1 , 1 ]

// function removingZero(arr){
//     let arr2 = []
//     for(let h = 0; h < arr.length ; h++){
//         if(arr[h] === 1){
//             arr2.push(arr[h])
//         }
//     }
//     for ( let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > 1){
//             arr[i] % 2 === 0
//             arr2.push(arr[i])
//         }
//     }
//     for(let j = 0 ; j < arr.length ; j++){
//         if(arr[j] === 0 ){
//             arr2.push(arr[j])
//         }
//     }
//     return arr2
// }

// console.log(removingZero(arr))
*/


// Q - 16  Move all negative numbers to left side
/*
// const arr = [ 12 , 13 , 14 , 15 , 16 , 17 , -19 , -13 , -66]

// function neagtiveNumber(arr){
//     let arr2 =[]
//     for (let i = 0 ; i < arr.length ; i++){
//         if(arr[i] < 0){
//             arr2.push(arr[i])
//         }
//     }
//     for ( let j = 0 ; j < arr.length ; j++){
//         if(arr[j] > 0){
//             arr2.push(arr[j])
//         }
//     }
//     return arr2
// }

// console.log(neagtiveNumber(arr))

*/

//  Q - 17 check array is sorted or not
/*
// const arr = [1 , 2 , 3 , 4, 5 , 6 , 7]


// function arraySorting(arr){
//     let isSorted = true
//     for (let i = 0 ; i < arr.length -1 ; i++){
//         if(arr[i] > arr[i+1]){
//             isSorted = false
//             break
//     }
//     }
//      if(isSorted){
//             console.log("Array is sorted" , arr)
//         }else{
//             console.log("Array is not sorted", arr)
//         }
//    }
// arraySorting(arr)
*/


// Q - 18 check if number is missing in array or not
/*
// const arr = [12 , 13 , 14,  16]


// function missingFind(arr) {
//     let isMissing = false
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i+1] - arr[i] !== 1) {
//             isMissing = true
//             console.log("Missing number is:", arr[i] + 1)
//             break
//         }
//     }
//     if (isMissing) {
//         console.log("In Array Number is Missing", arr)
//     }
// }

// missingFind(arr)
*/


//  Out of Content Question Find Even Odd in an Array

/* Question
const  arr =  [ 12 , 14 , 177483 , 399393 , 12234]
// console.log(arr.length)

function EvenOdd(arr){
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0 ){
            console.log(arr[i] , "Even")
        }else{
            console.log(arr[i] , "Odd")
        }
    }
}


function executefn(fn){
    return fn((arr))
}

executefn(EvenOdd)
*/


//  Question - 19 (pair sum)  with two methods for and for of
/* Pair sum

// const arr = [12 , 132 , 1442 , 1554]
// let sum = 0;

// for ( let i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }

// console.log(sum)



// for ( let values of arr){
//     sum += values
// }

// console.log(sum)
*/

// Question - 20 (Sort custom Object)
/* 
const myObj ={
    Marks:{
        Subject:{
            Physics: 89,
            Maths: 99,
            Chemistry: 66
        },
    }
};


const subjects = Object.entries(myObj.Marks.Subject) // converting in array
const sorted = subjects.sort(( a , b ) => b[1] - a[1])

console.log(sorted)

const storedObj = Object.fromEntries(sorted) // converting it into object
console.log(storedObj)

*/



//  move all negative number to left side and sort them 

// const arr = [12, -12, 14, -45, 16, 13 ,-33, 15]
// function negativeLeft() {
//     let arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0){
//             arr2.push(arr[i])
//         }
//     }
//     for ( let j = 0 ; j < arr.length ; j++){
//             if(arr[j] > 0){
//                 arr2.push(arr[j])
//             }
//         }
//     arr2.sort((a,b)=> a - b)
//     return arr2
// };

// console.log(negativeLeft())  

/* Output
[
  -45, -33, -12, 12,
   13,  14,  15, 16
]
*/


// Q - 21 Linear Search Question
// const arr = [10, 20, 30, 40]

/*Linear search left to right
// // let found = false
// function searchNumber(arr) {
//     const target = 30
//     let found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             found = true
//             console.log("Here is your target", target)
//             break;
//         }
//     }

// };

// searchNumber(arr);
*/



/* Code BackWard - Search
function backwardSearch(arr){
    let target = 10
    let found = false
    for ( let k = arr.length -1 ; k >= 0 ; k-- ){
        if(arr[k] === target){
            found = true
            console.log(`Here is your target: ${target}`)
            break;
        }
    }
};

backwardSearch(arr)

*/



// ------------------------------------------- Array Methods -----------------------------------
/* New Array Question on 
push/pop
shift/unshift
splice/slice
concat
includes
indexOf
find
filter
map
reduce
every/some
sort
reverse
flat
Array Questions (No DSA Yet)
Beginner
Reverse array
Find max/min
Sum of array
Average
Remove duplicates
Count even/odd
Merge arrays
Rotate array
Flatten array
Frequency count
Intermediate
Group elements
Chunk array
Find intersection
Find union
Move zeros to end
Find missing number
Second largest
Pair sum
Sort custom objects
Deep flatten array
*/


//  Group an Same element together
/*
const arr = [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5,6]
 function groupedTogether(arr) {
     let grouped = {}

    for (let i = 0; i < arr.length; i++) {
         let value = arr[i];
         if (grouped[value]) {

             grouped[value].push(value);

         } else {
             grouped[value] = [value]
         }
     }
     return grouped;
}

 console.log(groupedTogether(arr))

*/

/* sum of pair and find that pair which give target value 




console.log("You have to find the array which after combine give sum of targetValue")

const arr = [10, 20, 30, 40, 50]

function sumofPair(arr) {
    let targetValue = 90
    setTimeout(()=>{
                console.log("Yes i found it")
    },1000)
    setTimeout(()=>{
        console.log("Please wait ..   Yes i find it Please understand i'm a Intermidiate")
    },2000)
    setTimeout(()=>{
          for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetValue) {
                console.log(`Here Target Value is ${targetValue} & here is the combination where which we can find sum of:${arr[i]} + ${arr[j]}`)
            }
        }
    }

    },6000)
}
sumofPair(arr)
*/

/*  chunk of array question slice it and extract in pair of size

// const arr = [12 , 13 , 14 , 15 , 16 , 17 ]
// const result = []
// const size = 2;


// function chunkSize(){
//     for ( let i = 0 ; i < arr.length ; i+=size){
//         result.push(arr.slice(i , i+size))
//     }
//     return result
// }
// console.log(chunkSize(arr))





const data = ['abhimanyuSingh', 'IX-JAT', 'Karan', 123231, 949302, 39939193, 'Ethiad', 'Qatar-Airways', 'Lindit' , true , false , true , true , true , true , true , true , true , true , false , false]
const result = []
const size = 3

function ChunkInPair(data, size) {
    const strings = data.filter(item => typeof item === 'string')
    const number = data.filter(item => typeof item === 'number')
    const booleanstrue = data.filter(item => typeof item === 'boolean' && item === true)
    const booleanfalse = data.filter(item => typeof item === 'boolean' && item === false)


    let rearranged = [...strings, ...booleanstrue ,...booleanfalse ,  ...number ]
    for (let i = 0; i < rearranged.length; i += size) {
        result.push(rearranged.slice(i, i + size))
    }
    return result
}

console.log(ChunkInPair(data , size))

*/



// grouped the element

// const arr = [12 , 12 , 12 , 12 , 13 , 13 , 14 , 14 , 15 , 16 , 16]
// let grouped ={}

// function groupedeLement(arr){
//     for ( let i = 0 ; i < arr.length ; i++){
//         let value = arr[i]
//         if(grouped[value]){
//             grouped[value].push(value)
//         }else{
//             grouped[value] = [value]
//         }
//     }
//     return grouped
// }

// console.log(groupedeLement(arr))















// factorial of 7


// function factorial(n){
//     if(n === 0 || n === 1) return 1
//     return n * factorial(n - 1);
// }

// console.log(factorial(6))


// function factorial(n){
//     if(n === 0 || n === 1) return 1 
//     return n * factorial( n - 1)
// }
// console.log(factorial(10))


// function factorial(n){
//     let result = 1;

//     for ( let i = 2 ; i <= n ; i++){
//         result *= i
//     }
//     return result
// }

// console.log(factorial(1))




// function fibonacci(n){
//     if(n === 0 ) return 0
//     if(n === 1) return 1

//     return fibonacci( n - 1) + fibonacci( n  - 2)
// }

// console.log(fibonacci( 8 ))








// rorate array


// const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]

// function rotateArray(arr , k){
//     k = k % arr.length;

//     let lastPart = arr.slice(-k);
//     let firstPart = arr.slice(0 , arr.length -k)

//     return [...lastPart , ...firstPart]
// }


// console.log(rotateArray(arr , 4))









// const arr = [12 , 13 , 14 , 15 , 16 , 17 , 18 , 19]

// function rotateArr(arr , k){
//     k = k % arr.length ;

//     let lastPart = arr.slice( -k)
//     let firstPart = arr.slice(0 , arr.length - k)

//     return [...lastPart , ...firstPart]
// };

// console.log(rotateArr(arr , 3))







// const arr = [ 12 , 14 , 16 , 18 , 20 , 22 , 24 , 26]

// function rotateByK(arr , k){
//     k = k % arr.length ; 

//     let lastValue = arr.slice(- k)
//     let firstValue = arr.slice(0 , arr.length - k)

//     return [...lastValue , ...firstValue]
// };

// console.log(rotateByK(arr , 4))


// flatten array
// const arr1 = [1 , [ 2 , [ 3 , [ 4 ,[ 5 ,[ 6 , [ 7 ] ] ] ] ] ]]

// console.log(arr1.flat(Infinity))
// // console.log(arr1)


// console.log(arr1.flat())




// const arr1 = [1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]]


// console.log(arr1.flat(5));

// const arr = [ 12 , 12 , 12 , 12 , 13 , 14 , 15 , 16 , 17 , 17 , 18 , 19 , 19]


// function groupedElement(arr){
//     let grouped = {};

//     for (let i = 0 ; i < arr.length ; i++){
//         let value = arr[i];

//         if(grouped[value]){
//             grouped[value].push(value)
//         }else{
//             grouped[value] = [value]
//         }
//     }
//     return grouped

// }

// console.log(groupedElement(arr))





// const data = ['abhimanyuSingh', 'IX-JAT', 'Karan', 123231, 949302, 39939193, 'Ethiad', 'Qatar-Airways', 'Lindit' , true , false , true , true , true , true , true , true , true , true , false , false]
// const result = []
// const size = 3




// function chunkData(data,size){
//     const string = data.filter(item =>typeof item === 'string');
//     const number = data.filter(item => typeof item === 'number');
//     const booleantrue = data.filter(item => typeof item === true);
//     const booleanfalse= data.filter(item => typeof item === 'boolean' && item === false)


//     let rearranged = [...string , ...number , ...booleanfalse]


//     for ( let i = 0 ; i < rearranged.length ; i++){
//         result.push(rearranged.slice(i, i + size))

//     }
//      return result
// };

// console.log(chunkData(data , size));












//=============================== Question on Methods ===========================================

// const data = [ 'admin' , 'member' , 'project_admin']

// const num = [ 12 , 13 , 14 , 15 , 16 , 17]
//syntax
// array.foreach(function(currentvalue , index , array){
// })

// data.forEach((val , index) => {
//     console.log(val)
// });


// data.forEach((value , index , data) => {
//     console.log(value , index , data)
// })

/* 
admin 0 [ 'admin', 'member', 'project_admin' ]
member 1 [ 'admin', 'member', 'project_admin' ]
project_admin 2 [ 'admin', 'member', 'project_admin' ]
*/


// print Square of Each number


// num.forEach((num , index) => {
//     console.log(`The value is Squared By ${num} ** 2 = ` , num ** 2);
// });


// print sum of all number


// let sum = 0

// num.forEach((num) => {
//     return sum += num
// });
// console.log(sum)


// console.log(process.argv)

// console.log(process) // process is the global object provided by node.js that represent the currently running node.js process.

// common use of process 
// get environment variable

// console.log(process.env.PORT)
// console.log(process.env)
// console.log(process.argv)
// const name = process.argv[2]
// console.log(`Hello ${name}`)

// console.log("start")

// process.exit(1)

// console.log("End")

// BEFORE_DSA.pdf


