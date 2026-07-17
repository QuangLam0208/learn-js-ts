console.log("Video 33");

let globalVar = "I am a global variable";
const show = () => {
    console.log(globalVar);
}

show();
console.log(globalVar);

const sayHi = () => {
    let name1 = "persy";
    console.log(`Hi ${name1}`);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y);
    }

    console.log(x); // This will cause an error because 'x' is not defined outside the block
}

sayHi();
console.log(name1); // This will cause an error because 'name1' is not defined globally