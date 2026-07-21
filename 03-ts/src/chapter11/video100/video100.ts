export {};
console.log("video 100");

type TRole = string | number;

type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN"; // literal types: cong dung nhu enum

const user: TRole = "User";
const admin: TRole = "Admin";
const superAdmin: TRole = 1;

const otherUser: TSuperRole = "ADMIN";

enum ERole {
    USER = "USER", 
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN"
}

const myRole: ERole = ERole.SUPERADMIN;
const myRole1: ERole = ERole.ADMIN;

console.log(`>> enum myRole: ${myRole}.    
>> enum myRole1: ${myRole1}.`);
