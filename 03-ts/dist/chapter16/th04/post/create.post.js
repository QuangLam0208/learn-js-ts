import { actionClickDelete } from "./delete.post.js";
import { actionClickUpdate } from "./update.post.js";
const addNewRowWithJS = (post) => {
    const tableBody = document.querySelector("#tablePost tbody");
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.content}</td>
                        <td>
                            <button class="btn btn-warning edit-post"
                                    data-update-id="${post.id}"
                                    data-title="${post.title}"
                                    data-content="${post.content}"
                            >Edit</button>
                            <button class="btn btn-danger delete-post"
                                    data-delete-id=${post.id}
                            >Delete</button>
                        </td>
                    </tr>
    `;
    tableBody.appendChild(newRow);
    const btnDeleteElement = document.querySelector(`[data-delete-id="${post.id}"]`);
    actionClickDelete(btnDeleteElement);
    const btnUpdateElement = document.querySelector(`[data-update-id="${post.id}"]`);
    actionClickUpdate(btnUpdateElement);
};
const submitModalCreate = () => {
    const btnCreate = document.getElementById("btnCreatePost");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const titleInput = document.getElementById("title");
            const contentInput = document.getElementById("content");
            const title = titleInput.value;
            const content = contentInput.value;
            if (!title || !content) {
                alert("Field can not empty.");
                return;
            }
            const rawResponse = await fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content })
            });
            const res = await rawResponse.json();
            addNewRowWithJS(res);
            //@ts-ignore
            const modalPost = bootstrap.Modal.getOrCreateInstance('#modalPost', {
                keyboard: false
            });
            modalPost.hide();
            //@ts-ignore
            const toast = new bootstrap.Toast("#createPostToast");
            toast.show();
            titleInput.value = "";
            contentInput.value = "";
        });
    }
};
export { submitModalCreate, addNewRowWithJS };
