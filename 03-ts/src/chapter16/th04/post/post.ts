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

import { submitModalCreate } from "./create.post.js";
import { handleDeletePost } from "./delete.post.js";
import { fetchPostsAndDisplayTable } from "./read.post.js";
import { handleUpdatePost, submitModalUpdate } from "./update.post.js";

export interface IPost {
    id: number;
    title: string;
    content: string;
}

fetchPostsAndDisplayTable().then(() => {
    handleUpdatePost();
    handleDeletePost();
})
submitModalCreate();
submitModalUpdate();