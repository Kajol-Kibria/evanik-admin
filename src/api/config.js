const API_VERSION = 'v1';
const USER_ROUTE_PREFIX = 'user';
const AUTH_ROUTE_PREFIX = 'auth';
const PLANS_ROUTE_PREFIX = 'plans';




export const BASE_USER_API_PATH = `/api/${API_VERSION}/${USER_ROUTE_PREFIX}/${AUTH_ROUTE_PREFIX}`; // Relative path
export const USER_API_PATH = `/api/${API_VERSION}/${USER_ROUTE_PREFIX}`; 
export const PLANS_API_PATH = `/api/${API_VERSION}/${PLANS_ROUTE_PREFIX}`;
export const AMAZON_API_PATH = `/api/${API_VERSION}/amazon`