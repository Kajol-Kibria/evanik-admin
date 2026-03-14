import axiosInstance from "@/api/axiosInstance";
import { API_ENDPOINTS } from "../endpoints";


export const forgotPassword = async (email) => {
    console.log(email);
    
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER.FORGET_PASSWORD, email);
        return response;
    } catch (error) {
        throw error;
    }
}

export const resetPassword = async (resetData) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER.FORGET_PASSWORD, resetData);
        return response;
    } catch (error) {
        throw error;
    }
}