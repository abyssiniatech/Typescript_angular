// string
let name:string="surafel mengist";
name="surafel";
console.log("==================================== string");
console.log(name);
console.log("====================================");
const lang="javascript";
console.log("====================================");
console.log(lang);
console.log("====================================");
// number
let age:number=30;
console.log("====================================number");
console.log(age);
console.log("====================================");
// boolean
let isStudent:boolean=true;
if(isStudent){
  console.log("====================================");
  console.log("is a student");
  console.log("====================================");
}
else{
  console.log("====================================");
  console.log("is not a student");
  console.log("====================================");
}
console.log("====================================boolean");
console.log(isStudent);
console.log("====================================");

// array
let numbers:number[]=[1,2,3,4,5];
console.log("==================================== array of numbers ");
console.log(numbers);
console.log("==================================== array of strings");
let names:string[]=["surafel","mengist"];
console.log("====================================");
console.log(names);
console.log("====================================");

// tuple
let person:[string,number]=["surafel",30];
console.log("==================================== this is a tuple");
console.log(person);
console.log("====================================");

// enum
enum Color {
  Red,
  Green,
  Blue
}
console.log("==================================== this is an enum");
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log("====================================");
// any
let randomValue:any=10;
randomValue="surafel";
randomValue=true;
console.log("==================================== this is any type");
console.log(randomValue);
console.log("====================================");
// void
function greet():void{
  console.log("==================================== this is a void function");
  console.log("Hello, World!");
}
greet();

// null and undefined
let nullValue:null=null;
let undefinedValue:undefined=undefined;
console.log("==================================== null and undefined");
console.log(nullValue);
console.log(undefinedValue);
console.log("====================================");
// object
let personObj:{name:string,age:number}={name:"surafel",age:30};
console.log("====================================");
console.log(personObj);
console.log("====================================");
// union types
let unionValue:string|number="surafel";
console.log("==================================== this is a union type");
// unionValue=30; // valid
console.log(unionValue);
console.log("====================================");
// intersection types
interface A {
  a: string;
}
interface B {
  b: number;
}
type AB = A & B;
let abValue: AB = { a: "hello", b: 42 };
console.log("==================================== this is an intersection type");
console.log(abValue);
console.log("====================================");
// type aliases
type StringOrNumber = string | number;
let aliasValue: StringOrNumber = "surafel";
console.log("==================================== this is a type alias");
console.log(aliasValue);
console.log("====================================");
aliasValue = 30; // valid
console.log("====================================");
console.log(aliasValue);
console.log("====================================");
// literal types
let literalValue:"surafel"|"mengist"="surafel";
console.log("==================================== this is a literal type");
console.log(literalValue);
console.log("====================================");
literalValue="mengist"; // valid
console.log("====================================");
console.log(literalValue);
console.log("====================================");
// type assertions
let someValue:any="this is a string";
let strLength:number=(someValue as string).length;

 
// let strLength:number=(<string>someValue).length;
console.log("====================================");
console.log(strLength);
console.log("====================================");
// unknown
let unknownValue:unknown="surafel";
if(typeof unknownValue==="string"){
  console.log("====================================");
  console.log(unknownValue.toUpperCase());
  console.log("====================================");
}
// never
function throwError(message:string):never{
  throw new Error(message);
}

let departmnt:any;
departmnt="IT";
departmnt=12;
console.log('====================================');
console.log(departmnt);
console.log('====================================');

// function in typescript
function add(num1:number,num2:number) :number{
   return num1+num2;
}
const sum =add(12,23)
console.log('====================================');
console.log(sum);
console.log('====================================');

// void function
function logMessage(message:string):void{
  console.log('====================================');
  console.log(message);
  console.log('====================================');
}
logMessage("Hello, TypeScript!");

// what is void in typescript
function printMessage():void{
  console.log('====================================');
  console.log("This function does not return anything.");
  console.log('====================================');
}
printMessage();