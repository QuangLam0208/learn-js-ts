import Employee from "./employee";

export default class Programmer extends Employee {
    public lang: string;

    constructor(name: string, id: number, salary: number, lang: string) {
        super(name, id, salary);
        this.lang = lang;
    }

    printInfo() {
        console.log("protected salary:", this.salary);
    }
}