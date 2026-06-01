"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
let name = "surafel mengist";
name = "surafel";
console.log("====================================");
console.log(name);
console.log("====================================");
const lang = "javascript";
console.log("====================================");
console.log(lang);
console.log("====================================");
// number
let age = 30;
console.log("====================================");
console.log(age);
console.log("====================================");
// boolean
let isStudent = true;
console.log("====================================");
console.log(isStudent);
console.log("====================================");
// array
let numbers = [1, 2, 3, 4, 5];
console.log("====================================");
console.log(numbers);
console.log("====================================");
let names = ["surafel", "mengist"];
console.log("====================================");
console.log(names);
console.log("====================================");
// tuple
let person = ["surafel", 30];
console.log("====================================");
console.log(person);
console.log("====================================");
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log("====================================");
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log("====================================");
// any
let randomValue = 10;
randomValue = "surafel";
randomValue = true;
console.log("====================================");
console.log(randomValue);
console.log("====================================");
// void
function greet() {
    console.log("Hello, World!");
}
greet();
// null and undefined
let nullValue = null;
let undefinedValue = undefined;
console.log("====================================");
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
console.log("====================================");
// unionValue=30; // valid
console.log(unionValue);
console.log("====================================");
let abValue = { a: "hello", b: 42 };
console.log("====================================");
console.log(abValue);
console.log("====================================");
let aliasValue = "surafel";
console.log("====================================");
console.log(aliasValue);
console.log("====================================");
aliasValue = 30; // valid
console.log("====================================");
console.log(aliasValue);
console.log("====================================");
// literal types
let literalValue = "surafel";
console.log("====================================");
console.log(literalValue);
console.log("====================================");
literalValue = "mengist"; // valid
console.log("====================================");
console.log(literalValue);
console.log("====================================");
// type assertions
let someValue = "this is a string";
let strLength = someValue.length;
// or
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
// throwError("This is an error message."); // Uncommenting this line will throw an error
