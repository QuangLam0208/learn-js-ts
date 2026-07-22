"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 106");
const btnSubmit = document.getElementById("btnSubmit");
const inputName = document.getElementById("name");
btnSubmit?.addEventListener("click", () => {
    alert(inputName.value);
});
