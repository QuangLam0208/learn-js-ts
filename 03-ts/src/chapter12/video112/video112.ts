export {};
console.log("Video 112");

// class: dinh nghia tong quat, mieu ta chung chung

class Lion {
    // dac diem
    name: string | undefined;
    color: string | undefined;

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
