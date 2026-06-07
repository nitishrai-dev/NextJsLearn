function* numberGenerator(){
    yield 1; //generator 
    yield 2; //generator
    yield 3; //generator
}

let gen = numberGenerator();
let gentwo = numberGenerator();
console.log(gen.next().value); // here next is iterator 
console.log(gen.next().value); // here next is iterator
console.log(gen.next().value); // here next is iterator
console.log(gen.next().value); // here next is iterator
console.log(gen.next().value); // here next is iterator

console.log(gentwo.next().value);
console.log(gentwo.next().value);
console.log(gentwo.next().value);
console.log(gentwo.next().value);