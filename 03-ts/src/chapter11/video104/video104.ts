export {};
console.log("video 104");

// Type Alias
// ho tro Union (type Status = "success" | "error" ) & Intersection (type A = B & C)
type TUser = { name: string | number; age: number } 
// ho tro primitive/tuple
// dung & de ket hop (intersection)
// kho mo rong (phai tao lai type)
// => dung khi can union, tuple, primitive, intersection

// Interface
// ko ho tro Union & Intersection, chi dung cho object
interface IUser { name: string; age: number }
// dung extends de ke thua
// declaration merging => de mo rong sau nay
interface IUser {adress: string}
// => dung khi lam viec voi object dinh hinh ro rang va muon mo rong / ke thua


