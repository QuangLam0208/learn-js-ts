const greeting = (name, callback) => {
    console.log(`Hello, ${name}!`);
    callback();
}

const hello = () => {
    console.log("learn callbacks...");
}

greeting("Persy", hello);