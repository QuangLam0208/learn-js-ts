fetch("http://localhost:8000/users")
.then(response => response.json())
.then(data => console.log(data));

const fetchData = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    console.log(data);
}

fetchData();