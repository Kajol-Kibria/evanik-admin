import { AMAZON_API_PATH, PLANS_API_PATH } from "./config";

const API_ENDPOINTS = {
   PLANS: {
    CREATE_PLAN: `${PLANS_API_PATH}`,
    GET_PLANS: `${PLANS_API_PATH}`,
    HEALTH_CHECK: `${PLANS_API_PATH}/health-check`,
   },

   CHANNELS:{
      AMAZON_AUTH:`${AMAZON_API_PATH}/auth/authorize?marketplaceIds=A21TJRUUN4KGV`,
      FLIPKART_AUTH:`${AMAZON_API_PATH}/auth/authorize?marketplaceIds=A21TJRUUN4KGV`,
      SNAPDEAL_AUTH:`${AMAZON_API_PATH}/auth/authorize?marketplaceIds=A21TJRUUN4KGV`
   }
   
};

export default API_ENDPOINTS;