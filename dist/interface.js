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
const userList1 = {
    users: [user1, user2],
};
console.log('====================================');
console.log(userList1);
console.log('====================================');
const admin1 = {
    id: "3",
    name: "Admin User",
    age: 35,
    email: "admin@example.com",
    role: "Administrator"
};
console.log('====================================');
console.log(admin1);
console.log('====================================');
const manager1 = {
    id: "4",
    name: "Manager User",
    age: 40,
    email: "manager@example.com",
    role: "Manager",
    department: "Engineering"
};
console.log('====================================');
console.log(manager1);
console.log('====================================');
const emp = {
    name: "John",
    salary: 50000
};
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log('====================================');
console.log(`Area: ${rect.area()} Perimeter: ${rect.perimeter()}`);
console.log('====================================');
