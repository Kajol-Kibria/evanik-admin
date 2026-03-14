import axiosInstance from "@/api/axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import { setAuthCookieNative, setRefreshTokenCookieNative } from "@/api/cookies";


export const register = async (userData) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER.REGISTER, userData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const resendVerification = async (email) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER.RESEND_VERIFICATION, { email });
        return response;
    } catch (error) {
        throw error;
    }
}

export const verifyEmail = async (token) => {
    const payload = { token: token }
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.USER.VERIFY_EMAIL, { params: payload });
        return response;
    } catch (error) {
        throw error;
    }
}

export const setPassword = async (token, password) => {
    const payload = {
        token: token,
        password: password
    }
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER.SET_PASSWORD, payload);
        return response;
    } catch (error) {
        throw error;
    }
}

export const login = async (credentials) => {
    try {
        const response = await axiosInstance.post(API_ENDPOINTS.USER.LOGIN, credentials);

        // Extract tokens from response
        const accessToken = response?.data?.accessToken;
        const refreshToken = response?.data?.refreshToken;

        // Store the access token
        if (accessToken) {
            setAuthCookieNative(accessToken);
            // Set the default Authorization header for future requests
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        } else {
            console.warn("Access token not found in login response data.");
        }

        // Store the refresh token
        if (refreshToken) {
            console.log("Setting refresh token cookie...");
            setRefreshTokenCookieNative(refreshToken);
        } else {
            console.warn("Refresh token not found in login response data.");
        }

        // Check if there's a stored redirect path from a previous session
        if (typeof window !== 'undefined') {
            const redirectPath = sessionStorage.getItem('redirectAfterLogin');
            if (redirectPath) {
                // Clear the stored path
                sessionStorage.removeItem('redirectAfterLogin');
                // Redirect the user to their previous page
                window.location.href = redirectPath;
                return response.data;
            }
        }

        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}


