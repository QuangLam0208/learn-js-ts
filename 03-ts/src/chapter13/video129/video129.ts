export {};
console.log("video 128");

interface IData<T> {
    data: T 
}

const a: IData<string> = { data: "persy" };
const b: IData<number> = { data: 3263 };

interface IAPIResponse<T> {
    status: number;
    data: T;
}

interface IUser {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataApi: IUser[] = await res.json();

    const result: IAPIResponse<IUser[]> =  {
        status: 200,
        data: dataApi
    }
}
