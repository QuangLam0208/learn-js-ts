export {};
console.log("video 127");

type StringArray = string[ ];
type NumberArray = number[ ];

type myArr<T> = T[];

const ages: myArr<number> = [19, 20];
const names: myArr<string> = ["quang lam", "persy"];

// object
type Wrapper<T> = {
  data: T
}

const a : Wrapper<number> = {
    data : 3263
}

console.log(a.data);

const b: Wrapper<string> = {
    data: "Hello"
}

console.log(b.data);


