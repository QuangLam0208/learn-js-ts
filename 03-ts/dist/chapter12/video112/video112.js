console.log("Video 112");
// class: dinh nghia tong quat, mieu ta chung chung
class Lion {
    // hanh vi
    sleep() {
        console.log("Lion is sleeping...", this.name);
    }
}
// mieu ta cu the tung Lion => object
// clone: new
const lion1 = new Lion();
lion1.color = "yellow";
lion1.name = "persy";
lion1.sleep();
export {};
