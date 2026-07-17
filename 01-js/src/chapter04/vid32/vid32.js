console.log("Video 32");

const sum = (a, b, c) => { 
    console.log("run before return");
    if (typeof a !== "number") {
        console.log("run empty return");
        return; // void
    }
    console.log("run after return");
    return a + b + c;
}

console.log(sum('quang lam dep trai', 2, 3));