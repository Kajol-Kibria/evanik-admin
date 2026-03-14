'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaMapPin } from 'react-icons/fa';
import Image from 'next/image';
import { register } from '@/api/index';

const FormInput = ({ icon: Icon, name, placeholder, value, onChange, required, pattern, type = "text" }) => (
    <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            pattern={pattern}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
        />
    </div>
);

export default function RegisterForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        companyName: '',
        pincode: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const submitData = { ...formData };
            if (!submitData.companyName.trim()) {
                delete submitData.companyName;
            }
            const response = await register(submitData);
            setSuccess('Registration successful! Please check your email to verify your account.');
        } catch (err) {
            setError(err?.message || err?.error?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-5 px-10 border mt-8 rounded-xl shd border-[#e0e1ff] max-w-md mx-auto">
            <div className='flex justify-center items-center mb-4 '>
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
                <div className="grid grid-cols-2 gap-4">
                    <FormInput
                        icon={FaUser}
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        icon={FaUser}
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <FormInput
                    icon={FaEnvelope}
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                />

                <FormInput
                    icon={FaPhone}
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    type="tel"
                />

                <FormInput
                    icon={FaBuilding}
                    name="companyName"
                    placeholder="Company Name (Optional)"
                    value={formData.companyName}
                    onChange={handleChange}
                />

                <FormInput
                    icon={FaMapPin}
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{6}"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue text-white py-3 rounded-lg font-semibold hover:bg-[#5356f7] transform hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
                Already have an account?{' '}
                <Link href="/" className="text-blue font-semibold hover:text-[#5356f7] transition-colors">
                    Login here
                </Link>
            </p>
        </div>
    );
} 