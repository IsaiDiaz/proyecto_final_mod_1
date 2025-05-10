import api from "./api.js";

export const registerUser = async (userData) => {
    const response = await api.post("/user", userData);
    return response.data;
};