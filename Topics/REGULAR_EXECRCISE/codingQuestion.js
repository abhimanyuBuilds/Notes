// finding max value from an array



// Question 1 

// const arr = [12,14,45,776,876,123,765]

// let maxValue = arr[0];

// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i]> maxValue){
//     maxValue = arr[i]
//     }
// }

// console.log(maxValue);




//  Question 2 finding minimum value...


// const arr2 = [10,9,8,7,6,2,1]

// let minValue = arr2[0]

// for(let i = 0 ; i < arr2.length ; i++){
//     if(arr2[i]< minValue){
//         minValue = arr2[i]
//     }
// }
// console.log(minValue)




//  my question is that i think that when we take 10 as starting value to compare it means always check with 10 
// but i'm wrong in this we goes to each array and then it change its memory from 10 
// to when it have min value like if he goes to 9 he will compare 9 to 7 like 7 < 9 then next 5 < 7 not like 9 < 10   6 < 10



/*

Now the loop runs:

i = 0 → 10 < 10 ❌ (no change)
i = 1 → 9 < 10 ✅ → minValue = 9
i = 2 → 8 < 9 ✅ → minValue = 8
i = 3 → 7 < 8 ✅ → minValue = 7
i = 4 → 6 < 7 ✅ → minValue = 6
i = 5 → 2 < 6 ✅ → minValue = 2
i = 6 → 1 < 2 ✅ → minValue = 1



*/




// finding vowels in array 

//  Question 3


// const arr = ['Abhimanyu Singh', 'Shivam Singh', 'Aditya Chaudhary']


// let vowels = '';

// for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].toLowerCase()
//     for (let j = 0; j < name.length; j++) {
//         if ('aeiou'.includes(name[j])) {
//             vowels += name[j];
//         }
//     }
// }

// console.log(vowels)


// Question 4

// create a n number of table using loop 


// const tableOf = 7;
// console.log(`Printing the table of ${tableOf}`)

// for (let i = 1; i <= 10; i++) {
//     let result = tableOf * i
//     console.log(`${tableOf} * ${i} = ${result}`) 
// }



// Question 5 

// checking a palindrome 


// const Nums = 121-121-121-121;

// let reverse = '';

// for(let i = Nums.length; i <= 0 ; i--){
//     reverse += num[i]

// }
// if(Nums === reverse){
//     console.log("Yes it is a palindrome")
// }else{
//     console.log("No it's Not")
// }

// console.log(reverse)




// --------------------------------------------------  QUESTION 6 ------------------------------

// find the sum of n numbers 


// let total=0;
// for (let i = 0; i <= 15 ; i++){
//     total = total + i
// }

// console.log(total)


// see the flow 

/*i	previous total	calculation	new total
  0	       0	     0 + 0	      0
  1	       0	     0 + 1	      1
  2	       1	     1 + 2	      3


3	3	3 + 3	6
4	6	6 + 4	10
...	...	...	...
15	105	105 + 15	120

*/
// ----------------------------------------- QUESTION = 7 -------------------------------------- 

//  Decrement table of n number 


// let n = 8 ;
// console.log(`Printing the table of ${n}`)
// for (let i = 10; i >= 1 ; i--){
//     let result = n * i
//     console.log(` ${n} * ${i} = ${result}`)
// };
// console.log(results

// ------------------------------------------------- QUESTION = 8 ------------------------------------------------------------

// working with while loop 


// in while loop we generally initialization work before

// let total = 0 ;
// let i = 1 ; 

// while(i <= 150){
//     console.log('i',i)
//     i++
// }


// let i = 0 ;

// while(i<= 150){
//     total = i * 150
//     console.log(total)
//     i++
// }


// let n = 8
// let i = 1;
// console.log(`Table of ${n}`)
// while(i<= 10){
//     tableOf = n * i 
//     console.log(`${n} * ${i} = ${tableOf}`)
//     i++
// }

// let str = 'AbhimanyuSingh'
// let i = 0;
// let vowels = '';
// while (i < str.length) {
//     let char = str[i].toLowerCase();

//     if ('aeiou'.includes(char)) {
//         vowels += char;
//         console.log(char)
//     }
//     i++
// }

// console.log("All Vowels", vowels);


// -------------------------- QUESTION = 8 -------------------------------------------------------
//  Reverse a String using function 



// console.log('Reversing String please wait')


// let str = 'Abhimanyu'
// function reversing(str) {
//     let reverse = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i]

//     }
//     return reverse;

