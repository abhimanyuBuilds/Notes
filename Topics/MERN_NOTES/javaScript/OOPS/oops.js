/**OOPS in nothing but a palagdrim where we use to organise our code in around objects 
 * 
 * @SUPER  call the parent constructor
 * it is used to inside a child class to access the parent class
 * it has two main use 
 * call the parent class constructor
 * call the parent class methods
 * always super come first (must call super constructor before calling this)
 * if u call super after this an Error will occour Refrence Error ReferenceError:
 * Must call super constructor before accessing 'this'
 * 
 * 
 * @class 
 * @ENCAPSULATION
 * @ABSTRACTION
 * @INHERITANCE
 * @POLYMORPHISM
 *      |
 * WE CAN ACHIVE POLYMORPHISM WITH DIFFERENT WAYS LIKE 
 *      |
 * METHOD OVER-RIDING
 * 
 * 
 * Method Overriding
class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}

const dog = new Dog();
dog.sound();
 * METHOD OVER-LOADING

/**
 *Method Overloading

In Java:

add(int a, int b)
add(int a, int b, int c)

JavaScript does NOT support this:

class Calculator {
    add(a, b) {
        console.log(a + b);
    }

    add(a, b, c) {
        console.log(a + b + c);
    }
}

Only the last method exists.

const c = new Calculator();

c.add(1, 2, 3); // 6
 */
/**
 * 
 * 

javaScript does not support method overloading 
Solution /// or way to achive 

class Calculator {
    add(...numbers) {
        return numbers.reduce((a, b) => a + b);
    }
}

console.log(new Calculator().add(1, 2));
console.log(new Calculator().add(1, 2, 3, 4));
 
 */

/**Inheritance
 * @inheritance
 * example
 * 
class Parent {
    constructor(name, age, CanadianCitizen , ownHouse) {
        this.name = name;
        this.age = age ;
        this.CanadianCitizen = CanadianCitizen;
        this.ownHouse = ownHouse;
    }
    isCitizen() {
        if (this.CanadianCitizen) {
            return `${this.name} is the canadian citizen`
        } else {
            return `${this.name} is not canadian citizen `
        }
    }
    isHaveHouse(){
        if(this.ownHouse){
            return `${this.ownHouse} have house child can stay`
        }else{
            return `${this.ownHouse} not have house child have to hustle hard to make home`
        }
    }
};

class Child extends Parent {
    constructor(name, age, CanadianCitizen, ownHouse, childName) {
        super(name , age , CanadianCitizen , ownHouse);
        this.childName = childName
    }
    vote(){
        if(this.CanadianCitizen && this.ownHouse){
            return `${this.childName} yes you can vote your parents are canadian citizen ${this.CanadianCitizen}\n you have a house too `
        }else if(this.CanadianCitizen){
            return `${this.childName} you can vote and but you don't have house`
        }else{
            return `${this.childName} you don't have anything please work hard`
        }
    }
    
}


const v1 = new Child(
    "Abhimanyu" , 
    29,
    false , 
    false,
    'yash'
)

console.log(v1)
console.log(v1.isCitizen())
console.log(v1.vote())

 */


/**Abstraction Hide implementation details and shows only necessary Information.
 * @Abstraction

Best example

class CoffeeMachine {
    makeCoffee() {
        this.#boilWater();
        console.log("Coffee Ready");
    }

    #boilWater() {
        console.log("Boiling Water");
    }
}

const coffee = new CoffeeMachine();

coffee.makeCoffee();

User only knows:

coffee.makeCoffee();

They don't know:

How water boils
Temperature
Internal process


------------------------------------------------------------

class Car{
    injectFuel(){
        return `Injected the fuel `
    }

    checkCarAllWainingSign(){
        return `Checked all warning sign`
    }

    startCar(){
        this.injectFuel()
        this.checkCarAllWainingSign()

        console.log("car has started")
   
    }

}


const y1 = new Car()
y1.startCar()



 */

/**Encapsulation Binding data and methods together and restricting direct access.
 * @Encapsulation
 * 
 * 
 * 
class BankAccount{
    #balance = 900 ;

    withdraw(amount){
        if(amount > this.#balance){
            console.log("In-sufficient Balance")
        }
        else{
            this.#balance -= amount

        }
    };

    deposit(amount){
        if(amount <= 100){
            console.log("Please provide an amount greater then 100")
        }else{
        console.log(this.#balance += amount)

        }
    };
    AvailableBalance(){
        console.log(this.#balance)

    }
}



const b1 = new BankAccount()
// b1.withdraw(400)
// b1.AvailableBalance()
b1.deposit(101)

b1.AvailableBalance()

b1.withdraw(1000)


b1.AvailableBalance()

 */



/**Polymorphism with static method
 * @POLYMORPHISM is a way to that in a class we have same method but it behave differently
 * 
 * static method will always call by their class it-self not by their object or other object 
 * 
 * 
 * can we have multiple same name method in class to achive polymorphism
 * No. In JavaScript, you cannot have two methods with the same name in the same class. The later one simply overwrites the earlier one.

Example
class Animal {
    speak() {
        console.log("First");
    }

    speak() {
        console.log("Second");
    }
}

const a = new Animal();
a.speak();
 * 



Then how does polymorphism work?

JavaScript primarily supports runtime polymorphism through method overriding.

Example:

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();

Output

Dog barks
Cat meows

Each class provides its own implementation of the same method.
============================================End of important ===========================








 *  
class bird {
    static fly(){
        return `Hi I'm Flying...`
    }
}

class Penguin {
    fly(){
        return `Hi i can't fly`
    }
}

const v1 = new bird()
const v2 = new Penguin()

console.log(bird.fly())
console.log(v2.fly())

 * 
 */



// class calculator  {
//     ihve(a , b){
//         return a + b 
//     }

//     ihve(a , b){
//         return a - b
//     }

//     ihve( a , b ){
//         return a * b
//     }

//     ihve( a , b){
//         return a / b
//     }
// }

// const v1 = new calculator()
// console.log(v1.ihve(12 , 19))














/**
 * Q - 1 Is javaScript is Truly Object-oriented?
 * 
 * Solution :::   javaScript is protoType based object oriented language..
 */



/** Q - 14. What Are Static Methods?
 Static Method that belongs to the class , not instances

Static methods belong to the class itself, not to the object.

class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(10, 20));



❌ this will fail 
const m = new MathUtil();

m.add(1, 2);

m/add 
 */


/**What is this keyword..
 * this refers to the object that is currently executing the code.
 * 
 */