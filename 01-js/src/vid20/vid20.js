console.log("Vid 20");

let a = 5;
const b = ++a; // => tăng giá trị a ngay lập tức, sau đó gán cho b
// const b = a++; // => gán giá trị a cho b trước, sau đó mới tăng a lên 1
// tương tự với --a và a--
console.log(a);
console.log(b);

// comparison operators
// lưu ý khi so sánh chuỗi với số, chuỗi sẽ được chuyển thành số,
// nếu sử dụng == thì chỉ so sánh giá trị chứ không so sánh kiểu dữ liệu
// nếu sử dụng === thì so sánh cả giá trị và kiểu dữ liệu (nên sử dụng)

const c = 5; // number
const d = "5"; // string
console.log(c === d); // false