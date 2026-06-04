/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("oolang tea");
// console.log(teaOrder);
/*  Normal function has an ability to use and pass the this  keyword and in browser's console this keyword point to window object of browser */







/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType){
    function confirmOrder(chai){
        return `Order confirmed for chai`;
    }

    confirmOrder();
}

let message = orderTea("oolang");
// console.log(message);






/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
let calculateTotal = (price, quality) => price*quality;

let totalCost = calculateTotal(100,4);
// console.log(totalCost);
/*  Arrow function only use but don't have ability to pass this keyword and it's this point to windows object of browser */




/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
// this is known as higher order function
function processTeaOrder(maketea){ // accepting an function as parameter
    return makeTea("earl grey"); // returning an function
}

let process = processTeaOrder(makeTea);
// console.log(process);








/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
// this is called as clouser property
// what does it is called when and function returning an function and it take parameter and retrned function has access to that parameter without even being passed to that function in javascrpit
function createTeaMaker(name) {
    return function(teaType){
        return `Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker(); // it return an function which was stored in teaMaker and make teaMaker as function. 
// and then we can call that function
console.log(teaMaker("green earl"));