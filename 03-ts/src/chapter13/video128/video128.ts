export {};
console.log("video 128");

class NumberBox {
    content: number;

    constructor(content: number) {
        this.content = content;
    }
}

class MagicBox<T> {
    content: T;
    constructor(content: T) {
        this.content = content;
    }
}

const t1 = new MagicBox(32632005);
const t2 = new MagicBox("persywcode");
