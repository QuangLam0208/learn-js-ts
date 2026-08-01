console.log("video 128");
const a = { data: "persy" };
const b = { data: 3263 };
const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataApi = await res.json();
    const result = {
        status: 200,
        data: dataApi
    };
};
export {};
