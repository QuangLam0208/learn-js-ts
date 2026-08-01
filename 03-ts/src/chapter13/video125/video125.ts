export {};
console.log("video 125");

function testNumber(value: number) {
    return value;
}

function testStr(value: string) {
    return value;
}

function testGeneric<T>(value: T): T {
    return value;
}

const num = testGeneric<number>(32632005);
const str = testGeneric("persywcode");

console.log(num, str);

// function getFirstElementInArray<T>(arr: T[]) {
//     return arr[0];
// }

const getFirstElementInArray = <T>(arr: T[]) => {
    return arr[0];
}
const a1 = getFirstElementInArray([1, 2, 3, 4, 5]);
console.log(a1);