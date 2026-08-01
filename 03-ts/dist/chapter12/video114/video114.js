console.log("video 114");
class Person {
    // constructor
    constructor(name, age) {
        this.name = name ?? "unknown";
        this.age = age ?? 0;
    }
}
const per1 = new Person("persy", 21);
console.log(`my name is ${per1.name}. my age: ${per1.age}.`);
const per = new Person();
console.log(`my name is ${per.name}. my age: ${per.age}.`);
export {};
