const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

console.log(names[0]); // Alice
console.log(names[2]); // Charlie

console.log(names[10]); // undefined

names[2] = 'Chuck';
console.log(names); // ['Alice', 'Bob', 'Chuck', 'Diana']

names.push(true, 123);
names.unshift(null);
console.log(names); // [null, 'Alice', 'Bob', 'Chuck', 'Diana', true, 123]

names.pop();
names.shift();
console.log(names); // ['Alice', 'Bob', 'Chuck', 'Diana', true]