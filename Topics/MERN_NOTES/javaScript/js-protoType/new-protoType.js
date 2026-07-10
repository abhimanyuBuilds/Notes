/** Phase 2: The new Keyword

Learn exactly what JavaScript does internally.

Topics
Internal steps of new
Object creation
Prototype linking
Calling the constructor
Returning the new object

JavaScript roughly does this:

const obj = {};
obj.__proto__ = User.prototype;
User.call(obj, "Abhi");
return obj;

Understand every line.
 */



// what happen internally ? when javaScript sees 
// const p1 = new User("Abhimanyu" , 121)
// it perform 4 internall steps
// step - 1 creating a new empty object
// step - 2 link the protoType
// obj.__proto__ = Person.prototype
//Step 3 — Call the Constructor
// step 4 return the object
// Finally js return the obejct
// Now 

/**
 * obj

↓

Person.prototype

↓

Object.prototype

↓

null


So

obj can now access everything inside
Person.prototype


Example

Person.prototype.sayHello = function () {
    console.log("Hello");

};


Even though
obj
doesn't have
sayHello
it can still use it because of the prototype chain.
*/

/**Entire internal process
 * internally it roughly does 
 * // step -1 
 * const obj = {}
 * // step - 2
 * Object.setPrototypeOf(obj , Person.prototype)
 * 
 * //step - 3
 * 
 * Person.call(obj , "Abhimanyu" , 24)
 * 
 * // step - 4
 * return obj
 */


// function User(name , age)  {
//     this.name = name;
//     this.age = age;
// User.prototype.loggedIn = function(){
//     console.log(`${this.name} you'r age is ${this.age}`)
// }
// };

// const u1 = new User('Abhimanyu' , 23)
// u1.loggedIn()
// console.log(u1)
// console.log(u1.hasOwnProperty("name"))
// console.log(u1.hasOwnProperty("loggedIn"))

// console.log(u1.__proto__ === u1.prototype) 













// function Car(brand) {
//     this.brand = brand;
// }

// Car.prototype.start = function () {
//     console.log(this.brand + " started");
// };

// const c1 = new Car("BMW");

// console.log(c1.brand); // bmw
// console.log(c1.hasOwnProperty("brand")); // true 
// console.log(c1.hasOwnProperty("start")); // false
// console.log(c1.__proto__ === Car.prototype); // true

// c1.start(); // bmw started