"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Studernts = {
    name: "surafel",
    id: "23d",
    age: 24,
};
console.log("==================================== this is an object");
const results = (() => {
    console.log('====================================');
    console.log(Studernts);
    console.log('====================================');
})();
const name = (name) => {
    return `Hello, ${name}!`;
};
var res = name("welcome ");
console.log('====================================');
console.log(name);
console.log('====================================');
class Employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const employee1 = new Employee("John Doe", 123);
console.log('====================================');
console.log(employee1);
console.log('====================================');
// the second class 
class Car {
    make;
    year;
    color;
    constructor(make, year, color) {
        this.make = make;
        this.year = year;
        this.color = color;
    }
    move() {
        console.log(`${this.make} is moving.`);
    }
}
const car1 = new Car("Toyota", 2020, "Red");
console.log('====================================');
console.log(car1);
car1.move();
console.log('====================================');
// object distructring inntypescript
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
const { name: personName, age: personAge, city: personCity } = person;
console.log('====================================');
console.log(`Name: ${personName}, Age: ${personAge}, City: ${personCity}`);
console.log('====================================');
