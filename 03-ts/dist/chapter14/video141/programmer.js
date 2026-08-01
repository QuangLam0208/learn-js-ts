import Employee from "./employee";
export default class Programmer extends Employee {
    constructor(name, id, salary, lang) {
        super(name, id, salary);
        this.lang = lang;
    }
    printInfo() {
        console.log("protected salary:", this.salary);
    }
}
