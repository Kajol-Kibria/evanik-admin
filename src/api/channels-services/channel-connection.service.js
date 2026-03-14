import axiosInstance from "../axiosInstance"
import API_ENDPOINTS from "../end-points"

export const CHANNELS_C0NNECTION = {
    AMAZON_AUTH: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.AMAZON_AUTH);
        console.log(response?.authorization_url            ,'response')
        return response;
    },
    FLIPKART_AUTH: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.AMAZON_AUTH);
        return response?.data?.data;
    },
    SNAPDeal_AUTH: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.CHANNELS.AMAZON_AUTH);
        return response?.data?.data;
    },
    
}