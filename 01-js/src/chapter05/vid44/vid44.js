const sv1 = {
    username: "samuel",
    score: 9.6
}

const sv2 = {
    username: "athenel",
    score: 3
}

const sv3 = {
    username: "per",
    score: 9.2
}

const sinhvien = [sv1, sv2, sv3];

console.log(sinhvien);

sinhvien.forEach((item, index) => {
    console.log(`>>> index = ${index}, name = ${item.username}`)
})

const person = {
    email: "lamlq28@gmail.com",
    age: 20,
    address: "Vietnam"
}

for (let key in person) {
    console.log(key, person[key]);
}

for (let value of Object.values(person)) {
    console.log(value);
}

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}