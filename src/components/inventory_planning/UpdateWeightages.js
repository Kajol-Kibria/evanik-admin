import React from 'react'

export default function UpdateWeightages() {
  return (
    <div>
        <table className='w-full'>
        <thead>  
              <tr className=' text-[13px]  text-left font-semibold  border-b text-gray-500'>
                  <th><h1 className=' py-2'>Periods</h1></th>
                  <th><h1 className=' mx-2'>Previous Weight</h1></th>
                  <th><h1>Future Weight</h1></th>
              </tr>
        </thead>
    	<tbody >
            <tr className='py-5'>
                <td className='py-5'><p>Yesterday</p></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 mx-2 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
            </tr>
            <tr className='py-5'>
                <td className='py-5'><p>Last 7 Days</p></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 mx-2 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
            </tr>
            <tr className='py-5'>
                <td className='py-5'><p>Last 15 Days</p></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 mx-2 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
            </tr>
            <tr className='py-5'>
                <td className='py-5'><p>Last 30 Days</p></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 mx-2 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
            </tr>
            <tr className='py-5'>
                <td className='py-5'><p>Last 45 Days</p></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 mx-2 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
                <td><input type='text' className=' border-b py-3 outline-none w-40 border-gray-300 focus:border-gray-500 transition-all duration-300'/></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}
