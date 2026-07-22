"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 119");
class Dog {
    makeSound() {
        console.log("Gau gau gau.");
    }
}
class Cat {
    makeSound() {
        console.log("Mew mew.");
    }
}
class Pig {
    makeSound() {
        console.log("Un in.");
    }
}
const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();
const myArr = ["a", "b"];
const myZoo = [myDog, myCat, myPig];
myZoo.forEach((animal, index) => {
    animal.makeSound();
});
