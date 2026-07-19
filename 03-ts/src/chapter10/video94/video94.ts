export {};
console.log("video 94")

// object type
const person: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean
} = {
    name: "persy",
    age: 21,
    address: "HCM",
    isHandsome: true
}

const printInfor = (people: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean
}) => {
    console.log(`your name is : ${people.name}`);
}

printInfor(person);

// optional properties
const student1: {
    name: string;
    id: number;
    phone?: number;
} = {
    name: "persy",
    id: 325
}

const student2: {
    name: string;
    id: number;
    phone?: number;
} = {
    name: "qlam",
    id: 3263,
    phone: 97
}