export {};
console.log("video 13");

class SinhVien {
    name: string | undefined;
    id: number | undefined;

    sleep() {
        console.log("di ngu: ", this.name);
    }
}

const sv1 = new SinhVien();
sv1.name = "Quang Lam";
sv1.id = 23110121;
sv1.sleep();

console.log("========================");
const sv2 = new SinhVien();
sv2.name = "Persy";
sv2.id = 23110121;
sv2.sleep();