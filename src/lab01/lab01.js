const fullName = "Luong Quang Lam";
const birthYear = 2005;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

const intro = `Tên: ${fullName}
Tuổi: ${currentYear - birthYear}
Sinh viên: ${isStudent ? "Đúng" : "Sai"}`

console.log(intro);