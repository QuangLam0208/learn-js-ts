export {};
console.log("video 102");

type TUsername = string | number; // union type => dung dau hoac

type TStudent = {
    id: number,
    name: string
}

type TCoder = {
    lang: string
}

type TProgrammer = TStudent & TCoder; // intersection type

const persywcode: TProgrammer = {
    id: 123,
    name: "Quang Lam",
    lang: "TypeScript"
}

let username: TUsername = "Persy";