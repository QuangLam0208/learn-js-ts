const sp1 = {
    name: "T-shirt",
    price: 100,
    inStock: true
}
const sp2 = {
    name: "Jeans",
    price: 300,
    inStock: true
}
const sp3 = {
    name: "Hoodie",
    price: 500,
    inStock: true
}
const sp4 = {
    name: "Cardigan",
    price: 400,
    inStock: false
}

const sp5 = {
    name: "Long sleeve",
    price: 250,
    inStock: true
}

const products = [sp1, sp2, sp3, sp4, sp5];
console.log(">>> products:", products);

console.log(products[0].name); // console.log(sp1.name);

const sp2Updated = {
    name: "Jeans",
    price: 150,
    inStock: true
}
const products2 = [sp1, sp2Updated, sp3, sp4, sp5];
console.log(">>> List of products:", products2);

products2.push({
    name: "Jacket",
    price: 600,
    inStock: true
});
console.log(">>> After push:", products2);

products2.pop();
console.log(">>> After pop:", products2);

products2.forEach((item, index) => {
    console.log(item.name);
})

const prices = products2.map((item, index) => item.price);
console.log(">>> prices:", prices);

const inStockProducts = products2.filter((item, index) => item.inStock === true);
console.log(">>> inStockProducts:", inStockProducts);

for (let key in products2[0]) {
    console.log(key, products2[0][key]);
}
