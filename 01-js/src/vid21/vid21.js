console.log("Vid 21");
console.error("This my error, sorry.");
console.warn("This is a warning.");
const name = "Persy";
const age = 20;

// không nên: cộng chuỗi dễ sai
console.log("My name is " + name + " and I am " + age + " years old.");

// nên: dùng dấu phẩy (tự động thêm dấu cách)
console.log("My name is", name, "and I am", age, "years old.");