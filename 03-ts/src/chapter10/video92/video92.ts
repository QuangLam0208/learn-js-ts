export {};
console.log("video 92");

const sum = (a: number, b: number) => {
    return a + b;
}

// Cach khai bao return type cho mot function
// const sum = (a: number, b: number): number => {
//     return a + b;
// }

const sayHi = (name: string) => {
    console.log("anh trai say hi...", name);
}

sayHi("persy");

const mySum = sum(9, 6);
console.log(`mySum = ${mySum}`);