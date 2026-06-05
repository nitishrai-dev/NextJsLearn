// this all are the constructor / blue print
function Person(name, age){ // this is constructore function
    this.name = name;
    this.age = age;
}

function Car(make,model){
    this.make = make;
    this.model = model;
}

// object
let myCar = new Car("Toyota","Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("Lemon Tea");
// console.log(lemonTea.describe());



function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Lebrador");
// console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea");
// let coffee = Drink("coffee");


function Class(level){
    this.level = level;
}
Class.prototype.work = function(wo){
    return `let do ${wo}`;
}

let twlth = new Class(12);
console.log(twlth.work("chal"));
