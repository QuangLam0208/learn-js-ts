const fetchBlogs = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();

    // insert data to html
    const tbody = document.querySelector("#blogs tbody");
    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `<tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button class="delete-blog" data-id="${blog.id}">Delete</button></td>
            </tr>`;
        });
    }
}

const addNewRowToEnd = (blog) => {
    const tableBody = document.querySelector("#blogs tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button class="delete-blog" data-id="${blog.id}">Delete</button></td>
    `;
    tableBody.appendChild(newRow);

    const btn = document.querySelector(`[data-id="${blog.id}"]`);
    btn.addEventListener('click', async () => {
        const id = btn.getAttribute("data-id");
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const row = btn.closest("tr");
        row.remove();
    });
}

const handleAddNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");
    const saveBtn = document.getElementById("saveBlog");

    saveBtn.addEventListener('click', async () => {
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRowToEnd(data);
    })

}

const handleDeleteBlogs = () => {
    const btns = document.querySelectorAll(".delete-blog");
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute("data-id");
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const row = btn.closest("tr");
                row.remove();
            })
        })
    }
}

fetchBlogs().then(() => {
    handleDeleteBlogs();
});
handleAddNewBlog();