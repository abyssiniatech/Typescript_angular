"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
let name = "surafel mengist";
name = "surafel";
console.log("==================================== string");
console.log(name);
console.log("====================================");
const lang = "javascript";
console.log("====================================");
console.log(lang);
console.log("====================================");
// number
let age = 30;
console.log("====================================number");
console.log(age);
console.log("====================================");
// boolean
let isStudent = true;
if (isStudent) {
    console.log("====================================");
    console.log("is a student");
    console.log("====================================");
}
else {
    console.log("====================================");
    console.log("is not a student");
    console.log("====================================");
}
console.log("====================================boolean");
console.log(isStudent);
console.log("====================================");
// array
let numbers = [1, 2, 3, 4, 5];
console.log("==================================== array of numbers ");
console.log(numbers);
console.log("==================================== array of strings");
let names = ["surafel", "mengist"];
console.log("====================================");
console.log(names);
console.log("====================================");
// tuple
let person = ["surafel", 30];
console.log("==================================== this is a tuple");
console.log(person);
console.log("====================================");
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log("==================================== this is an enum");
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log("====================================");
// any
let randomValue = 10;
randomValue = "surafel";
randomValue = true;
console.log("==================================== this is any type");
console.log(randomValue);
console.log("====================================");
// void
function greet() {
    console.log("==================================== this is a void function");
    console.log("Hello, World!");
}
greet();
// null and undefined
let nullValue = null;
let undefinedValue = undefined;
console.log("==================================== null and undefined");
console.log(nullValue);
console.log(undefinedValue);
console.log("====================================");
// object
let personObj = { name: "surafel", age: 30 };
console.log("====================================");
console.log(personObj);
console.log("====================================");
// union types
let unionValue = "surafel";
console.log("==================================== this is a union type");
// unionValue=30; // valid
console.log(unionValue);
console.log("====================================");
let abValue = { a: "hello", b: 42 };
console.log("==================================== this is an intersection type");
console.log(abValue);
console.log("====================================");
let aliasValue = "surafel";
console.log("==================================== this is a type alias");
console.log(aliasValue);
console.log("====================================");
aliasValue = 30; // valid
console.log("====================================");
console.log(aliasValue);
console.log("====================================");
// literal types
let literalValue = "surafel";
console.log("==================================== this is a literal type");
console.log(literalValue);
console.log("====================================");
literalValue = "mengist"; // valid
console.log("====================================");
console.log(literalValue);
console.log("====================================");
// type assertions
let someValue = "this is a string";
let strLength = someValue.length;
// let strLength:number=(<string>someValue).length;
console.log("====================================");
console.log(strLength);
console.log("====================================");
// unknown
let unknownValue = "surafel";
if (typeof unknownValue === "string") {
    console.log("====================================");
    console.log(unknownValue.toUpperCase());
    console.log("====================================");
}
// never
function throwError(message) {
    throw new Error(message);
}
let departmnt;
departmnt = "IT";
departmnt = 12;
console.log('====================================');
console.log(departmnt);
console.log('====================================');
// function in typescript
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(12, 23);
console.log('====================================');
console.log(sum);
console.log('====================================');
// void function
function logMessage(message) {
    console.log('====================================');
    console.log(message);
    console.log('====================================');
}
logMessage("Hello, TypeScript!");
// what is void in typescript
function printMessage() {
    console.log('====================================');
    console.log("This function does not return anything.");
    console.log('====================================');
}
printMessage();
