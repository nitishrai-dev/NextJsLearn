let computer = {cpu:12}
let lenevo = {screen:"HD",__proto__:computer};
let tomHardware = {}

// console.log(`computer,`, lenevo.__proto__);
// .__proto__ by this we can axis prototype of any object


let cars = {tyres:4,machine:"engine"};
let Tesla = {
    driver: "AI"
};

// 
Object.setPrototypeOf(Tesla,cars);
console.log(`tesla `, Object.getPrototypeOf(Tesla));


/* so create any object let obj1 which ever you want and to prototype of that object to any other object let obj2 can be done by

1. set key as __proto__:obj2
2. by ofter creating the object use `Object.setPrototypeof(obj1, obj2);
    and to get thsose obj2 properties by Object.getProrotypeOf(obj1);

    and also their is alot of other methods go and check out
*/
