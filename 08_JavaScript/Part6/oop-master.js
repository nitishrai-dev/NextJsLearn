let car ={
    make:"toyota",
    model:"Camry",
    year:2020,

    start: function (){
        return `let's goo ${this.make} in year ${this.year}`;
    }
}
// console.log(car.start())




// probelem with this is we have to create many copy for new object
// and solved by construtor function

function Person(name, age){
    this.name = name;
    this.age = age;
    this.speak = function(){
        return `hello`;
    }
}

let john = new Person("John Doe",20);
// console.log(john.speak())

function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} make a sound`;
}
Animal.prototype.age = 19;

Array.prototype.nitish = function(){
    return `${this} make a function`
}
let myArray = [12,3,43];
// console.log(myArray.nitish());




// object

class Vehicle{
    constructor(make='toyota',model='Corolla'){
        this.make = make;
        this.model=model;
    }

    // method
    start(){
        return `${this.model} is a car from ${this.model}`
    }
}

// inheritence
class Car extends Vehicle{
    drive(){
        return `${this.make} : this is an inheritence example`;
    }
}
let myCar = new Car("THis","that");
// console.log(myCar.model);


// Encapsulation - 
// restrict direct access to data object 

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}
let account = new BankAccount();
// console.log(account.getBalance());
// console.log(account.deposit(190));



// Abstraction-
// hiding of implementation complexity from user

class CoffeeMachine{
    start(){
        // call DB
        // filter value
        return `Starting the machine`;
    }

    brewCoffee(){
        return `Brewing of coffee`;
    }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.brewCoffee());


// Polymorphismo
// many forms can be achieved by overriding


class Calculator{
    static add(a,b){
        return a+b;
    }
}

// let miniCal = new Calculator()
// console.log(minCal.add(10,11));

console.log(Calculator.add(10,11));