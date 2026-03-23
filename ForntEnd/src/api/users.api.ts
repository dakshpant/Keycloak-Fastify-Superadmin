import api from "../utils/api";

//GET USERS
export const getUsers = async () => {
    const res = await api.get("/users");
    return res.data;
};

//DELETE USER
export const deleteUser = async (id: string) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
};

export const updateUser = async (id: string, data: any) => {
    console.log("🔥 CALLING updateUser API");

    const res = await api.put(`/users/${id}`, data);

    console.log("✅ updateUser response:", res);

    return res.data;
};

export const updateUserRole = async (id: string, role: string) => {
    console.log("🔥 CALLING updateUserRole API");

    const res = await api.put(`/users/${id}/role`, { role });

    console.log("✅ updateUserRole response:", res);

    return res.data;
};