export {};

type TRole = "student" | "teacher";

class User {
    name: string;
    private _email: string;
    protected role: TRole;

    constructor(name: string, email: string, role?: TRole) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    printUserInfo() {
        console.log(`[${this.role}] ${this.name}`);
    }
}

class Teacher extends User {
    courses: string[] = [];
    constructor(name: string, email: string, role?: TRole) {
        super(name, email, "teacher");
    }

    addCourse(courseName: string) {
        this.courses.push(courseName);
    }

    printUserInfo() {
        const courseNames = this.courses.join(",");
        console.log(`[${this.role}] ${this.name} - Courses Taught: ${courseNames}`);
    }
}

class Student extends User {
    enrolledCourses: string[] = [];
    constructor(name: string, email: string) {
        super(name, email);
    }

    enroll(courseName: string) {
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

const printUserInfo = (user: User) => {
    user.printUserInfo();
}

printUserInfo(hoidanit);
printUserInfo(eric);
