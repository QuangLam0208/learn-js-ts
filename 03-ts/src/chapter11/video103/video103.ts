export {};
console.log("video 103");

interface IPerson {
    name: string,
    age: number,
    address?: string,
    readonly lang: string, // khong cho sua doi gia tri cua tham so nay
    greet: () => void
}

const user: IPerson = {
    age: 21,
    name: "per",
    lang: "vn",
    greet: () => console.log(`I am ${user.name}.`)
}
user.greet()

// user.lang = "eng"; // se loi, vi la readonly

const user1: IPerson = {
    age: 22,
    name: "per27",
    address: "hanoi",
    lang: "eng",
    greet: () => console.log(`I am ${user1.name}.`)
}
user1.greet()

interface IAnimal {
    name: string,
    speak: () => void
}

interface IDog extends IAnimal {
    breed: string,
}

const myDog: IDog = {
    name: "Buddy",
    breed: "Golden Retriever",
    speak: () => console.log("Gau gauu")
}

myDog.speak()


