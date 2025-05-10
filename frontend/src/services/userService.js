import api from "./api.js";

export const registerUser = async (userData) => {
    const response = await api.post("/user", userData);
    return response.data;
};

export const authPassword = async (authData) => {
    const response = await api.post("/auth_password", authData)
    return response.data
}