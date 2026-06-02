"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "John",
    age: 25,
    isAdmin: true,
};
const user2 = {
    name: "surafel Mengist",
    age: 30,
    isAdmin: false,
};
console.log('====================================');
console.log(user1);
console.log('====================================');
console.log(user2);
console.log('====================================');
const company1 = {
    name: "Tech Company",
    employees: [user1, user2],
};
console.log('====================================');
console.log(company1);
console.log('====================================');
const readonlyUser1 = {
    name: "John",
    age: 25,
    isAdmin: true,
};
console.log('====================================');
console.log(`${readonlyUser1.name} :Age: ${readonlyUser1.age} isAdmin: ${readonlyUser1.isAdmin}`);
console.log('====================================');
// readonlyUser1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
