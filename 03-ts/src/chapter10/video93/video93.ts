export {};
console.log("video 93");

// union 
let username: number | string = "persy2005@gmail.com";
username = 23110121;
username = "0974976839";

const printUsername = (username: string | number) => {
    if (typeof(username) === "string")
        console.log(`my username: ${username.toUpperCase()}`)
}

printUsername("Hoc ts with persy")