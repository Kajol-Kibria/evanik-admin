import axiosInstance from "@/api/axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import { removeAuthCookieNative } from "@/api/cookies";

export const getSession = async () => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.USER.GET_SESSION);
        return response;
    } catch (error) {
        throw error;
    }
}

export const logout = async () =>{
    removeAuthCookieNative()
    // try {
    //    const response = await axiosInstance.post(API_ENDPOINTS.USER?.LOGOUT,{});
    //    return response;
    // } catch (error) {
    //     throw error;
    // }
}
