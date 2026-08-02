import { addNewRowWithJS } from "./create.user.js";

const submitModalUpdate = () => {
    const updateBtn = document.getElementById("btnUpdateUser");
    if (updateBtn) {
        updateBtn.addEventListener('click', async () => {
            const idElement = document.getElementById('idUpdate')! as HTMLInputElement;
            const nameElement = document.getElementById('nameUpdate')! as HTMLInputElement;
            const emailElement = document.getElementById('emailUpdate')! as HTMLInputElement;

            await fetch(`http://localhost:8000/users/${idElement.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameElement.value,
                    email: emailElement.value,
                })
            });

            const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`)!;
            const row = btnUpdateElement.closest("tr");
            if (row) row.remove();

            addNewRowWithJS({
                id: +idElement.value,
                name: nameElement.value,
                email: emailElement.value
            })

            //@ts-ignore
            const modalUpdateUser = bootstrap.Modal.getOrCreateInstance('#modalUpdateUser', {
                keyboard: false
            })
            modalUpdateUser.hide();

            //@ts-ignore
            const toast = new bootstrap.Toast("#updateUserToast");
            toast.show();
        })
    }
}

const actionClickUpdate = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener('click', () => {
        const idElement = document.getElementById('idUpdate')! as HTMLInputElement;
        const nameElement = document.getElementById('nameUpdate')! as HTMLInputElement;
        const emailElement = document.getElementById('emailUpdate')! as HTMLInputElement;

        idElement.value = btnElement.getAttribute('data-update-id')!;
        nameElement.value = btnElement.getAttribute('data-name')!;
        emailElement.value = btnElement.getAttribute('data-email')!;

        //@ts-ignore
        const modalUpdateUser = bootstrap.Modal.getOrCreateInstance('#modalUpdateUser', {
            keyboard: false
        })
        modalUpdateUser.show();
    })
}

const handleUpdateUser = () => {
    const updateBtns = document.querySelectorAll(".edit-user");
    if (updateBtns) {
        updateBtns.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            actionClickUpdate(btnElement);
        })
    }
}

export { handleUpdateUser, actionClickUpdate, submitModalUpdate }