import axios from "axios";

const API_URL = "http://localhost:8000";

export const uploadDocument = async (user_id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append('user_id', user_id.toString()); // Append the user_id to the form data

    
    try {
        await axios.post(`${API_URL}/documents/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        });
        return true;
    } catch (error) {
        console.error("Error uploading document:", error);
        return false;
    }
    };

export const getDocuments = async () => {
    try {
    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // Ensure CORS mode
        };
        const response = await axios.get(`${API_URL}/documents/all`, config);
        return response.data;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
}

export const getDocumentsByUser = async (id: number) => {
    try {
        const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // Ensure CORS mode
        };
        const response = await axios.get(`${API_URL}/documents/id/${id}`, config);
        return response.data;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
}