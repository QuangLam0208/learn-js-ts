const person = {
    name: "Persy",
    age: 20
}

console.log(person);
console.log(person.age);

person.address = "123 Main St";
console.log(person);

delete person.address;
console.log(person);