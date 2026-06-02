"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic function types
function add(a, b) {
    return a + b;
}
const sum = add(2, 3);
console.log("basic function types:");
console.log('====================================');
console.log(sum);
console.log('====================================');
// Function Type Variable
let myAdd = function (x, y) {
    return x + y;
};
console.log("Function Type Variable:");
console.log('====================================');
console.log(myAdd(2, 3));
console.log('====================================');
let myadd2 = function (a, b) {
    return a - b;
};
console.log("Function Type Variable with different implementation:");
console.log('==================================== ');
console.log(myadd2(12, 6));
console.log('====================================');
let myAdd2 = function (x, y) {
    return x + y;
};
console.log("Type Alias for Functions:");
console.log('====================================');
console.log(myAdd2(2, 3));
console.log('====================================');
// Optional Parameters
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
console.log("Optional Parameters:");
console.log('====================================');
console.log(buildName("Surafel"));
console.log(buildName("Surafel", "Mengist"));
console.log('====================================');
// Default Parameters
function buildName2(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
console.log("Default Parameters:");
console.log('====================================');
console.log(buildName2("Surafel"));
console.log(buildName2("Surafel", "Mengist"));
console.log('====================================');
// Rest Parameters
function buildName3(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
console.log("Rest Parameters:");
console.log('====================================');
console.log(buildName3("Surafel", "Mengist", "Tadesse"));
console.log('====================================');
// this and arrow functions
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
console.log("this and arrow functions:");
console.log('====================================');
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
console.log('====================================');
// Void Function
function warnUser() {
    console.log("This is a warning message.");
}
console.log("Void Function:");
console.log('====================================');
warnUser();
console.log('====================================');
// Never Function
function throwError(message) {
    throw new Error(message);
}
console.log("Never Function:");
console.log('====================================');
try {
    throwError("Something went wrong!");
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
    else {
        console.error(String(e));
    }
}
console.log('====================================');
