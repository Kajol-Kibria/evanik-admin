import React from 'react'

export default function CheckCard(props) {
  return (
    <div>
        <div className='rounded-lg shd py-6 px-7  '>
                    <div className='flex items-center justify-between  w-full gap-5'>
                        <div className='flex items-center gap-3'>
                        <input
            id="6"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
                        <p className='font-semibold text-gray-700'>{props.txt}</p>
                        </div>
                    </div>
                </div>        
    </div>
  )
}
