console.log("video 120");
class Animal {
    constructor(name) {
        this.name = name;
    }
    test() {
        console.log("do a test");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Gay gay");
    }
}
const myDog = new Dog("gay");
myDog.test();
myDog.makeSound();
export {};
