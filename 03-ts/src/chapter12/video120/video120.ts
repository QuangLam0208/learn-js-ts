export {};
console.log("video 120");

abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;

    test() {
        console.log("do a test");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Gay gay");
    }
}

const myDog = new Dog("gay");

myDog.test();
myDog.makeSound();