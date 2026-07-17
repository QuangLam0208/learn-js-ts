const myBtnElement = document.getElementById("myBtn");
const myTxtElement = document.getElementById("myTxt");
const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
    console.log("You clicked change color button!");
    myTxtElement.style.color = "red";
    myTxtElement.style.backgroundColor = "yellow";
    myTxtElement.classList.add("q", "persy");
    // {key: value}
})

backBtnElement.addEventListener("click", () => {
    console.log("You clicked change back button!");
    myTxtElement.style.color = "black";
    myTxtElement.style.backgroundColor = "unset";
    myTxtElement.classList.remove("q", "persy");
})