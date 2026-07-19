export {};

type TStudent = {
    id: number,
    name: string,
    email: string,
    isPremium: true,
    contact: string | number
};

type TCourse = {
    courseId: number,
    title: string,
    price: number,
    students: TStudent[]
};

const registerStudentCourse = (student: TStudent, course: TCourse) => {
    course.students.push(student);
    return course;
}

const printCourseInfo = (course: TCourse) => {
    console.log(`Course name: ${course.title}.
        So luong hoc vien da dang ky: ${course.students.length}`);
    if (course.students.length === 0) {
        console.log("Chua co hoc vien nao.");
    } else {
        course.students.forEach((stu, index) => {
            console.log(stu.name);
        })
    }
}

const student1: TStudent = {
    id: 123,
    name: "Persy",
    email: "ql28@gmail.com",
    isPremium: true,
    contact: "ql28@gmail.com"
}

const student2: TStudent = {
    id: 124,
    name: "Qlam",
    email: "ql28@gmail.com",
    isPremium: true,
    contact: 32632005
}

let myCourse1: TCourse = {
    courseId: 1,
    title: "Ts with Persy",
    price: 500000,
    students: []
}

printCourseInfo(myCourse1);
console.log("-----------------");
myCourse1 = registerStudentCourse(student1, myCourse1);
myCourse1 = registerStudentCourse(student2, myCourse1);
printCourseInfo(myCourse1);


