const registerStudentCourse = (student, course) => {
    course.students.push(student);
    return course;
};
const printCourseInfo = (course) => {
    console.log(`Course name: ${course.title}.
        So luong hoc vien da dang ky: ${course.students.length}`);
    if (course.students.length === 0) {
        console.log("Chua co hoc vien nao.");
    }
    else {
        course.students.forEach((stu, index) => {
            console.log(stu.name);
        });
    }
};
const student1 = {
    id: 123,
    name: "Persy",
    email: "ql28@gmail.com",
    isPremium: true,
    contact: "ql28@gmail.com"
};
const student2 = {
    id: 124,
    name: "Qlam",
    email: "ql28@gmail.com",
    isPremium: true,
    contact: 32632005
};
let myCourse1 = {
    courseId: 1,
    title: "Ts with Persy",
    price: 500000,
    students: []
};
printCourseInfo(myCourse1);
console.log("-----------------");
myCourse1 = registerStudentCourse(student1, myCourse1);
myCourse1 = registerStudentCourse(student2, myCourse1);
printCourseInfo(myCourse1);
export {};