// }
// console.log("Input:", str)
// console.log("Output:", reversing(str))


//  ------------------------------------------- QUESTION = 9 -----------------------------------
// check Palindrome with function 


// let str = "madam";
// console.log("Checking Palindrome.. please wait ")
// function checkPalindrome(str) {
//     let reversestr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversestr += str[i]
//     }

//     if (str === reversestr) {
//         console.log("Yes,it is Palindrome")
//         console.log(`Printing Palindrome ${reversestr}`)
//     }else{
//         console.log("No, it not Palindrome")
//         console.log(`Printing String and check it out yourself ${reversestr}`)
//     }
// }

// checkPalindrome(str)

// ------------------------------------------ QUESTION = 10 ----------------------------------------------

// Find Duplicate Elements in Array

// const arr = [12, 12, 13, 13, 14, 14, 15]

// function duplicateFind(arr) {
//     let uniqueValue = [];
//     let duplicatesValues = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueValue.includes(arr[i])) {
//             duplicatesValues.push(arr[i])

//         }else {
//             uniqueValue.push(arr[i])
//         }

//     }
//     console.log(uniqueValue)
//     console.log(duplicatesValues)
// }

// duplicateFind(arr)
// console.log(duplicateFind(arr))


// ------------------------------------------- QUESTION = 11 -------------------------------------------

// Flatten Array (without flat()) but this i'll only give  shallow level flattering level to use in big flatteren array use recurssion      

// Input: [1, [2, [3, 4]], 5]
// Output: [1,2,3,4,5]

// const arr = [1,2,3,[4,5],6,7,[12,14],[15,15,[16,17]]]
// let result = [];

// for(let item of arr){
//     if(Array.isArray(item)){
//         result = result.concat(item)
//     }else{
//         result.push(item)
//     }
// }

// console.log(result)

//  ------------------------------------------------- QUESTION 12 ----------------------------------------

// creating a recurssion function for flatten an array 
// “I’ll use recursion to handle infinite nesting depth”
// Mention Array.isArray() check

// Recursion is a technique where a function solves a problem by calling itself on smaller inputs until a base condition is met.”

// const arr = [1,2,3,[4,5],6,7,[12,14],[15,15,[16,17,[18,19,[20,21]]]]]
// function flattenArray(arr){
//     let result = [];
//     for(let item of arr){
//         if(Array.isArray(item)){
//             result = result.concat(flattenArray(item))
//         }else{
//             result.push(item)
//         }
//     }
//     return result
// }

// console.log(flattenArray(arr))

// let result = Object(arr)
// console.log(result)
// const [a,b,c,d,e,f,g] = arr
// let arr2 = []
// let arr3 = []
// let result1 = arr.slice(3,4)
// let result = arr.splice(0,6)
// arr3.push(result1)
// arr2.push(result)

// console.log(arr2)
// console.log(arr3)



//  ----------------------------------- QUESTION = 13 ------------------------------------------

//  Find Largest Number in Array with for of 
// const arr = [10 , 20 , 30 , 40 , 100]

// let highestNum = arr[0];

// for (const i of arr){
//   if(i > highestNum){
//     highestNum = i
//   }
// }

// console.log(highestNum)

//  finding max value with out for of 


// const arr = [12,13,14, 15,16,1000]

// let maxValue = arr[0]

// for (let i = 0 ; i < arr.length ; i++){
//   if(arr[i] > maxValue){
//     maxValue = arr[i]
//   }
// }

// console.log(maxValue)




// IN for of it does not give index thats y we face problem 

// with for in also


// const arr = [122,133,144,155,166,177,199]

// let maxValue = arr[0];

// for (let i in arr){
//   if(arr[i] > maxValue){
//     maxValue = arr[i]
//   }
// }

// console.log(maxValue

// )

// Small Value find 

// const arr = [122,133,144,155,166,2000]

// let minValue = arr[0]

// for (let i in arr){
//   if(arr[i]< minValue){
//     minValue = arr[i]
//   }
// }
// console.log(minValue)



//  ------------------------------------- QUESTION = 14 ------------------------------------------

// Frequency Counter



// const arr = ["a", "b", "c", "d", "e", "f", 12, 12, 12, 12, "a", "a", "a", "b", "b", "c", "c", "c", "c", "e", "e"]

// let count = {};




// for (let i = 0; i < arr.length; i++) {
//   let char = arr[i];
//   if (count[char]) {
//     count[char]++;
//   } else {
//     count[char]=1;
//   }

