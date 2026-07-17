
// fetch => raw data (Response) => convert to json => usable data
const temp = fetch('http://localhost:8000/users');

temp.then(resp => resp.json()) // resp.json() returns a promise
    .then(data => console.log(data));