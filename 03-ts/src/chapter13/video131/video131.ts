export {};
console.log("video 131");

const printValue = <T = string>(value: T) => {
    return value;
}

const a = printValue("persy hoc code");
const b = printValue(21);

interface ITest<T = string | number> {
    data: T
} 

const c: ITest = {
    data: 123
}

const d: ITest<boolean> = {
    data: true
}