import { actionClickDelete } from "./delete.user.js";
import { actionClickUpdate } from "./update.user.js";
import { IUser } from "./user.js";

const addNewRowWithJS = (user: IUser) => {
    const tableBody = document.querySelector("#tableUser tbody")!;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="btn btn-warning edit-user"
                                    data-update-id="${user.id}"
                                    data-name="${user.name}"
                                    data-email="${user.email}"
                            >Edit</button>
                            <button class="btn btn-danger delete-user"
                                    data-delete-id=${user.id}
                            >Delete</button>
                        </td>
                    </tr>
    `
    tableBody.appendChild(newRow);

    const btnDeleteElement = document.querySelector(`[data-delete-id="${user.id}"]`)! as HTMLButtonElement;
    actionClickDelete(btnDeleteElement);

    const btnUpdateElement = document.querySelector(`[data-update-id="${user.id}"]`)! as HTMLButtonElement;
    actionClickUpdate(btnUpdateElement);
}

const submitModalCreate = () => {
    const btnCreate = document.getElementById("btnCreateUser");
    if (btnCreate) {
        btnCreate.addEventListener("click", async () => {
            const nameInput = document.getElementById("name")! as HTMLInputElement;
            const emailInput = document.getElementById("email")! as HTMLInputElement;

            const name = nameInput.value;
            const email = emailInput.value;

            if (!name || !email) {
                alert("Field can not empty.");
                return;
            }

            const rawResponse = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });

            const res: IUser = await rawResponse.json();
            addNewRowWithJS(res);

            //@ts-ignore
            const modalUser = bootstrap.Modal.getOrCreateInstance('#modalUser', {
                keyboard: false
            })
            modalUser.hide();

            //@ts-ignore
            const toast = new bootstrap.Toast("#createUserToast");
            toast.show();

            nameInput.value = "";
            emailInput.value = "";
        })
    }
}

export { submitModalCreate, addNewRowWithJS }