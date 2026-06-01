// const fix the memory refernce for the object and we can change the properties of the object but we cannot reassign the object to a new value.

// and const is used to declare a variable that cannot be reassigned. It is a read-only reference to a value. However, if the value is an object or an array, the properties of the object or the elements of the array can be modified.
const username = {
    firstname: "Nitish", 
    lastname: "Rai", 
    isLoggedin:true,
    1:2
};
username.firstname = "Rahul";
username.lastname = "Sharma";
console.log(username["firstname"], username["lastname"], username[1]); // Output: Rahul Sharma 2
console.table(username);
console.log(typeof username); // Output: object

let today = new Date();
console.log(today.getUTCDate()); // Output: current date and time




// Array
let heros = ['supername',"batman", "spiderman", "ironman", 234, true, null, undefined];

console.table(heros[1]); // Output: batman
console.log(typeof heros)




// // type conversion
let isValue = true
console.log("1"+1); // Output: 11true
console.log(isValue+1); // Output: 2
