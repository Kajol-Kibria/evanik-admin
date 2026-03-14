import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
  return (
    <div>
        <div className="flex flex-col justify-center mt-20 items-center p-6  rounded-lg max-w-[610px] mx-auto">
      <div className="bg-[#525cc7] text-white p-5 rounded-lg shadow-md w-full">
        <p className="">
        &apos;&apos; I have found eVanik OneWorld Suite to be an outstanding solution for managing our online platform&apos;s accounting needs. As an accountant at Link Locks Private Limited
        </p>
        <p className=" mt-3">
          I have been using the one-click Chrome extension of eVanik to
          seamlessly integrate our eCommerce transactions with Tally Prime.
        </p>
        <p className="mt-3">
        &apos;&apos; I have found eVanik OneWorld Suite to be an outstanding solution for managing our online platform&apos;s accounting needs. As an accountant at Link Locks Private Limited
        </p>
        <p className=" mt-3">
          I have been using the one-click Chrome extension of eVanik to
          seamlessly integrate our eCommerce transactions with Tally Prime.
        </p>
      </div>

      <div className="flex items-center mt-12">
        <Image
          src="/images/testimonial-user.png"
          alt="Kailash Kumar"
          width={70}
          height={70}
          className=" rounded-full mr-3"
        />
        <div>
          <p className="text-xl font-semibold">Mr. Kailash Kumar</p>
          <p className="text-gray-200 font-medium mt-2 text-sm">
            Accountant, Link Locks Private Limited.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
