console.log("video 125");
function testNumber(value) {
    return value;
}
function testStr(value) {
    return value;
}
function testGeneric(value) {
    return value;
}
const num = testGeneric(32632005);
const str = testGeneric("persywcode");
console.log(num, str);
// function getFirstElementInArray<T>(arr: T[]) {
//     return arr[0];
// }
const getFirstElementInArray = (arr) => {
    return arr[0];
};
const a1 = getFirstElementInArray([1, 2, 3, 4, 5]);
console.log(a1);
export {};
