function outer(){
    let counter = 2;

    return function inner(){
        counter++;
        return counter;
    }
}

let inn = outer();
for (let index = 0; index < 10; index++) {
    console.log(inn());
}
