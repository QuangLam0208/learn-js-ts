export {};
console.log("video 119");

interface IAnimal {
    makeSound(): void;
}

class Dog implements IAnimal {
    makeSound(): void {
        console.log("Gau gau gau.")
    }
}

class Cat implements IAnimal {
    makeSound(): void {
        console.log("Mew mew.");
    }
}

class Pig implements IAnimal {
    makeSound(): void {
        console.log("Un in.")
    }
}

const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();

const myArr: string[] = ["a", "b"];

const myZoo: IAnimal[] = [myDog, myCat, myPig]

myZoo.forEach((animal, index) => {
    animal.makeSound();
})