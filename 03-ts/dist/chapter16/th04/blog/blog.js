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
import { handleCreateBlog } from "./create.blog.js";
import { handleDeleteBlog } from "./delete.blog.js";
import { fetchBlogs } from "./read.blog.js";
import { actionSubmitModal, handleUpdateBlog } from "./update.blog.js";
fetchBlogs().then(() => {
    handleDeleteBlog();
    handleUpdateBlog();
});
handleCreateBlog();
actionSubmitModal();
