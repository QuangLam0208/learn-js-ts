const myClass = ["Lam", "An", "Hoa", "Minh", "Hung"];
console.log(myClass, myClass.length);

// for (let i = 0; i < myClass.length; i++) {
//     console.log(`Index ${i}: ${myClass[i]}`);
// }

// for each
myClass.forEach(function(value, index) {
    console.log(`Index ${index}: ${value}`);
})

console.log("----- Arrow function -----");

myClass.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`);
})