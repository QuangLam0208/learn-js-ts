"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 115");
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    makeSound() {
        console.log("bla bla w id:", this.id);
    }
}
const myDog = new Animal("dog", 1);
console.log("animal name:", myDog.name);
myDog.makeSound();
