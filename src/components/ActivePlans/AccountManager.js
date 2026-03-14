import React from 'react'
import Image from 'next/image'

export default function AccountManager() {
  return (
    <div>
        <div className=" shd rounded-lg">
                        <h2 className=" bg-[#525cc7] text-white font-semibold  rounded-t-lg p-4">Account Manager</h2>
                        <div className="p-5">
                        <div className="flex items-center">
                                <Image
                                  src="/images/profile.png"
                                  alt="Kailash Kumar"
                                  width={55}
                                  height={55}
                                  className=" rounded-full border mr-3"
                                />
                                <div>
                                  <p className="text-xl font-medium">Shubham</p>
                                  <p className="text-gray-600 font-medium mt-2 text-sm">
                                  shubham@evanik.net
                                  </p>
                                </div>
                              </div>
                        </div>
        </div>
    </div>
  )
}
