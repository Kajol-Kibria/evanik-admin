import axiosInstance from "../axiosInstance";
import API_ENDPOINTS from "../end-points";

export const PLANS_SERVICES = {
    GET: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.PLANS.GET_PLANS);
        return response.data;
    },

    GET_BY_ID: async (id) => {
        const response = await axiosInstance.get(`${API_ENDPOINTS.PLANS.GET_PLANS}/${id}`);
        return response.data;
    },

    CREATE: async (data) => {
        const response = await axiosInstance.post(API_ENDPOINTS.PLANS.CREATE_PLAN, data);
        return response.data;
    },

    UPDATE: async (id, data) => {
        const response = await axiosInstance.put(`${API_ENDPOINTS.PLANS.UPDATE_PLAN}/${id}`, data);
        return response.data;
    },

    DELETE: async (id) => {
        const response = await axiosInstance.delete(`${API_ENDPOINTS.PLANS.DELETE_PLAN}/${id}`);
        return response.data;
    },

    HEALTH_CHECK: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.PLANS.HEALTH_CHECK);
        return response.data;
    },
};
