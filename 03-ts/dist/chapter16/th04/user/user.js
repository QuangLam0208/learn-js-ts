/*
* Author: Hỏi Dân IT - @hoidanit
*
* This source code is developed for the course
* "TypeScript Pro - Tự Học TypeScript & JavaScript từ số 0".
* It is intended for educational purposes only.
* Unauthorized distribution, reproduction, or modification is strictly prohibited.
*
* Copyright (c) 2025 Hỏi Dân IT. All Rights Reserved.
*/
import { submitModalCreate } from "./create.user.js";
import { handleDeleteUser } from "./delete.user.js";
import { fetchUsersAndDisplayTable } from "./read.user.js";
import { handleUpdateUser, submitModalUpdate } from "./update.user.js";
fetchUsersAndDisplayTable().then(() => {
    handleDeleteUser();
    handleUpdateUser();
});
submitModalCreate();
submitModalUpdate();
