"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import CompanyLogos from '@/components/logincomponents/CompanyLogos';
import SideCarousel from '@/components/logincomponents/SideCarousel';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { setPassword } from '@/api/index';


function SetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Get token from URL query parameters
    const token = searchParams.get('token') || '227b69994e4c55d4c1eb23c0908a6d178f144f59cf9c501098675bedba92cb80';

    useEffect(() => {
        if (!token) {
            setError('Verification token is missing. Please use the link from your email.');
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Validate password strength
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        setLoading(true);

        try {
            await setPassword(token, formData.password);
            router.push('/');
        } catch (err) {
            setError(err.message || 'Failed to set password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className='w-max mx-auto '
        >
            <div className='w-full max-w-md'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: 0.2, duration: 0.5 }} 
                    className='flex justify-center mb-6'
                >
                    <Image src='/images/evanik-logo-icon.png' alt='Evanik Logo' height={40} width={120} />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.3, duration: 0.5 }} 
                    className='bg-white rounded-2xl shadow-lg p-8'
                >
                    <h1 className='text-[#5356f7] text-2xl font-semibold mb-6 flex items-center gap-2'>
                        <Lock className="w-6 h-6 text-[#5356f7]" /> Set Your Password
                    </h1>

                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm"
                        >
                            <AlertCircle className="w-5 h-5" />
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {/* New Password */}
                        <div className='relative'>
                            <label className='text-sm text-gray-600'>New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                    className="w-full p-3 bg-[#F8F9FE] border-[1px] border-[lightgray] rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#5356f7]/40 pr-12"
                                    required
                                    minLength={8}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-500  hover:text-[#5356f7] transition-all"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className='relative'>
                            <label className='text-sm text-gray-600'>Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                    className="w-full p-3 bg-[#F8F9FE] border-[1px] border-[lightgray] rounded-lg outline-none transition-all duration-200 focus:ring-2 focus:ring-[#5356f7]/40 pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-3 text-gray-500 hover:text-[#5356f7] transition-all"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={loading || !token}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex justify-center items-center gap-2 bg-[#5356f7] text-white py-3 rounded-lg font-medium hover:bg-[#4648d4] transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                    Setting Password...
                                </>
                            ) : (
                                'Set Password'
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function SetPasswordPage() {
    return (
        <Suspense fallback={<div className="text-center mt-20 text-gray-500">Loading...</div>}>
            <div className='w-screen h-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center '>
                <div className='bg-white rounded-2xl p-8 w-full sm:w-1/2 h-screen grid place-items-center '>
                    <CompanyLogos />
                    <SetPasswordForm />
                    <CompanyLogos />
                </div>
                <div className='text-base bg-blue text-white w-1/2 h-screen content-center  hidden sm:block '>
                    <SideCarousel />
                </div>
            </div>
        </Suspense>
    );
}


