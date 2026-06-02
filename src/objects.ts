// Object Types
// Nested Objects
// Readonly Properties
// Optional Properties
// 1. Object Types
type user ={
    name:string,
    age:number,
    isAdmin:boolean,
}
const user1:user = {
    name:"John",
    age:25,
    isAdmin:true,
}
const user2:user = {
    name:"surafel Mengist",
    age:30,
    isAdmin:false,
} as const

console.log('====================================');
console.log(user1);
console.log('====================================');
console.log(user2);
console.log('====================================');


// 2. Nested Objects
type company = {
    name:string,
    employees:user[],
}
const company1:company = {
    name:"Tech Company",
    employees:[user1,user2],
}
console.log('====================================');
console.log(company1);
console.log('====================================');

// 3. Readonly Properties
type readonlyUser = {
    readonly name:string,
    readonly age:number,
    readonly isAdmin:boolean,
}
const readonlyUser1:readonlyUser = {
    name:"John",
    age:25,
    isAdmin:true,
}
console.log('====================================');
console.log(`${readonlyUser1.name} :Age: ${readonlyUser1.age} isAdmin: ${readonlyUser1.isAdmin}`);
console.log('====================================');
// readonlyUser1.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.