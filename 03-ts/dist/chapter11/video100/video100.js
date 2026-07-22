"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 100");
const user = "User";
const admin = "Admin";
const superAdmin = 1;
const otherUser = "ADMIN";
var ERole;
(function (ERole) {
    ERole["USER"] = "USER";
    ERole["SUPERADMIN"] = "SUPERADMIN";
    ERole["ADMIN"] = "ADMIN";
})(ERole || (ERole = {}));
const myRole = ERole.SUPERADMIN;
const myRole1 = ERole.ADMIN;
console.log(`>> enum myRole: ${myRole}.    
>> enum myRole1: ${myRole1}.`);
