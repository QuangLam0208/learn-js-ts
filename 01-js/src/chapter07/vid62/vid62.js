console.log("1. Start");

const myPromise = new Promise((resolve, reject) => {
    console.log("2. Promise is running (immediately executed)");

    setTimeout(() => {
        resolve("4. Promise resolved");
        // reject("4. Promise rejected");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

console.log("3. End ");