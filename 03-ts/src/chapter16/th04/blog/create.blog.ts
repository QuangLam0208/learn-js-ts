import { IBlog } from "./blog.js";
import { actionDelete } from "./delete.blog.js";
import { actionUpdate } from "./update.blog.js";

export const addNewRowWithJS = (blog: IBlog) => {
    const tableBody = document.querySelector("#tableBlog tbody")!;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                    <tr>
                        <td>${blog.id}</td>
                        <td>${blog.title}</td>
                        <td>${blog.author}</td>
                        <td>${blog.content}</td>
                        <td>
                            <button class="btn btn-warning edit-blog"
                                    data-update-id="${blog.id}"
                                    data-title="${blog.title}"
                                    data-author="${blog.author}"
                                    data-content="${blog.content}"
                            >Edit</button>
                            <button class="btn btn-danger delete-blog" data-id=${blog.id}>Delete</button>
                        </td>
                    </tr>
    `

    tableBody.appendChild(newRow);

    const btnDeleteElement = document.querySelector(`[data-id="${blog.id}"]`)! as HTMLButtonElement;
    actionDelete(btnDeleteElement);

    const btnUpdateElement = document.querySelector(`[data-update-id="${blog.id}"]`)! as HTMLButtonElement;
    actionUpdate(btnUpdateElement);
}

export const handleCreateBlog = () => {
    const btnCreate = document.getElementById("btnCreateBlog");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const titleInput = document.getElementById("title")! as HTMLInputElement;
            const authorInput = document.getElementById("author")! as HTMLInputElement;
            const contentInput = document.getElementById("content")! as HTMLInputElement;

            const title = titleInput.value;
            const author = authorInput.value;
            const content = contentInput.value;

            if (!title || !author || !content) {
                alert("Field can not empty.");
                return;
            }

            const rawResponse = await fetch("http://localhost:8000/blogs", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, content })
            });
            const res: IBlog = await rawResponse.json();

            addNewRowWithJS(res);

            //@ts-ignore
            const modalBlog = bootstrap.Modal.getOrCreateInstance('#modalBlog', {
                keyboard: false
            })
            modalBlog.hide();

            //@ts-ignore
            const toast = new bootstrap.Toast("#createBlogToast");
            toast.show();

            titleInput.value = "";
            authorInput.value = "";
            contentInput.value = "";
        })
    }
}