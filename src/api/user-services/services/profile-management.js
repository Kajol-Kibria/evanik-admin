import axiosInstance from "@/api/axiosInstance";
import { API_ENDPOINTS } from "../endpoints";

const getProfile = async () => {
   try {
    const response = await axiosInstance.get(API_ENDPOINTS.USER.GET_PROFILE);
    return response.data;
   } catch (error) {
    throw error;
   }
}

const updateProfile = async (profileData) => {
    try {
        const response = await axiosInstance.put(API_ENDPOINTS.USER.UPDATE_PROFILE, profileData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { getProfile, updateProfile };