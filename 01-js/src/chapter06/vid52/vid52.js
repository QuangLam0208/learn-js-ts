const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const myTxtElement = document.getElementById("myTxt");

myBtnElement.addEventListener("click", () => {
    console.log("You clicked my button");
    // myTxtElement.innerText = "You clicked the button!";
    myTxtElement.innerHTML = "<strong>Hi guy, </strong><em>learning JavaScript is fun!</em>";
})  

backBtnElement.addEventListener("click", () => {
    myTxtElement.innerText = "Hello World";
})