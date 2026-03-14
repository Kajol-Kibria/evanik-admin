import React from 'react'

export default function AddOns() {
  return (
    <div>
        <div className=" shd rounded-lg my-5 sm:my-0">
                                <h2 className=" bg-[#525cc7] text-white font-semibold  rounded-t-lg p-4">Add Ons</h2>
                                <div className="p-5">
                                <p className='text-base font-semibold '>Exisiting Add Ons and Features</p>
                                <div className='flex items-center gap-2 my-2'>
                                <p className="text-gray-700 text-xs ">Automatic Repricer:</p>
                                    <svg width="16" height="16" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="42" height="42" rx="21" fill="#C8E3DA"></rect>
                                    <path d="M19.5153 23.2281L25.9497 16.793L26.9402 17.7828L19.5153 25.2077L15.0605 20.7529L16.0503 19.7631L19.5153 23.2281Z" fill="#1F674F"></path>
                                    </svg>
                                <span className=" text-[#1f674f] py-1 text-xs rounded-md font-semibold">Included</span>
                                </div>
                                <div className='flex items-center gap-2 my-2'>
                                <p className="text-gray-700 text-xs ">Amazon feedBAKER:</p>
                                    <svg width="16" height="16" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="42" height="42" rx="21" fill="#C8E3DA"></rect>
                                    <path d="M19.5153 23.2281L25.9497 16.793L26.9402 17.7828L19.5153 25.2077L15.0605 20.7529L16.0503 19.7631L19.5153 23.2281Z" fill="#1F674F"></path>
                                    </svg>
                                <span className=" text-[#1f674f] py-1 text-xs rounded-md font-semibold">Included</span>
                                </div>

                                <p className='text-base font-semibold mt-4'>Additional Add Ons and Features</p>
                                <div className='space-y-3 my-4'>
                                    <div className='sm:flex items-center gap-4'>
                                        <p className='sm:w-44'>Tally integration</p>
                                        <button className='text-blue font-semibold'>Choose Add On</button>
                                    </div>
                                    <div className='sm:flex items-center gap-4'>
                                        <p className='sm:w-44'>Amazon Feedbaker</p>
                                        <button className='text-blue font-semibold'>Choose Add On</button>
                                    </div>
                                    <div className='sm:flex items-center gap-4'>
                                        <p className='sm:w-44'>STR Report API</p>
                                        <button className='text-blue font-semibold'>Choose Add On</button>
                                    </div>
                                    <div className='sm:flex items-center gap-4'>
                                        <p className='sm:w-44'>Settlements Report API</p>
                                        <button className='text-blue font-semibold'>Choose Add On</button>
                                    </div>
                                </div>
                                </div>
                </div>
    </div>
  )
}
