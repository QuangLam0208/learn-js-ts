export {};
console.log("video 106")

const btnSubmit = document.getElementById("btnSubmit");
const inputName = document.getElementById("name") as HTMLInputElement;

btnSubmit?.addEventListener("click", () => {
    alert(inputName!.value);
})

