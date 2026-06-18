 
/*Array Methods
| Method          | Purpose                   |
| --------------- | ------------------------- |
| `push()`        | Add element at end        |
| `pop()`         | Remove element from end   |
| `shift()`       | Remove element from start |
| `unshift()`     | Add element at start      |
| `length`        | Get array size            |
| `at()`          | Access element by index   |
| `includes()`    | Check if value exists     |
| `indexOf()`     | Find first index          |
| `lastIndexOf()` | Find last index           |
| `join()`        | Convert array to string   |
| `reverse()`     | Reverse array             |
| `sort()`        | Sort array                |
| `slice()`       | Copy part of array        |
| `splice()`      | Add/remove elements       |
| `concat()`      | Merge arrays              |

==================================================
Phase 2: Iteration Methods (Very Important)
These appear in interviews and coding rounds. 🌐 currently
===================================================

| Method        | Purpose                       |
| ------------- | ----------------------------- |
| `forEach()`   | Loop through array            |
| `map()`       | Transform data                |
| `filter()`    | Keep matching elements        |
| `find()`      | Return first matching element |
| `findIndex()` | Return index of first match   |
| `some()`      | At least one match            |
| `every()`     | All must match                |
| `reduce()`    | Accumulate values             |
=================================================

Example 

const nums = [1,2,3,4]

const doubled = nums.map(n => n * 2)

const even = nums.filter(n => n % 2 === 0)

const sum = nums.reduce((acc, curr) => acc + curr, 0)


Phase 3: Important for DSA

These are heavily used in coding interviews.



| Method         | Purpose               |
| -------------- | --------------------- |
| `fill()`       | Fill array with value |
| `Array.from()` | Create array          |
| `Array.of()`   | Create array          |
| `flat()`       | Flatten nested array  |
| `flatMap()`    | Map + flatten         |
| `entries()`    | Index-value pairs     |
| `keys()`       | Get indexes           |
| `values()`     | Get values            |

Example 
const arr = Array.from({length:5}, (_,i)=>i)

console.log(arr)
// [0,1,2,3,4]

Phase 4: Advanced but Useful
| Method         | Purpose                  |
| -------------- | ------------------------ |
| `copyWithin()` | Copy values within array |
| `toSorted()`   | Non-mutating sort        |
| `toReversed()` | Non-mutating reverse     |
| `toSpliced()`  | Non-mutating splice      |
| `with()`       | Replace value by index   |

Example 


const arr = [3,1,2]

const sorted = arr.toSorted()

console.log(sorted) // [1,2,3]
console.log(arr)    // [3,1,2]

Phase 5: Array Static Methods


| Method            | Purpose        |
| ----------------- | -------------- |
| `Array.isArray()` | Check if array |
| `Array.from()`    | Create array   |
| `Array.of()`      | Create array   |

Example 


Array.isArray([1,2,3]) // true
Array.isArray({})      // false


// Absolute Minimum Before DSA

If you're eager to start DSA quickly, master these first:

push
pop
shift
unshift
length
slice
splice
sort
reverse
forEach
map
filter
find
includes
indexOf
reduce
Array.from

These 17 methods cover roughly 90% of what you'll use in DSA problems and Node.js interviews.


*/



// =========================================== ForEach =================================================

 /* Notes for ForEach

 forEach does not return a new array if you want new array then use map instead




 */



// const data = [ 'Apple'  , 'Orange' , 'Kiwi']

// const Data = [ 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19]

// Print All Element


// data.forEach((arr)=> {
//     console.log(arr)
// });

//  Square of Each 

// Data.forEach((arr) => {
//     console.log(`Here is the Square of Each Element ${arr} ** 2 =`, arr ** 2)
// });


// Sum of All Element

// let sum = 0;
// Data.forEach((arr) => {
//     sum += arr
// });

// console.log(sum)



//Count Total Element


const arr = [ 12 , 45 , 56 , 67] // ⁉️


// arr.forEach((value , index) => {
//     console.log(`Here is the count`, index)
// })


// find largest number

// count Even numbers

// const nums = [ 1 , 2 , 3 , 4 , 5 , 6, 7 ,8]

// const words = ["cat", "elephant", "dog", "tiger", "lion"];

// words.forEach((arr) => {✅
//     if( arr.length > 4){
//         console.log(arr)
//     }
// });



/* 
Create a New Array Manually

Normally we'd use map(), but do it with forEach().

const nums = [1, 2, 3, 4];

Create:

[2, 4, 6, 8]

using forEach() and push().
*/

// const nums = [1, 2, 3, 4];

// let array = [ ];


// nums.forEach((arr) => {
//     let result = arr ** 2
//     array.push(result)

// })

// console.log(array)




