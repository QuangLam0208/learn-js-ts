console.log("lab 07");
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    if (data.length) {
        const tbody = document.querySelector("#blogs tbody");
        data.forEach((item, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>${item.content}</td>
            </tr>`;
        });
    }
};
fetchBlogs();
export {};
