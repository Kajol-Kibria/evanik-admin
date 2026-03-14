import Cookies from 'js-cookie';

const AUTH_TOKEN_COOKIE_NAME = 'auth-token';
const REFRESH_TOKEN_COOKIE_NAME = 'refresh-token';

// Determine secure option based on environment (similar to previous logic)
const isSecure = process.env.NODE_ENV === 'production' || (typeof window !== 'undefined' && window.location.protocol === 'https:');

// --- Auth Token Functions ---

export const setAuthCookieNative = (token) => {
  if (!token) {
    console.warn('setAuthCookieNative: Token value is missing.');
    return;
  }
  try {
    Cookies.set(AUTH_TOKEN_COOKIE_NAME, token, {
      expires: 7, // Expires in 7 days
      path: '/',
      secure: isSecure,
      sameSite: 'Lax' // Good balance for auth tokens
    });
  } catch (error) {
    console.error(`Error setting cookie "${AUTH_TOKEN_COOKIE_NAME}" with js-cookie:`, error);
  }
};

export const getAuthCookieNative = () => {
  try {
    return Cookies.get(AUTH_TOKEN_COOKIE_NAME); // Returns the cookie value or undefined
  } catch (error) {
    console.error(`Error getting cookie "${AUTH_TOKEN_COOKIE_NAME}" with js-cookie:`, error);
    return undefined;
  }
};

export const removeAuthCookieNative = () => {
  try {
    Cookies.remove(AUTH_TOKEN_COOKIE_NAME, { path: '/' });
  } catch (error) {
    console.error(`Error removing cookie "${AUTH_TOKEN_COOKIE_NAME}" with js-cookie:`, error);
  }
};

// --- Refresh Token Cookie Functions ---

export const setRefreshTokenCookieNative = (token) => {
  if (!token) {
    console.warn('setRefreshTokenCookieNative: Token value is missing.');
    return;
  }
  try {
    Cookies.set(REFRESH_TOKEN_COOKIE_NAME, token, {
      expires: 30, // Expires in 30 days (adjust as needed)
      path: '/',
      secure: isSecure,
      sameSite: 'Strict' // Stricter fsor refresh tokens
    });
  } catch (error) {
    console.error(`Error setting cookie "${REFRESH_TOKEN_COOKIE_NAME}" with js-cookie:`, error);
  }
};

export const getRefreshTokenCookieNative = () => {
  try {
    return Cookies.get(REFRESH_TOKEN_COOKIE_NAME);
  } catch (error) {
    console.error(`Error getting cookie "${REFRESH_TOKEN_COOKIE_NAME}" with js-cookie:`, error);
    return undefined;
  }
};

export const removeRefreshTokenCookieNative = () => {
  try {
    Cookies.remove(REFRESH_TOKEN_COOKIE_NAME, { path: '/' });
  } catch (error) {
    console.error(`Error removing cookie "${REFRESH_TOKEN_COOKIE_NAME}" with js-cookie:`, error);
  }
};