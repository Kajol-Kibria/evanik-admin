'use client';

import { forgotPassword } from '@/api/index';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function ForgetCard() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const response = await forgotPassword({ email });
      console.log(response);
      setSuccessMsg('Password reset link sent to your email.');
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex sm:relative fixed top-0 bottom-0 left-0 right-0 items-center justify-center'>
        <div className='flex flex-col items-center'>
          <Image src='/images/evanik-logo-icon.png' alt='logo' height={32} width={92} />
          <Link className='w-full text-xs text-gray-700 flex items-center gap-1 mt-4' href='/'>
            <IoIosArrowBack size={15} />Back to login
          </Link>

          <div className='py-10 px-10 border mt-5 rounded-xl shd border-[#e0e1ff]'>
            <p className='text-blue font-semibold text-3xl pb-5'>Forgot Password</p>
            <p className='text-gray-700 sm:w-80 w-60 text-xs pb-1'>
              Please enter your registered email address here, you will receive a link to reset your password.
            </p>

            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            {successMsg && <p className="text-sm text-green-600 mt-2">{successMsg}</p>}

            <form onSubmit={handleSubmit}>
              <div className="relative z-0 sm:w-96 my-4 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 focus:border-gray-700 border-gray-700/40 block py-2.5 bg-transparent border-b appearance-none outline-none peer"
                  placeholder=" "
                  required
                />
                <label className="flex gap-2 items-center text-gray-700 peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                  <Image src='/images/icon-input-info.svg' alt='' height={15} width={15} />
                  Registered Email ID
                </label>
              </div>

              <div className='w-full mt-10 flex items-center justify-center'>
                <button
                  type="submit"
                  className='w-full text-center text-white font-semibold hover:bg-[#5356f7] transform transition-all duration-200 bg-blue py-3 sm:px-10 px-6 text-sm sm:text-base rounded-xl'
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
