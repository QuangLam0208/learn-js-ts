export {};
console.log("video 117");

class Parent {
    gold: number | undefined;
    money: number | undefined;

    shareHouse() {
        console.log("share a house from parents");
    }
}

class Child extends Parent {
    name: string | undefined;
    shareHouse() {
        super.shareHouse();
        console.log("share house to child");
    }
}

const persy = new Child();
persy.shareHouse();

