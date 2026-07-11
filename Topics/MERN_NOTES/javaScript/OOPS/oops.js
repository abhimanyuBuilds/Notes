/**OOPS in nothing but a palagdrim where we use to organise our code in around objects 
 * 
 * @SUPER
 * @class 
 * @ENCAPSULATION
 * @ABSTRACTION
 * @INHERITANCE
 * @POLYMORPHISM
 *      |
 * WE CAN ACHIVE POLYMORPHISM WITH DIFFERENT WAYS LIKE 
 *      |
 * METHOD OVER-RIDING
 * METHOD OVER-LOADING
 * 
 * 
 * 
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
            return `${this.childName} yes you can vote you're parents are canadian citizen ${this.CanadianCitizen}\n you have a house too `
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


/**Abstraction
 * @Abstraction

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

/**Encapsulation
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



class calculator  {
    ihve(a , b){
        return a + b 
    }

    ihve(a , b){
        return a - b
    }

    ihve( a , b ){
        return a * b
    }

    ihve( a , b){
        return a / b
    }
}

const v1 = new calculator()
console.log(v1.ihve(12 , 19))
