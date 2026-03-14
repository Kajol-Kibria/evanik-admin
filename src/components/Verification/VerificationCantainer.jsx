'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FiCheckCircle, FiLoader, FiAlertCircle, FiKey } from 'react-icons/fi';
import { verifyEmail } from '@/api/index';

export default function VerifyTokenFromURLPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [verificationStatus, setVerificationStatus] = useState('idle'); // 'idle', 'verifying', 'success', 'error'
  const [message, setMessage] = useState('');
 
  useEffect(() => {
    const verify = async () => {
      if (!token) return;
  
      setVerificationStatus('verifying');
      setMessage('Verifying your email. Please wait...');
  
      try {
        const response = await verifyEmail(token);
        console.log(response);
  
        setVerificationStatus('success');
        setMessage(response.message || 'Email verified successfully!');
  
        const newToken = response?.data?.token;
        if (newToken) {
          // Redirect to set-password with the new token in the query
          setTimeout(() => {
            router.push(`/set-password?token=${newToken}`);
          }, 2000); // small delay so user can see success message
        }
      } catch (error) {
        setVerificationStatus('error');
        setMessage(error?.message || 'Verification failed. Please try again.');
      }
    };
  
    verify();
  }, [token]);
  
  return (
    <div className="flex items-center justify-center p-4 min-h-screen">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-md w-full text-center border border-gray-100">

        <div className="mb-6 flex justify-center">
          {verificationStatus === 'success' ? (
            <FiCheckCircle className="h-16 w-16 text-green-500 animate-fade-in-fast" />
          ) : verificationStatus === 'error' ? (
            <FiAlertCircle className="h-16 w-16 text-red-500 animate-fade-in-fast" />
          ) : verificationStatus === 'verifying' ? (
            <FiLoader className="animate-spin h-16 w-16 text-blue-500" />
          ) : (
            <FiKey className="h-16 w-16 text-blue-500" />
          )}
        </div>

        <h1 className={`text-xl md:text-2xl font-bold mb-3 ${
          verificationStatus === 'success' ? 'text-green-700' :
          verificationStatus === 'error' ? 'text-red-700' :
          'text-gray-800'
        }`}>
          {verificationStatus === 'success' ? 'Success!' :
            verificationStatus === 'error' ? 'Verification Failed' :
              verificationStatus === 'verifying' ? 'Verifying...' :
                'Starting Verification...'}
        </h1>

        <p className={`text-gray-600 mb-6 min-h-[40px] flex items-center justify-center ${verificationStatus !== 'idle' ? 'animate-fade-in-fast' : ''}`}>
          {message}
        </p>

        {verificationStatus === 'success' && (
          <Link href="/" legacyBehavior>
            <a className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 transition duration-150">
              Proceed to Login
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
