export {};
console.log("video 107");

interface IUser {
    id: number,
    email: string,
    name: string
}

const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users");
    // casting data tu any sang IUser
    // const data = (await res.json()) as IUser[]; // c1
    const data: IUser[] = await res.json() // c2
    console.log(">>> check data:", data)
}

fetchUser()