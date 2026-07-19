export {};
console.log("video 95");

type TStudent = {
    id: string,
    name: string,
    address: string,
    age: number
};

const student1: TStudent = {
    id: "sv1",
    name: "persy",
    address: "hanoi",
    age: 21
}

const student2: TStudent = {
    id: "sv2",
    name: "persynomercy",
    address: "hanoi",
    age: 21
}

const printInfor = (st: TStudent) => {
    console.log(`student name: ${st.name}`);
}

printInfor(student1);
printInfor(student2);
