export {};
console.log("video 126");

// function merge<T,U>(a: T, b: U){
//     return [a, b];
// }

const merge = <T,U>(a: T, b: U) => {
    return [a, b];
}

// const t1 = merge<number, string>(100, "do la");
const t1 = merge(100, "do la");
console.log(t1);