import axios from 'axios';
import { getAuthCookieNative, removeAuthCookieNative, setAuthCookieNative, getRefreshTokenCookieNative } from './cookies';
import { API_ENDPOINTS } from './user-services/endpoints';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!baseURL) {
  console.warn('Warning: NEXT_PUBLIC_BACKEND_URL is not set in environment variables');
}

const axiosInstance = axios.create({
  baseURL: baseURL || 'https://endpoint.evanik.com/evanik-backend',
  headers: {
    'Content-Type': 'application/json'
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthCookieNative();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => {
    // Success handler
    return response.data;
  },
  async (error) => {
    console.log('Error interceptor called', error);
    const originalRequest = error.config;

    // Check if error is due to unauthorized access
    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log('401 error detected, attempting token refresh');

      // If we're already refreshing token, add request to queue
      if (isRefreshing) {
        console.log('Already refreshing token, adding to queue');
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        console.log('Attempting to refresh token');
        const refreshToken = getRefreshTokenCookieNative();

        if (!refreshToken) {
          console.error('No refresh token available');
          throw new Error('No refresh token available');
        }

        // Call refresh token endpoint using the base URL to ensure consistency
        const response = await axios.post(`${baseURL || 'https://endpoint.evanik.com/evanik-backend'}${API_ENDPOINTS.USER.REFRESH_TOKEN}`, {
          refreshToken: refreshToken,
        });

        // Check if the response is valid
        if (!response || !response.data) {
          console.error('Invalid response from refresh token endpoint');
          throw new Error('Invalid response from refresh token endpoint');
        }

        const newAccessToken = response?.data?.accessToken;

        if (!newAccessToken) {
          console.error('No access token received from refresh');
          throw new Error('No access token received');
        }

        // Store the new token
        setAuthCookieNative(newAccessToken);

        // Update default headers for all future requests
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        // Process queued requests
        processQueue(null, newAccessToken);

        // Retry the original request
        console.log('Retrying original request with new token');
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);

      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);

        // Clear auth tokens since they're invalid
        removeAuthCookieNative();

        // Process any queued requests with the error
        processQueue(refreshError, null);

        // Only redirect to login page if the refresh token is actually invalid
        // This prevents unnecessary redirects for temporary server issues
        if (refreshError.response?.status === 401 || 
            refreshError.response?.status === 403 ||
            refreshError.message === 'No refresh token available' ||
            refreshError.message === 'No access token received') {
          console.log('Authentication failed permanently, redirecting to login page');
          
          // Store the current URL before redirecting
          if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            // You could store this path in sessionStorage to redirect back after login
            if (currentPath !== '/' && !currentPath.includes('/login')) {
              sessionStorage.setItem('redirectAfterLogin', currentPath);
            }
            window.location.href = '/';
          }
        } else {
          console.log('Token refresh failed due to temporary error, not redirecting');
          // For temporary errors like network issues, don't redirect
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    console.log('Non-401 error, rejecting');
    // For other errors, just reject with the error
    return Promise.reject(error.response?.data || error);
  }
);

export default axiosInstance;