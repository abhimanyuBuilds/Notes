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
 */


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






