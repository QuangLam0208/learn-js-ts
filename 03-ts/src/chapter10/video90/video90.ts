export {};
console.log("video 90");

let name: unknown = "persy"; // han che dung any
// name.toUpperCase(); // se bao loi o compile time
if (typeof(name) === "string") name.toUpperCase(); 

let name1: any = 21; // khong check type -> nen se co loi runtime
name1.toUpperCase();

let name2: string = "persy";
name2.toUpperCase();