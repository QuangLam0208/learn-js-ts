const actionClickDelete = (btnElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-delete-id");
        if (id) {
            await fetch(`http://localhost:8000/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            //@ts-ignore
            const toast = new bootstrap.Toast("#deletePostToast");
            toast.show();
            const row = btnElement.closest('tr');
            if (row)
                row.remove();
        }
    });
};
const handleDeletePost = () => {
    const deleteBtns = document.querySelectorAll(".delete-post");
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            const btnElement = btn;
            actionClickDelete(btnElement);
        });
    }
};
export { handleDeletePost, actionClickDelete };
