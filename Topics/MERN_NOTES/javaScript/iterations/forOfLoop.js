// *** FOR-OFLOOP *** 


/* Notes of FOR OF
Difference Between FOR LOOP AND FOR-OF LOOP 

    FOR LOOP                   ||      FOR-OF
    ---------------------------------------------
1. For loop has index          ||      FOR-OF loop does not have index
2. For loop has control        ||      We don't have control in for-of loop
3. don't give value directly   ||      Gives value directly


// for of loop is used to loop through values of iterable data 
// {for of loop don't work directly with objects}

*/

/* For-OF Loop Works with Data Type
.Array 
.String
.Map (Map take two parameter a key and a value) / Map Store key Value
.Set (Set only store value) set has many methods like {add , delete , has , value , clear , size , enteries , }
.NodeLists
*/


// const arr = ["Abhimanyu Singh" , "Shivam Singh" , "Jatin" , 23]

// const str = 'Abhimanyu Singh'

// Map take two parameter as input a key and a value
// const Mapthing = new Map()
// Mapthing.set("Abhimanyu Singh", 12)
// Mapthing.set("Karan" , 13)

// Set()

// const arr = ['Abhimanyu Singh' , 'Jatin Kulkrani' , 'Abhimanyu' , 'IX-JAT'];
// const myset = new Set(arr)

// for ( let item of myset){
//     console.log(item);
// }
/* Output of Set 
Abhimanyu Singh
Jatin Kulkrani
Abhimanyu
IX-JAT
*/

// for(let item of arr){
//     console.log(item)
// }
// Output for Array 
/* 
Abhimanyu Singh
Shivam Singh
Jatin
23
*/

// for ( let item of str){
//     if(item === " "){
//         break
//     }
//     console.log(item)
// }
// Output for String
/* 
A
b
h
i
m
a
n
y
u
*/

// for ( let item of Mapthing){
//     console.log(item)
// }
// Output for Map
// /*
// ['Abhimanyu Singh', 12]
// ['Karan',13]
// */


// for (let item of myset){
//     console.log(item)
// }














































// for in
// map  mao is not iterable

// const arr = [ 12 , 13 , 14 , 15 , 16]

// for(let item of arr){
//     console.log(item)
// // }

// const myObject = {
//     "Name": "Abhimanyu Singh",
//     "Course": "MCA"
// }

// for (let key in myObject){
//     console.log(`${key} and here is the value ${myObject[key]}`)
// }

// const arr = [12 , 13 , 14 , 15]

// for ( let i in arr){
//     console.log(arr[i])
// }






// forEach


// arr.forEach( (val) => {
//     console.log(val)
// })