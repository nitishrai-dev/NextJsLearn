console.log()
function hello(){
    console.log(`say hello!`);
}

// this provide asynchronous nature of javascript
setTimeout(() => {
    console.log('timeout please')
    hello()
}, 5000);

let array = [1,2,3,4,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}