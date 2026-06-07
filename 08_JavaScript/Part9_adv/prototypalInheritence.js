function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`greeting from ${this.name}`);
}

let rahul = new Person("rahul");
rahul.greet()
// console.log();