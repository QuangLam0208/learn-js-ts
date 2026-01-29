const submitBtn = document.getElementById('submitBtn');
const input = document.getElementById('name');
const prevElement = document.getElementById('prev');

const prevName = localStorage.getItem('persy');
if (prevName) {
    prevElement.innerHTML = `<b>${prevName}</b>`;
}

submitBtn.addEventListener('click', () => {
    // console.log(input.value);
    localStorage.setItem('persy', input.value);
    document.getElementById('message').innerHTML = `<b>${input.value}</b>`;
})