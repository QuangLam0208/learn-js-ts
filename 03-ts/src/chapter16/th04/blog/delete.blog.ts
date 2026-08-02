const actionDelete = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-id");
        if (id) {
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            //@ts-ignore
            const toast = new bootstrap.Toast("#deleteBlogToast");
            toast.show();

            const row = btnElement.closest("tr");
            if (row) row.remove();
        }
    })
}

const handleDeleteBlog = () => {
    const deleteBtns = document.querySelectorAll(".delete-blog");
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            actionDelete(btnElement);
        })
    }
}

export { handleDeleteBlog, actionDelete };