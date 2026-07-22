"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 103");
const user = {
    age: 21,
    name: "per",
    lang: "vn",
    greet: () => console.log(`I am ${user.name}.`)
};
user.greet();
// user.lang = "eng"; // se loi, vi la readonly
const user1 = {
    age: 22,
    name: "per27",
    address: "hanoi",
    lang: "eng",
    greet: () => console.log(`I am ${user1.name}.`)
};
user1.greet();
const myDog = {
    name: "Buddy",
    breed: "Golden Retriever",
    speak: () => console.log("Gau gauu")
};
myDog.speak();
