// Number
// In js every thing is object but primitive data types are not objects. They are immutable and do not have properties or methods. However, when we try to access a property or method on a primitive value, JavaScript automatically wraps it in an object, allowing us to use methods like .toString() or .valueOf().


let balance = 120
let anotherBalance = new Number(150)
console.log(balance) // number
console.log(anotherBalance.valueOf()) // object


let isActive = true
let anotherIsActive = new Boolean(false)
console.log(isActive) // boolean
console.log(anotherIsActive.valueOf()) // object    

// null and undefined
let user
console.log(user) // undefined
let admin = null
console.log(admin) // null


// String

let myString = "Hello";
let myStringOne = "Hole";
let username = 'nitish';
let oldGreet = username + "Rai";
console.log(oldGreet) // nitishRai

let greetMessage = `Hello ${username}`
console.log(greetMessage) // Hello nitish


// Symbol
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 == sym2) // false