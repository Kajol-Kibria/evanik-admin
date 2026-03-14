import { BASE_USER_API_PATH, USER_API_PATH } from '@/api/config';
const BASE_API_PATH = BASE_USER_API_PATH;

export const API_ENDPOINTS = {
  USER: {
    // Registration Flow
    REGISTER: `${BASE_API_PATH}/register`,
    RESEND_VERIFICATION: `${BASE_API_PATH}/resend-verification`,
    VERIFY_EMAIL: `${BASE_API_PATH}/verify-email`,
    SET_PASSWORD: `${BASE_API_PATH}/complete-registration`,
    LOGIN: `${BASE_API_PATH}/login`,
    REFRESH_TOKEN: `${BASE_API_PATH}/refresh`,

    // Auth & Session
    GET_SESSION: `${BASE_API_PATH}/session`,
    LOGOUT: `${BASE_API_PATH}/logout`,
    LOGOUT_ALL: `${BASE_API_PATH}/logout-all`,

    // Profile Management
    GET_PROFILE: `${USER_API_PATH}/profile`,
    UPDATE_PROFILE: `${USER_API_PATH}/profile`,

    // Password Management
    FORGET_PASSWORD: `${BASE_API_PATH}/forgot-password`,
    RESET_PASSWORD: `${BASE_API_PATH}/reset-password`,
  }
  // Add other resources if needed
};
