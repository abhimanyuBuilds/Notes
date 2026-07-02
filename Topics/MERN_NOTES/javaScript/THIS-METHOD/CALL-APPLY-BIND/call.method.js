/**
 *@call  invoke the function immediately and allow you to set the value of `this`
 * @syntax
 * function.call(thisArgs , arg1 , arg2 , arg3)
 * thisArgs  Object you want this to point to
 * Remaining argumnets are passed individually
 * 
 *  */ 

//Example 



// const person = {
//     name: 'Abhimanyu Singh',
//     course: 'MCA' ,
//     greet: (city , phoneNo) => {
//        console.log(
//             `"Hello" ${this.name} your course is ${this.course} \n and you're from ${city} and your phoneNumber is:${phoneNo}`
//     ); 
//     }
// }
/**
 * @In this the error comes becuase arrow function can't use this it alwasy borrow from its surroundings 
 * @However call tries to change this but can't greet.call(person , "Delhi" , "+91-7983536144")
 * then comes this error RefrenceError greet is not defined 
 * @ArrorFunction completely ignore 
 * @call
 * @apply
 * @bind
 * However you want to put call apply bind with object method then here is the example
 * @RULE Normal function `this` depends on how the function is called
 * Arrow function `this` depends on where the function is created
 * 
 * @Arrow function can be used in 
 * map() filter() reduce()
 * promise callbacks ( then catch)
 *  setTimeout / setInterval
 * 
 * Nested function that should inherit the outer this
 * 
 *  
 */




// const obj = { 
//     name: 'Abhimanyu' , 
//     course: "B-tech",

//     greet(city , country){
//         console.log(
//              `"Hello" ${this.name} your course is ${this.course} \n and you're from ${city} and your phoneNumber is:${country}`

//         )
//     }

// }

// obj.greet.call(obj , "Meerut" , "Canada")




/**
 * With timming function setTimeout/ setInterval() and many 
 * we use arrow function becuase arrow function inherit this from surroundigs but
 *  we use first normal function and then inside settimeout and after that arrow function..
 * 
 * in timing functions we can also use normal function to inherit this with the help of bind 
 */

// Example Can we use a normal function and still access this? with setTimeout

// Yes. There are several ways.

// Method 1: bind() ✅

const obj = {
    name: 'Abhimanyu',

    greet(){
        setTimeout(function() {
            console.log(`Hello ${this.name}`)
        }.bind(this) , 1000)
    }
};

obj.greet()





// function greet(city , phoneNo){
//     console.log(
//             `"Hello" ${this.name} your course is ${this.course} \n and you're from ${city} and your phoneNumber is:${phoneNo}`
//     );
// }


// greet.call(person , "Delhi" , "+91-7983536144")



