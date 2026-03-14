# Evanik Users Dashboard

This is a comprehensive business management dashboard built with Next.js, designed to help businesses manage their operations efficiently. The dashboard includes various features for managing orders, inventory, sales, and more.

## 🏗️ Project Structure

The project is built using modern web technologies:
- Next.js 15.2.0 (React framework)
- Tailwind CSS for styling
- Material UI components
- Various other modern React libraries

## 📱 Pages and Features

The dashboard includes the following main sections:

### 1. Authentication & User Management
- Login page
- Password reset functionality
- Onboarding process
- User profile management

### 2. Order Management
- Order processing
- Order details view
- Order management dashboard
- Dispatch order system
- Returns management

### 3. Inventory Management
- Main inventory dashboard
- Inventory ledger
- Inventory planning
- Inventory reconciliation
- FBA (Fulfillment by Amazon) inventory
- Restock management

### 4. Sales & Customer Management
- Sales management
- Sales dashboard
- Customer management
- Commission invoices

### 5. Supplier & Vendor Management
- Supplier management
- Vendor management
- Purchase management

### 6. Financial Management
- Settlement processing
- Reconciliation summary

## 🛠️ Technical Features

- Modern, responsive design
- Interactive charts and data visualization
- File upload and management capabilities
- Pagination for large data sets
- Modal dialogs for detailed views
- Custom UI components

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Start the production server:
```bash
npm start
```

## 📦 Dependencies

The project uses several key libraries:
- Next.js for the framework
- React for UI components
- Tailwind CSS for styling
- Material UI for component library
- Various data visualization and file handling libraries

## 🔒 Security

The application includes secure authentication and password management features to ensure data security.

## 📱 Responsive Design

The dashboard is fully responsive and works well on both desktop and mobile devices.

## 🤝 Support

For any technical support or questions, please contact the development team.

# Evanik Users Dashboard - Authentication Documentation

## Authentication Flow

The authentication system consists of three main parts:
1. User Registration
2. Email Verification & Password Setup
3. User Login

### 1. User Registration

**Endpoint:** `/api/v1/user/register`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "mobileNumber": "9876543210",
  "companyName": "Tech Corp", // Optional
  "pincode": "400001"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Registration successful. Please check your email for verification.",
  "data": {
    "userId": "user-id",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": {
    "message": "User already exists with this email"
  }
}
```

**Integration Example:**
```javascript
// In RegisterForm component
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await authService.register({
            firstName,
            lastName,
            email,
            mobileNumber,
            companyName,
            pincode
        });
        // Redirect to verification message page
        router.push('/verify-email');
    } catch (error) {
        setError(error.message);
    }
};
```

### 2. Set Password (After Email Verification)

**Endpoint:** `/api/v1/user/set-password`

**Request Body:**
```json
{
  "token": "verification-token-from-email",
  "password": "newSecurePassword"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Password set successfully. You can now login.",
  "data": {
    "userId": "user-id",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_TOKEN",
    "message": "The verification token is invalid or has expired"
  }
}
```

**Integration Example:**
```javascript
// In SetPasswordForm component
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await authService.setPassword(token, password);
        router.push('/login?message=Password set successfully');
    } catch (error) {
        setError(error.message);
    }
};
```

### 3. User Login

**Endpoint:** `/api/v1/user/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "userPassword"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "error": {
    "message": "Invalid email or password"
  }
}
```

**Integration Example:**
```javascript
// In LoginCard component
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await authService.login(email, password);
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        router.push('/dashboard');
    } catch (error) {
        setError(error.message);
    }
};
```

## API Service Implementation

The authentication service is implemented in `src/apis/user_management_services/services/authService.js`:

```javascript
export const authService = {
    // Register new user
    register: async (userData) => {
        const response = await apiRequest.post(USER_ENDPOINTS.AUTH.REGISTER, userData);
        return response;
    },

    // Login user
    login: async (email, password) => {
        const response = await apiRequest.post(USER_ENDPOINTS.AUTH.LOGIN, { 
            email, 
            password 
        });
        if (response.data?.token) {
            localStorage.setItem('auth_token', response.data.token);
        }
        return response;
    },

    // Set password after verification
    setPassword: async (token, password) => {
        const response = await apiRequest.post(USER_ENDPOINTS.AUTH.SET_PASSWORD, {
            token,
            password
        });
        return response;
    },

    // Logout user
    logout: async () => {
        await apiRequest.post(USER_ENDPOINTS.AUTH.LOGOUT);
        localStorage.removeItem('auth_token');
    }
};
```

## Environment Configuration

The API base URL is configured in `.env`:

```env
NEXT_PUBLIC_BACKEND_URL=https://your-api-url.com
```

## Error Handling

All API responses are automatically handled by the `axiosInstance` interceptor:

```javascript
axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('auth_token');
            window.location.href = '/login';
        }
        return Promise.reject(error.response?.data || error);
    }
);
```

## Security Features

1. Automatic token management
2. Password strength validation
3. Email verification requirement
4. Session management with remember me functionality
5. Secure password storage
6. Protected routes
7. Automatic logout on token expiration

## UI Components

All authentication forms include:
- Input validation
- Loading states
- Error messages
- Success feedback
- Responsive design
- Animated transitions
- Accessibility features
