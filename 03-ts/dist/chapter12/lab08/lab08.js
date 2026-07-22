"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    printUserInfo() {
        console.log(`[${this.role}] ${this.name}`);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, "teacher");
        this.courses = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        const courseNames = this.courses.join(",");
        console.log(`[${this.role}] ${this.name} - Courses Taught: ${courseNames}`);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourses = [];
    }
    enroll(courseName) {
        this.enrolledCourses.push(courseName);
    }
    printUserInfo() {
        const courseNames = this.enrolledCourses.join(",");
        console.log(`[${this.role}] ${this.name} - Enrolled Courses: ${courseNames}`);
    }
}
const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");
const eric = new Teacher("Eric", "eric@email.com", "teacher");
eric.addCourse("React");
const printUserInfo = (user) => {
    user.printUserInfo();
};
printUserInfo(hoidanit);
printUserInfo(eric);
