// Cocept of Set()

    // Set is a built-in method of js which help us to store multiple 
    // type of data type primetive and non premitive and in set the insertion is in order 


    // Set has many methods like 
    /* Methods of set

    Add()
    delete()
    has()
    clear()
    size()
    */

// Newer set compition method
/*
union                  Element in A or B                     A u B
interserction          Element in both A and B               A ∩ B 
difference             Element in A but not B                A \ B
symmetricDifference    Element in A or B but not both        (A \ B ) u  (B \ A)
isSubsetOf             All of A in B?                        A ⊆ B 
*/


// REAL LIFE EXAMPLE ----  where (Set)  can be used in Lakshya+ app where roles are defined
// const allowedRoles = new Set(['admin', 'editor', 'moderator']);

// function canAccess(user) {
//   return allowedRoles.has('admin');
// }

// console.log(canAccess(allowedRoles)) {true}


// const Data =  [...new Set([1221 , 1221 , 13313 ,13313 , 14414 , 14414 ])]

// const Data = new Set(["Apple" , "Orange" , "Kiwi" , "Apple" , "Watermaleon"])
// Data.delete("Apple")
// console.log(Data)
// console.log("Here is the size of set After Deleting:",Data.size)
// Data.clear()
// console.log(Data)


// converting set to arr
// console.log(Array.isArray(Data))
// const Data =  [...new Set([1221 , 1221 , 13313 ,13313 , 14414 , 14414 ])]  // Option-1
// console.log(typeof Data)
// const Data2 = Array.from(new Set([1221 , 1221 , 13313 ,13313 , 14414 , 14414])) // Option-2

// console.log(typeof Data2) //Output=>{Object}its type come object becuase in js after converting it the type of array is still reported as Object
// console.log(Array.isArray(Data2)) // true Niw it will give the Exact match 
// Becuase in J.s Array are special kind of Object
// typeof Only give broad category 

// const Data1 = Array.from(new Set([1221 , 13313 , 55643 , 77646]))

// Find Union of Two Sets

// const union = new Set([...Data , ...Data1])
// const insertion = new Set([...Data , ...Data1])

// const difference = symbol(new Set({...Data , ...Data1}))

// console.log(union)
// console.log(insertion)
// console.log(difference)



// convert set into an array 
// const result = Array.from(new Set([12 , 13 , 14 ,14 , 15 ,16]))
// console.log(typeof result) // becuase in js after converting it Array is special object in js that's why Object coming Because in js array are special kind of Object
// console.log(result)




// let result = Data.size

// Data.clear()
// Data.delete(13313)
// Data.add(7782)
// Data.has(1221)
// console.log(result)

// console.log(Data)

