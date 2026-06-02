// interface for the config object
interface user {
    readonly id:string, // readonly property
    name:string,
    age:number,
    email?:string, // optional property
}
const user1:user ={
    id:"1",
    name:"John",
    age:25,
    email:"john@example.com"
}

const user2:user ={
    id:"2",
    name:"Jane",
    age:30,
}
console.log('====================================');
console.log(user1);
console.log('====================================');
console.log(user2);
console.log('====================================');

// object with functions
interface calculator {
    add:(a:number,b:number)=>number,
    subtract:(a:number,b:number)=>number,
    multiply:(a:number,b:number)=>number,
    divide:(a:number,b:number)=>number,
}
const myCalculator:calculator = {
    add:(a,b)=>a+b,
    subtract:(a,b)=>a-b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>a/b,
}
console.log('====================================');
console.log(myCalculator.add(5,3));
console.log(myCalculator.subtract(5,3));
console.log(myCalculator.multiply(5,3));
console.log(myCalculator.divide(5,3));
console.log('====================================');
// interface for array of objects
interface userList {
    users:user[],
}
const userList1:userList = {
    users:[user1,user2],
}
console.log('====================================');
console.log(userList1);
console.log('====================================');

// Extending Interfaces
interface admin extends user {
    role:string,
}
const admin1:admin = {
    id:"3",
    name:"Admin User",
    age:35,
    email:"admin@example.com",
    role:"Administrator"
}

console.log('====================================');
console.log(admin1);
console.log('====================================');


interface manager extends admin {
    department:string,
}
const manager1:manager = {
    id:"4",
    name:"Manager User",
    age:40,
    email:"manager@example.com",
    role:"Manager",
    department:"Engineering"
}


console.log('====================================');
console.log(manager1);
console.log('====================================');



// multiple inheritance using interfaces
interface Person {
  name: string;
}

interface Worker {
  salary: number;
}

interface Employee extends Person, Worker {}

const emp: Employee = {
  name: "John",
  salary: 50000
};

// interface with methods
interface Shape {
    area:()=>number,
    perimeter:()=>number,
}
class Rectangle implements Shape {
    constructor(public width:number, public height:number){}
    area(){
        return this.width * this.height;
    }
    perimeter(){
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5,10);
console.log('====================================');
console.log(`Area: ${rect.area()} Perimeter: ${rect.perimeter()}`);
console.log('====================================');