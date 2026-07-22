export {};
console.log("video 118");

class Person {
    gender: string | undefined;
}

class NhanVien {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien {
    skill: string;

    constructor(skill: string, name: string, id: number) {
        super(id, name);
        this.skill = skill;
    }
}

const persy = new LapTrinhVien("type", "persy", 32632005);

interface IAnimal {
    makeSound(): void;
}

interface IFlyable {
    doFly(): void;
}

class Bird implements IAnimal, IFlyable {
    name: string | undefined;

    makeSound() {
        console.log("chim keu chic chic");
    }

    doFly() {
        console.log("Con chim bay cao theeee");
    }
}

const myBird = new Bird();
myBird.makeSound()
myBird.doFly()