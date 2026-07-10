/**
 * @CONSTRUCTOR FUNCTION
 * what is constructor function
 * A constructor function is simply a normal function that is used to create a multiple 
 * objects having the same structure
 * 
 * @Naming convention constructor names start with capital letter PascalCase
 * @creating object with new 
 * @this refer to inside constructor
 * @Properties are initialized
 * @Returning value from constructor
 */


// ** instead of writting 


// const user = {
//     name : 'Abhimanyu' , 
//     age: 24 ,
//     login(){
//         console.log("Logged-In")
//     }
// };

// const user3 = { 
//     name: 'Shivam' , 
//     age: 25 , 
//     login(){
//         console.log("Sign-up")
//     }
// }

// This repeat codes 
// constructor function solve this

// function User(name , age ){
//     this.name = name ;
//     this.age = age ;


//    this.login = function (){
//         console.log("Logged-In")
//     }
// }

// const u1 = new User("Abhi" , 23)
// const v1 = new User("Shiv" , 25)
// const y1 = new User("rish" , 27)
// v1.login()
// u1.login()
// console.log(u1)




// function User(name) {
//     console.log(this)
//     this.name = name
// }

// const user = new User("Abhimanyu")
// const user2 = new User("Sagar")

// console.log(user)
// console.log(user2)


/** when javaScript see new User("Abhimanyu") it automatically turn a new empty object
 * step 2 sets (this) to point to that empty object
 * this 
 *  |
 * empty object {}
 * 
 * step 3 
 * Runs the constructor 
 * this.name = "Abhimanyu"
 * 
 * object become {
 * name: 'Abhimanyu'
 * }
 * 
 * 
 * step 4 Links to the object to 
 * User.prototype 
 * we'll learn prototype later
 * 
 * 
 * step - 5 
 * 
 * returns the object automatically 
 * so 
 * const user = new User("Abhimanyu")
 * 
 * become 
 * 
 * const user = {
 * name = "Abhimanyu"
 * }
 * 
 * Visualization 
 * 
 * new User("Abhimanyu")

↓

Create {}

↓

this = {}

↓

this.name = "Abhimanyu"

↓

Return object

↓

user



Example 


function Car(brand){
this.branc = brand
}
const b1 = new Car("LC")
console.log(b1s)
 */



/**What does this refer to inside constructor
 * inside constructor
 * this refre to the new empty object   
 * 
 * 
 * function User (name) {
 * console.log(this)
 * this.name = name
 * }
 * 
 * const user = new User("Abhimanyu")
 * const user1 = new User("Raj")

 * console.log(user) 
console.log(user1)
 */


// function User(name) {
//     console.log(this)
//     this.name = name
// }
// const user = new User("Abhimanyu")
// const user1 = new User("Raj")

// console.log(user)
// console.log(user1)


/** Output
 * 
User {}
User {}
User { name: 'Abhimanyu' }
User { name: 'Raj' }
 */

/** Properties are Initialized
 */


// function laptop(brand , model , maker  ){
//     this.brand = brand ;
//     this.model = model;
//     this.maker = maker;
// }

// const u1 = new laptop("Acer" , "SwiftGo14AI" , "Acer-us")
// const u2 = new laptop("mac" , "Airpro" , "Apple")
// console.log(u1)
// console.log(u2)

/**
Internally

this.brand = "Dell"

this.ram = 16

this.storage = 512
 */





/**Returning value from constructor
 * normally
 * function User(name){
 * this.name = name ;
 * }
 * 
 * 
 * javaScript return 
 *          this
 * automatically   
 * 
 * 
 * returning premitive is ignore
 * returning string is ignore
 * returning boolean ignored
 * 
 * returned object 
 * 
 * function User (name){
 * this.name = name 
 * 
 * return { 
 *      city :  "Delhi"
 * }
 * }
 * const u2  = new User("Abhimanyu")  
 */

//   function User (name){
//   this.name = name 
  
//   return { 
//        city :  "Delhi"
//   }
//   }
//   const u2  = new User("Abhimanyu")  
//   console.log(u2)


/***
*Rule:
Return Value	Result
Number	        Ignored
String	        Ignored
Boolean	        Ignored
null	        Ignored
undefined	    Ignored
Object	        Returned instead of this

*/


/**comparision Regular Function || constructor function 
 * | Feature                  | Regular Function           | Constructor Function    |
| ------------------------ | -------------------------- | ----------------------- |
| Called with `new`        | ❌ Usually no               | ✅ Yes                   |
| Returns object           | ❌ Usually no               | ✅ Automatically         |
| Uses `this`              | Depends on how it's called | Refers to new object    |
| Creates multiple objects | ❌                          | ✅                       |
| Naming                   | camelCase                  | PascalCase              |
| Main purpose             | Perform work               | Create object instances |

 */




// Question 
// Create a constructor BankAccount(owner, balance) with a method deposit(amount) that updates the balance



// function BankAccount(owner , balance){
//     this.balance = balance
//     this.deposit =  function (amount){
//         this.balance += amount
//     }
// }

// const user = new BankAccount("Abhimanyu" , 3000)
// user.deposit(1211);
// console.log(user)
// console.log(user)


//Create a constructor Employee(name, salary) with a method increment(percent).


// function Employee(name , salary){
//     this.name = name;
//     this.salary = salary;

//     this.increment  = function(percent){
//         let incrementAmount = this.salary * percent / 100
//         this.salary += incrementAmount

//     } 
// }


// const u = new Employee("xnxx" , 35000)
// const u1 = new Employee("xxxx" , 35000)

// u.increment(15)
// u1.increment(50)
// console.log(u)
// console.log(u1)



//Add a withdraw(amount) method that prevents withdrawing more than the available balance.

// function Withdraw(name,balance){
//     this.name = name
//     this.balance = balance

//     this.nikaldoPaise = function ( amount){
//         this.balance -= amount
//     }
// }

// const iioio = Withdraw("Abhimanyu" , 10000000000000)
// iioio.nikaldoPaise(1)
// console.log(iioio)




/**Phase 3: Prototype
Topics
What is prototype?
Solution---> every every normal function in js automatically gets a property called prototypes



function Person(){}

console.log(Person.prototype);


//Output 

{
constructor: Person
}

js will create this object automatically


Function

Person
   │
   │ has
   ▼

prototype

{
   constructor: Person
}


This object is shared by every object created using new Person();
const arr = [];

console.log(arr.__proto__);
console.log(Array.prototype);

Why do we use prototype?
Memory optimization
Shared methods
Prototype object
Practice:
 */
