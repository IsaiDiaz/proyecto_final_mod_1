import api from "./api";

export const createTask = async (taskData) => {
    const response = await api.post('/task', taskData);
    return response.data;
}

export const getTodayTasksByUserId = async (userId, status = '', query = '') => {
    const response = await api.get(`/tasks/${userId}/today`, {
        params: { status, query }
    });
    return response.data;
}

export const getTasksByUserId = async (userId, status = '', query = '') => {
    const response = await api.get(`/tasks/${userId}`, {
        params: { status, query }
    });
    return response.data;
};

export const updateTask = async (taskId, taskData) => {
    const response = await api.put(`/task/${taskId}`, taskData);
    return response.data;
}

export const updateProgress = async (taskId) => {
    const response = await api.put(`/task/${taskId}/progress`);
    return response.data;
}

export const deleteTask = async (taskId) => {
    const response = await api.delete(`/task/${taskId}`);
    return response.data;
}