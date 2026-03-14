'use client'
import React, { useState } from 'react'
import { LuTrash } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";



export default function PurchaseTable(props) {

  return (
    <div className='w-full  mx-auto overflow-auto my-5'>
        <table   className=" w-[1100px] 2xl:w-full">
          <thead >
                   
              <tr className=' text-[13px] text-left font-semibold   text-gray-500'>
                <th><input
            id={'all'}
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 border focus:ring-[#86b7fe] focus:ring-2 rounded-lg mx-2"
          /></th>
                  <th ><h1 className='  my-2'>Date</h1></th>
                  <th ><h1 >Branch</h1></th>
                  <th ><h1 >Purchase Order#</h1></th>
                  <th ><h1 >Reference Number</h1></th>
                  <th ><h1 >Vendor Name</h1></th>
                  <th ><h1 >Status</h1></th>
                  <th ><h1 >Due Date</h1></th>
                  <th ><h1 >Amount</h1></th>
                  <th ><h1 >GRN</h1></th>
                  <th ><h1 >Action</h1></th>
              </tr>
                  
          </thead>
          <tbody>
              {props.dataArray.map((data, i)=>(

              <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
                  
                  <td>
                  <input
            id={data.ItemDetails}
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg mx-2"
          />
                  </td>
                  <td >{data.Date}</td>
                  <td >{data.Branch}</td>
                  <td >{data.VendorName}</td>
                  <td >{data.Status}</td>
                  <td >{data.DueDate}</td>
                  <td >{data.Amount}</td>
                  <td >{data.BalanceDue}</td>
                  <td >{data.BalanceDue}</td>
                  <td >{data.BalanceDue}</td>
                  <td >
                    <button className='text-blue hover:text-white font-medium border border-blue py-1 text-sm px-4 hover:bg-blue transition-all duration-300 rounded-lg'>Generate GRN</button>
                  </td>
                  
                  
              </tr>
              ))}
          </tbody>
         
         </table>
         
    </div>
  )
}
