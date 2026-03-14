'use client'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { LucidePen } from 'lucide-react'

export default function ProfileCantainer() {
  const [userData, setUserData] = useState({
    id: "6805f7309f7fb7ab06659c8c",
    firstName: "rohit",
    lastName: "vishwakarma",
    email: "dietghardevo@gmail.com",
    mobileNumber: "9304411521",
    pincode: "815302",
    state: "Jharkhand",
    city: "Giridih",
    role: "user",
    registrationStatus: "complete",
    subUsers: [],
    createdAt: "2025-04-21T07:43:44.507Z",
    updatedAt: "2025-04-21T09:59:53.715Z",
    __v: 0
  });

  return (
    <div className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5'>
      {/* Profile Card */}
      <div className="shd rounded-3xl overflow-hidden">
        {/* Header Banner */}
        <div className="h-32 bg-gradient-to-r from-blue to-blue/80 relative">
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
            <LucidePen className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-8 pb-8">
          {/* Avatar and Name Section */}
          <div className="flex flex-col items-center -mt-14 mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-3xl font-bold text-blue mb-3 z-10">
              {userData.firstName[0].toUpperCase()}{userData.lastName[0].toUpperCase()}
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 capitalize">
              {userData.firstName} {userData.lastName}
            </h1>
            <p className="text-gray-500 text-sm ">{userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}</p>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium">{userData.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Mobile Number</label>
                <p className="font-medium">{userData.mobileNumber}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Registration Status</label>
                <p className="font-medium capitalize">{userData.registrationStatus}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Location</label>
                <p className="font-medium">{userData.city}, {userData.state}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Pincode</label>
                <p className="font-medium">{userData.pincode}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Member Since</label>
                <p className="font-medium">{new Date(userData.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
