"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: "1",
    name: "John",
    age: 25,
    email: "john@example.com"
};
const user2 = {
    id: "2",
    name: "Jane",
    age: 30,
};
console.log('====================================');
console.log(user1);
console.log('====================================');
console.log(user2);
console.log('====================================');
const myCalculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};
console.log('====================================');
console.log(myCalculator.add(5, 3));
console.log(myCalculator.subtract(5, 3));
console.log(myCalculator.multiply(5, 3));
console.log(myCalculator.divide(5, 3));
console.log('====================================');
