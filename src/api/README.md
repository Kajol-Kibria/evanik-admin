# API Services Documentation
Last Updated: March 26, 2024

## Completed Services
### User Management Services ✅
- Registration Flow
- Authentication
- Session Management
- Profile Management
- Password Management

## Structure
```
src/apis/
├── axiosInstance.js              # Base axios configuration with cookie auth
├── cookies.js                    # Cookie management utilities
├── index.js                      # Main export file
└── user-services/               # User Management Services
    ├── endpoints.js             # API endpoints configuration
    └── services/
        ├── user-registration-flow.js    # Registration & Auth
        ├── profile-management.js        # Profile operations
        ├── password-management.js       # Password operations
        ├── session-management.js        # Session handling
        └── sub-user-management.js       # Sub-user operations
```

## API Endpoints

### User Registration Flow
```javascript
API_ENDPOINTS.USER = {
  REGISTER: '/api/v1/user/register',
  RESEND_VERIFICATION: '/api/v1/user/resend-verification',
  VERIFY_EMAIL: '/api/v1/user/verify-email',
  SET_PASSWORD: '/api/v1/user/set-password',
  LOGIN: '/api/v1/user/login'
}
```

### Session Management
```javascript
API_ENDPOINTS.USER = {
  GET_SESSION: '/api/v1/user/session',
  LOGOUT: '/api/v1/user/logout',
  LOGOUT_ALL: '/api/v1/user/logout-all'
}
```

### Profile Management
```javascript
API_ENDPOINTS.USER = {
  GET_PROFILE: '/api/v1/user/profile',
  UPDATE_PROFILE: '/api/v1/user/profile'
}
```

### Password Management
```javascript
API_ENDPOINTS.USER = {
  FORGET_PASSWORD: '/api/v1/user/forget-password',
  RESET_PASSWORD: '/api/v1/user/reset-password'
}
```

## Usage Examples

### Registration Flow
```javascript
import { register, setPassword, login, resendVerification, verifyEmail } from '@/api';

// Register new user
try {
  await register({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    mobileNumber: '1234567890',
    companyName: 'Acme Inc', // optional
    pincode: '400001'
  });
} catch (err) {
  // Handle registration error
  console.error(err?.error?.message);
}

// Set password
try {
  await setPassword(token, 'newPassword123');
} catch (err) {
  console.error(err?.error?.message);
}

// Login
try {
  const response = await login({
    email: 'john@example.com',
    password: 'password123'
  });
  // Token automatically stored in cookies
} catch (err) {
  console.error(err?.error?.message);
}
```

## Authentication

The system uses secure HTTP-only cookies for authentication:
- Tokens are automatically stored in cookies upon login
- Cookies are automatically included in all requests
- Secure and HttpOnly flags are set in production
- Automatic token refresh handling
- Automatic redirect to login on 401 errors

## Error Handling

All API responses follow this structure:
```javascript
// Success Response
{
  "success": true,
  "data": { ... }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "Error description"
  }
}
```

## Environment Variables
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
NEXT_PUBLIC_API_TIMEOUT=30000
```

## Security Features
- HTTP-only cookies for token storage
- CSRF protection
- Secure cookie flags in production
- Automatic session handling
- Request/Response interceptors

## Best Practices
1. Always use try-catch blocks with async operations
2. Handle both success and error states in UI
3. Use loading states during API calls
4. Validate input before sending to API
5. Follow the established error handling pattern

## Upcoming Features
- [ ] Two-Factor Authentication
- [ ] OAuth Integration
- [ ] Role-Based Access Control
- [ ] API Rate Limiting
- [ ] Enhanced Error Logging

## Contributors
- Development Team
- Last Updated: March 26, 2024 

## Detailed API Documentation

### 1. User Registration
```javascript
// API Call
const register = async (userData) => {
  try {
    const response = await register({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      mobileNumber: '1234567890',
      companyName: 'Acme Inc', // optional
      pincode: '400001'
    });
    return response;
  } catch (err) {
    // err.error.message contains the error message
    throw err;
  }
}

// Success Response
{
  "success": true,
  "data": {
    "userId": "123456",
    "email": "john@example.com",
    "message": "Registration successful. Please verify your email."
  }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "User already exists with this email"
  }
}
```

### 2. Resend Verification Email
```javascript
// API Call
const resendVerification = async (email) => {
  try {
    const response = await resendVerification('john@example.com');
    return response;
  } catch (err) {
    throw err;
  }
}

// Success Response
{
  "success": true,
  "data": {
    "message": "Verification email sent successfully"
  }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "Email not found" // or other error messages
  }
}
```

### 3. Set Password
```javascript
// API Call
const setPassword = async (password) => {
  try {
    const response = await setPassword({
      password: 'newSecurePassword123'
    });
    return response;
  } catch (err) {
    throw err;
  }
}

// Success Response
{
  "success": true,
  "data": {
    "message": "Password set successfully"
  }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "Password must be at least 8 characters" // or other validation errors
  }
}
```

### 4. Login
```javascript
// API Call
const login = async (credentials) => {
  try {
    const response = await login({
      email: 'john@example.com',
      password: 'password123'
    });
    return response;
  } catch (err) {
    throw err;
  }
}

// Success Response
{
  "success": true,
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "123456",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "Invalid credentials"
  }
}
```

### 5. Get Profile
```javascript
// API Call
const getProfile = async () => {
  try {
    const response = await getProfile();
    return response;
  } catch (err) {
    throw err;
  }
}

// Success Response
{
  "success": true,
  "data": {
    "user": {
      "id": "123456",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "mobileNumber": "1234567890",
      "companyName": "Acme Inc",
      "pincode": "400001"
    }
  }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "Unauthorized access"
  }
}
```

### 6. Update Profile
```javascript
// API Call
const updateProfile = async (profileData) => {
  try {
    const response = await updateProfile({
      firstName: "John Updated",
      lastName: "Doe Updated",
      mobileNumber: "9876543210",
      companyName: "New Company",
      pincode: "400002"
    });
    return response;
  } catch (err) {
    throw err;
  }
}

// Success Response
{
  "success": true,
  "data": {
    "message": "Profile updated successfully",
    "user": {
      "id": "123456",
      "firstName": "John Updated",
      "lastName": "Doe Updated",
      // ... updated fields
    }
  }
}

// Error Response
{
  "success": false,
  "error": {
    "message": "Invalid mobile number format"
  }
}
```

### Error Handling in Components

```javascript
// Example in a React component
const MyComponent = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await someApiCall();
      // Handle success
    } catch (err) {
      setError(err?.error?.message || 'Something went wrong');
      
      // Handle specific error cases
      if (err?.error?.message === 'User already exists with this email') {
        // Handle existing user case
      }
    } finally {
      setLoading(false);
    }
  };
};
```

### Common HTTP Status Codes
- 200: Success
- 400: Bad Request (validation errors)
- 401: Unauthorized (invalid/expired token)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 500: Server Error

### Security Notes
1. All passwords must be:
   - Minimum 8 characters
   - Include at least one number
   - Include at least one special character

2. Token Storage:
   - Stored in HTTP-only cookies
   - Secure flag in production
   - Automatic expiration handling

3. Rate Limiting:
   - 100 requests per minute per IP
   - 5 failed login attempts per 15 minutes

### Testing API Calls
```javascript
// Using try-catch
try {
  const response = await apiCall();
  console.log('Success:', response);
} catch (err) {
  console.error('Error:', err?.error?.message);
}

// Using async/await with error boundaries
const response = await apiCall().catch(err => {
  console.error('Error:', err?.error?.message);
  return null;
});
``` 