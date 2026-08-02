import { addNewRowWithJS } from "./create.post.js";
const submitModalUpdate = () => {
    const updateBtn = document.getElementById("btnUpdatePost");
    if (updateBtn) {
        updateBtn.addEventListener('click', async () => {
            const idElement = document.getElementById('idUpdate');
            const titleElement = document.getElementById('titleUpdate');
            const contentElement = document.getElementById('contentUpdate');
            await fetch(`http://localhost:8000/posts/${idElement.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: titleElement.value,
                    content: contentElement.value,
                })
            });
            const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`);
            const row = btnUpdateElement.closest("tr");
            if (row)
                row.remove();
            addNewRowWithJS({
                id: +idElement.value,
                title: titleElement.value,
                content: contentElement.value
            });
            //@ts-ignore
            const modalUpdatePost = bootstrap.Modal.getOrCreateInstance('#modalUpdatePost', {
                keyboard: false
            });
            modalUpdatePost.hide();
            //@ts-ignore
            const toast = new bootstrap.Toast("#updatePostToast");
            toast.show();
        });
    }
};
const actionClickUpdate = (btnElement) => {
    btnElement.addEventListener('click', () => {
        const idElement = document.getElementById('idUpdate');
        const titleElement = document.getElementById('titleUpdate');
        const contentElement = document.getElementById('contentUpdate');
        idElement.value = btnElement.getAttribute('data-update-id');
        titleElement.value = btnElement.getAttribute('data-title');
        contentElement.value = btnElement.getAttribute('data-content');
        //@ts-ignore
        const modalUpdatePost = bootstrap.Modal.getOrCreateInstance('#modalUpdatePost', {
            keyboard: false
        });
        modalUpdatePost.show();
    });
};
const handleUpdatePost = () => {
    const updateBtns = document.querySelectorAll(".edit-post");
    if (updateBtns) {
        updateBtns.forEach((btn, index) => {
            const btnElement = btn;
            actionClickUpdate(btnElement);
        });
    }
};
export { handleUpdatePost, actionClickUpdate, submitModalUpdate };
