'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import { authService } from '@/apis/index';

const FormInput = ({ icon: Icon, name, placeholder, value, onChange, required, type = "text", showPasswordToggle }) => (
    <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
        />
        {showPasswordToggle && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                {type === "password" ? (
                    <FaEyeSlash className="text-gray-400" onClick={showPasswordToggle} />
                ) : (
                    <FaEye className="text-gray-400" onClick={showPasswordToggle} />
                )}
            </div>
        )}
    </div>
);

const SetPassword = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePasswordToggle = () => setShowPassword(prev => !prev);
    const handleConfirmPasswordToggle = () => setShowConfirmPassword(prev => !prev);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await authService.setPassword(formData.password);
            setSuccess('Password has been successfully set! Redirecting...');
            
            // Redirect after 3 seconds
            setTimeout(() => {
                router.push('/');
            }, 3000);
        } catch (err) {
            setError(err.message || 'Failed to set password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full py-5 shd border-[#e0e1ff] max-w-md mx-auto">
            <div className='flex justify-center items-center mb-4'>
                <Image src='/images/evanik-logo-icon.png' alt='' height={32} width={92} />
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <FormInput
                    icon={FaLock}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    type={showPassword ? "text" : "password"}
                    showPasswordToggle={handlePasswordToggle}
                />

                <FormInput
                    icon={FaLock}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    showPasswordToggle={handleConfirmPasswordToggle}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {loading ? 'Setting Password...' : 'Set Password'}
                </button>
            </form>
        </div>
    );
};

export default SetPassword;