// }
// console.log(count)


// sort the arrary all zeroes should be in begining




// unsorted_array = [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0]

// let sorted_array_Zero = [];
// let sorted_array_one = [];

// for (let item in unsorted_array) {
//     if (item = 0) {
//         sorted_array_Zero.push(unsorted_array)
//     } else if (item === 1) {
//         sorted_array_one.push(unsorted_array)
//     }

// }
// console.log(sorted_array_Zero)


// if(item.includes(0)){
//     sorted_array_Zero.push(unsorted_array)
// }else{
//     sorted_array_one.push(unsorted_array)
// }





// let result = unsorted_array.sort()
// console.log(result)


// will work on this part soon 

// let sort_array = []    


// for (const item in unsorted_array){

// }

// --------------------------------------------------------------------   


//  frequency check with reduce and for loop 

// const fruitNames = ['Banana', 'Banana', 'Apple', 'Apple', 'Orange', 'Orange', 'Kiwi', 'Kiwi','Pineapple']


// const frequency = fruitNames.reduce(function (acc , curr){
//     acc[curr] = (acc[curr] || 0) + 1 
//     return acc
// },{})

// console.log(frequency)



// with for loop

// let count = {}

// for (let i = 0 ; i < fruitNames.length ; i++){
//     let fruit = fruitNames[i];

//     if(count[fruit]){
//         count[fruit]++
//     }else{
//         count[fruit]=1
//     }
// }

// console.log(count)



// -------------------------------------- QUESTION = 15 ----------------------------------------- 


//  Now this time you will see a code with setTimeout and setInterval , clearInterval with best questions 



// const fruitNames = ['Banana', 'Banana', 'Apple', 'Apple', 'Orange', 'Orange', 'Kiwi', 'Kiwi', 'Pineapple']

// // let fruitlength = fruitNames.length
// // console.log(fruitlength)



// function frequencyCount(fruitNames) {
//   let count = {};

//   return new Promise((resolve) => {
//     for (let i = 0; i < fruitNames.length; i++) {
//       let fruit = fruitNames[i]

//       setTimeout(() => {
//         count[fruit] = (count[fruit] || 0) + 1

//         if (i === fruitNames.length - 1) {
//           resolve(count)
//         }
//       }, 2000)
//     }
//   })
// }


// frequencyCount(fruitNames).then(res=> console.log(res))


// why we use if(i === fruitNames.length -1 )
// Index vs Length

// concept                                value

// length(total items)                      9
// index                                    0-8

// index always start from 0
// so last position is always one less than total count

// count is length of element their are 9 element in the array
// because in index we start from 0-8 and when we find the legth of array it start from 1-9 thasty we have to do -1


// for(let i = 0 ; i < fruitNames.length ; i++){
// let fruit = fruitNames[i]

// console.log('index',i,"fruit",fruit)ss


// if(i === fruitNames.length-1){
// console.log("The last element",fruit)
//   console.log('Last Element ',fruitNames[i])
//   console.log(i)
// }
// }


// console.log(fruitNames)












//   for (let i = 0; i < fruitNames.length; i++) {
//     let fruit = fruitNames[i]
//     setTimeout((frequencyCount) => {
//       if (count[fruit]) {
//         count[fruit]++
//       } else {
//         count[fruit] = 1
//       }
//     }, 2000)

//   }
//   return count
// }

// console.log(frequencyCount(fruitNames))




//  max min find
// const data = [0.1,12,13,14,15, 2990 , 3000 , 3500 , 4500 , 5400 , 2300 , 7633 , 99101, 199392.9, 199392.7]


// class maxMinFind {

//   max(){
//     let maxValue = data[0];
//     for(let i = 0 ; i < data.length ; i++){
//       if(data[i]> maxValue){
//         maxValue = data[i]
//       }
//     }
//     return maxValue
//   }
//   min(){
//     let minValue = data[0]
//     for(let j = 0 ; j < data.length ; j++){
//       if(data[j]< minValue){
//         minValue = data[j]
//       }
//     }
//     return minValue
//   }
// }

// const result = new maxMinFind()
// console.log(typeof result , maxMinFind)
// console.log("MAX:", result.max())
// console.log("MIN:",result.min())




// reverse & palindrome check

// const str = "madam"
// class reverseStr {

//   reverse(){
//     let re = "";
//     for(let i = str.length -1 ; i >= 0 ; i--){
//       re += str[i]
//     }
//     return re
//   }

