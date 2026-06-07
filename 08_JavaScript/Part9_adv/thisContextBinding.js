const Person = {
    name: "Nitish",
    greet() {
        console.log(`Hi! I'm ${this.name}`);
    },
}

Person.greet();

const gree = Person.greet;
// gree();

const binding = Person.greet.bind({name:'rahul'});
binding();