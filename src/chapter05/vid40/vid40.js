const scores = [10, 8, 3, 7, 5];

// read data
// scores.forEach((scores, index) => {
//     console.log(`Score at index ${index} is ${scores}`);
// })

// modify data, sử dụng map không làm thay đổi giá trị của array gốc -> tạo array mới hứng kết quả
const scorex2 = scores.map((value, index) => {
    return value * 2;
})

const otherScorex2 = scores.map((value, index) => value * 2);

console.log(scores);
console.log(scorex2);
console.log(otherScorex2);