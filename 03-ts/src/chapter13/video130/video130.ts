export {};
console.log("video 130");

// value thuoc T can co length (string...)
// function logLength<T extends { length: number }>(value: T) {
//     console.log(value.length);
// } 

const logLength = <T extends { length: number }>(value: T) => {
    console.log(value.length);
}

logLength("persy hoc code ts");
logLength([1, 2, 3, 4])

interface IUser {
    id: number,
    name: string
}

const testInterface = <T extends IUser>(value: T) => {
    console.log(value);
}

testInterface({id: 1, name: "persy"});

class Animal {
    move() {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Gau gau gau.");
    }
}

const testClass = <T extends Animal>(value: T) => {
    console.log(value);

    if (value instanceof Dog) {
        value.bark();
    }
}

const a1 = new Dog();
const b1 = new Animal();

testClass(a1);
testClass(b1);

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]; 
}

const user = { name: "quang lam dep trai", age: 21 };
const res = getProperty(user, "name");
console.log(res);