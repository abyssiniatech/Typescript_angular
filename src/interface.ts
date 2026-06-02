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
