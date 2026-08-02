import { addNewRowWithJS } from "./create.blog.js";

const actionSubmitModal = () => {
    const updateBtn = document.getElementById("btnUpdateBlog");
    if (updateBtn) {
        updateBtn.addEventListener("click", async () => {
            const idElement = document.getElementById("idUpdate")! as HTMLInputElement;
            const titleElement = document.getElementById("titleUpdate")! as HTMLInputElement;
            const authorElement = document.getElementById("authorUpdate")! as HTMLInputElement;
            const contentElement = document.getElementById("contentUpdate")! as HTMLInputElement;

            await fetch(`http://localhost:8000/blogs/${idElement.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: titleElement.value,
                    author: authorElement.value,
                    content: contentElement.value
                })
            });

            const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`)!;
            const row = btnUpdateElement.closest("tr");
            if (row) row.remove();

            addNewRowWithJS({
                id: +idElement.value,
                title: titleElement.value,
                author: authorElement.value,
                content: contentElement.value
            });

            //@ts-ignore
            const modalUpdateBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
                keyboard: false
            })
            modalUpdateBlog.hide();

            //@ts-ignore
            const toast = new bootstrap.Toast("#updateBlogToast");
            toast.show();
        })
    }
}

const actionUpdate = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", () => {
        const idElement = document.getElementById("idUpdate")! as HTMLInputElement;
        const titleElement = document.getElementById("titleUpdate")! as HTMLInputElement;
        const authorElement = document.getElementById("authorUpdate")! as HTMLInputElement;
        const contentElement = document.getElementById("contentUpdate")! as HTMLInputElement;

        idElement.value = btnElement.getAttribute("data-update-id")!;
        titleElement.value = btnElement.getAttribute("data-title")!;
        authorElement.value = btnElement.getAttribute("data-author")!;
        contentElement.value = btnElement.getAttribute("data-content")!;

        //@ts-ignore
        const modalUpdateBlog = bootstrap.Modal.getOrCreateInstance('#modalUpdateBlog', {
            keyboard: false
        })
        modalUpdateBlog.show();
    })
}

const handleUpdateBlog = () => {
    const updateBtns = document.querySelectorAll(".edit-blog");
    if (updateBtns) {
        updateBtns.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            actionUpdate(btnElement);
        })
    }
}

export { handleUpdateBlog, actionUpdate, actionSubmitModal }