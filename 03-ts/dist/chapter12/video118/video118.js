"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 118");
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, name, id) {
        super(id, name);
        this.skill = skill;
    }
}
const persy = new LapTrinhVien("type", "persy", 32632005);
class Bird {
    makeSound() {
        console.log("chim keu chic chic");
    }
    doFly() {
        console.log("Con chim bay cao theeee");
    }
}
const myBird = new Bird();
myBird.makeSound();
myBird.doFly();
