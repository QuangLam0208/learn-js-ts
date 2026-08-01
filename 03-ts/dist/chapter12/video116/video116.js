console.log("video 116");
class Cat {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    makeSound() {
        console.log("mew mew");
    }
}
const myCat = new Cat("persy", 2);
let catAge = myCat.age;
console.log(catAge);
myCat.age = 3;
catAge = myCat.age;
console.log(catAge);
export {};
