import api from "../utils/api";

export const login = async (data: {
    username: string;
    password: string;
}) => {
    const res = await api.post("/auth/login", data);

    return res.data;
};

export const userProfile = async () => {
    const res = await api.get("/auth/profile");
    return res.data;
}

export const logout = async () => {
    const res = await api.post("/auth/logout");
    return res.data;
};