console.log("video 117");
class Parent {
    shareHouse() {
        console.log("share a house from parents");
    }
}
class Child extends Parent {
    shareHouse() {
        super.shareHouse();
        console.log("share house to child");
    }
}
const persy = new Child();
persy.shareHouse();
export {};
