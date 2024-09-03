import axios from "axios";

const API_URL = "http://localhost:8000"; // Change this to your backend URL

export const register = async (userData: any) => {
    try {
        const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // Ensure CORS mode
        };
        const response = await axios.post(`${API_URL}/users/create`, userData, config);
        return response.data;
    } catch (error: any) {
        throw error.response.data.detail || "An error occurred while registering";
    }
    };