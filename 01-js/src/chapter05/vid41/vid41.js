const ages = [12, 17, 8, 21, 20, 21];

const agesX2 = ages.map((item, index) => item * 2);

const agesGreater18 = ages.filter((item, index) => item > 18);

console.log(ages);
console.log(agesX2);
console.log(agesGreater18);