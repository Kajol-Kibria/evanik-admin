'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { login } from '@/api/index';

export default function LoginCard() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (!formData.email || !formData.password) {
                setError('Please fill in all fields');
                return;
            }

            const response = await login(formData);
            setSuccess('Successfully Login')
            router.push('/dashboard?showChannels=true')
        } catch (err) {
            const errorMsg = err?.error?.message || err?.message || 'Login failed. Please check your credentials.';
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        setError('');
    };

    return (
        <div className='flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='flex justify-center mb-6'>
                    <Image src='/images/evanik-logo-icon.png' alt='Evanik Logo' height={32} width={92} />
                </div>

                <div className='bg-white rounded-2xl shd p-8'>
                    <h1 className='text-blue font-semibold text-3xl pb-5'>Login</h1>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <TextField
                            label="Email"
                            type="email"
                            variant="standard"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Password"
                            type="password"
                            variant="standard"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            required
                            fullWidth
                        />

                        <div className='flex items-center justify-between pt-2'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-[#5356f7] focus:ring-[#5356f7]"
                                />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className='space-y-4 pt-2'>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue text-white py-3 rounded-lg font-medium hover:bg-[#5356f7] transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>

                            <div className='flex items-center justify-between text-sm'>
                                <Link
                                    href="/forgot-password"
                                    className="text-blue hover:text-[#5356f7] transition-colors"
                                >
                                    Forgot Password?
                                </Link>
                                <Link
                                    href="/register"
                                    className="text-blue hover:text-[#5356f7] transition-colors"
                                >
                                    Create Account
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
