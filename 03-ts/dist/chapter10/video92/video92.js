"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 92");
const sum = (a, b) => {
    return a + b;
};
// Cach khai bao return type cho mot function
// const sum = (a: number, b: number): number => {
//     return a + b;
// }
const sayHi = (name) => {
    console.log("anh trai say hi...", name);
};
sayHi("persy");
const mySum = sum(9, 6);
console.log(`mySum = ${mySum}`);