//   PalindromeCheck(){
//     if(str === this.reverse()){
//       console.log(`Yes it is palindrome ${str}`)
//     }else{
//       console.log(`No it is not palindrome ${str}`)
//     }
//   }
// }
// const result = new reverseStr();
// console.log("Here is your reverse string:",result.reverse())
// result.PalindromeCheck()

// console.log(result.reverse())
// console.log(result.PalindromeCheck())






// frequency count



// const arr = ["Apple" , "Orange" ,"Orange" ,"Kaka" , "Kaka" ,"IX-JAT" , "SUB-HYD" , "Kiwi" , "Kiwi"]


// class frequencyCheck{
//   findingFrequency(){
//     let count = {}
//     for(let i = 0 ; i < arr.length; i++){
//       let char = arr[i];
//       if(count[char]){     // Bracket Notation (Dynamic Property Access) It is used to access object properties dynamically.
//         count[char]++
//       }else{
//         count[char]=1
//       }
//     }
//     return count
//   }
// }


// const result = new frequencyCheck()

// console.log(result.findingFrequency())








// Duplicate Find without methods

// const arr = [12 , 12 , 13 , 13 , 13 , 14 , 14 , 14 , 16 , 17 , 18]
// let uniquearr = [];


// for(let i = 0 ; i < arr.length ; i ++){
//   let isDuplicate = false;

// for(let j = 0; j < arr.length ; j++){
//   if(arr[i] === uniquearr[j]){
//     isDuplicate = true
//     break;
//   }
// }

//   if(!isDuplicate){
//     uniquearr.push(arr[i])
//   }
// }


// console.log(uniquearr)


/*

// finding 3rd largest value
const arr = [0 , 1 , 2]
// const arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]

class findingThirdLargestValue{

  firstLargest(){
    let firstValue = arr[0];
    for (let i = 0 ; i < arr.length; i++){
      if(arr[i] > firstValue ){
        firstValue = arr[i]
      }
    }
    return firstValue
  }

  secondLargest(){
    let first = this.firstLargest()
    let second = -Infinity
    for(let j = 0 ; j < arr.length; j++){
      if(arr[j] > second && arr[j] !== first){
        second = arr[j]
      }
    }
    return second
  }

  thirdLargest(){
    let first = this.firstLargest()
    let second = this.secondLargest();
    let third = -Infinity
    for(let k = 0 ; k < arr.length; k++){
      if(arr[k] > third && arr[k] !== second && arr[k] !== first){
        third = arr[k]
      }
    }
    return third
  }
}

const result = new findingThirdLargestValue()

console.log("Second largest:",result.secondLargest())
console.log("first largest:",result.firstLargest())
console.log("third largest:",result.thirdLargest())
*/










// const arr = ['A' , 'B' , 'C' , 'D' , 'E' , 'A' , 'B' , 'C' , 'C' , 'D' , 12 ,12 ,12 ,13 ,13]

// let uniqueArr = [];


// for(let i = 0 ; i < arr.length ; i++){
//   let isDuplicate = false

//   for(let j = 0 ; j < arr.length ; j++){
//     if(arr[i] === uniqueArr[j]){
//       isDuplicate = true
//       break;
//     }
//   }
//   if(!isDuplicate){
//     uniqueArr.push(arr[i])
//   }
// }

// console.log(uniqueArr)


// const arr = [12, 12, 13, 13, 14, 14, 15, 15, 17, 16, 17, 18, 18];
// let uniqueArr = [];


// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === uniqueArr[j]) {
//       isDuplicate = true
//       break;
//     }
//   }
//   if (!isDuplicate) {
//     uniqueArr.push(arr[i])
//   }
//   uniqueArr.sort((a, b) => a - b)
// }


// console.log("Unique Array are:", uniqueArr)








// find the target value of two sum 




// const data = [12, 13, 14, 15, 88, 99]
// let target = 111;

// function twoSum(arr, targetValue) {
//   setTimeout(()=>{
//     console.log("Yes i found it please wait")
//   },1000)
//   setTimeout(() => {
//     let found = false;
//     for (let i = 0; i < arr.length; i++) {
//       for (let k = i + 1 ; k < arr.length; k++) {
//         if (arr[i] + arr[k] === target) {
//           console.log("we found the number which are after added gives target value", arr[i], "and", arr[k]);
//           found = true
//           break 
//         }
//       }
//       if(!found){
//         console.log("No pair")
//       }
//     }
//   }, 2000)
//   // return twoSum
// }

// twoSum( data , target)