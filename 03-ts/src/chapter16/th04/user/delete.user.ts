const actionClickDelete = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", async () => {
        const id = btnElement.getAttribute("data-delete-id");
        if (id) {
            await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            //@ts-ignore
            const toast = new bootstrap.Toast("#deleteUserToast");
            toast.show();

            const row = btnElement.closest('tr');
            if (row) row.remove();
        }
    })
}

const handleDeleteUser = () => {
    const deleteBtns = document.querySelectorAll(".delete-user");
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            actionClickDelete(btnElement);
        })
    }
}

export { handleDeleteUser, actionClickDelete }