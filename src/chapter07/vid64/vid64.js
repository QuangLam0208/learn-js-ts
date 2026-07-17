
const doSomething = () => {
    const a = 10, b = 0;

    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return a / b;
}

try {
    doSomething();
} catch (error) {
    console.log("An error occurred: " + error);
} finally {
    console.log("Execution completed.");
}