'use client'
import React, { useState } from 'react'
import { LuTrash } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";



export default function TransactionTable(props) {

  return (
    <div className='sm:w-[700px] 2xl:w-auto w-full overflow-auto my-6'>
        <table   className=" w-[1000px] 2xl:w-full">
          <thead >
                   
              <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                <th><input
            id={'all'}
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 border focus:ring-[#86b7fe] focus:ring-2 rounded-lg mx-2"
          /></th>
                  <th ><h1 className='  my-2'>Item Details</h1></th>
                  <th ><h1 >Account</h1></th>
                  <th ><h1 >Quantity</h1></th>
                  <th className='px-5'><h1 >Rate</h1></th>
                  <th ><h1 >Tax</h1></th>
                  <th ><h1 >Amount</h1></th>
                  <th ><h1 >Action</h1></th>
              </tr>
                  
          </thead>
          <tbody>
              {props.dataArray.map((data, i)=>(

              <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black ' >
                  
                  <td>
                  <input
            id={data.ItemDetails}
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg mx-2"
          />
                  </td>
                  <td >{data.ItemDetails}</td>
                  <td >{data.Account}</td>
                  <td >{data.Quantity}</td>
                  <td className='px-5'>{data.Rate}</td>
                  <td >{data.Tax}</td>
                  <td >{data.Amount}</td>
                  <td >
                    <div className='flex my-2 items-center gap-4'>
                    <p className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full text-red-500'><LuTrash  size={17}/></p>
                    <p className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'><FiPlus size={17}/></p>
                    </div>
                  </td>
                  
              </tr>
              ))}
          </tbody>
          <tbody>
          <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' >
          <td>
                  <input
            id='this'
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg mx-2"
          />
                  </td>
              <td>
              <input className='mt-4 sm:mt-1 w-full sm:w-auto outline-none focus:outline-blue/30 px-4 rounded-lg py-1 placeholder:text-sm placeholder:font-thin placeholder:text-gray-700' placeholder='Type or click to select an item'/>
              </td>
              <td>
                <select className='text-blue font-semibold w-40 border-b border-gray-400 outline-blue py-2'>
                    <option>Select an account</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
              </td>
              <td>
                1.00
              </td>
              <td >
                1.00
              </td>
              <td>
              <select className='text-blue font-semibold w-32  border-b border-gray-400 outline-blue py-2'>
                    <option>Select an tax</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
              </td>
              <td>
                100
              </td>
              <td >
                    <div className='flex my-2 items-center gap-4'>
                    <p className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full text-red-500'><LuTrash  size={17}/></p>
                    <p className='hover:border-blue cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center border rounded-full'><FiPlus size={17}/></p>
                    </div>
                  </td>
          </tr>
          </tbody>
         </table>
         
    </div>
  )
}
