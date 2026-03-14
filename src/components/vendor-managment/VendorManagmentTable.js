import React from 'react'

export default function VendorManagmentTable(props) {
  return (
    <div>
        <div className='sm:h-[422px] w-full  mx-auto overflow-auto my-5'>
            <table   className="  w-[1200px] sm:w-full">
                  <thead>
                           
                      <tr className=' text-[14px]  text-left font-semibold   text-gray-500'>
                          
                          <th>
                          <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-[14px] h-[14px] my-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
                            />
                          </th>
                          <th><h1>Name</h1></th>
                          <th><h1>Company Name</h1></th>
                          <th><h1>Email</h1></th>
                          <th><h1>Work Phone	</h1></th>
                          <th><h1>Source of Supply</h1></th>
                          <th><h1>Payables</h1></th>
                          <th><h1>Unused Credits</h1></th>
                      </tr>
                          
                  </thead>
                  <tbody>
                      {props.dataArray.map(data=>(
        
                      <tr className='max-h-[54px] h-[54px] border-t text-sm text-black ' key={data.ID}>
                          
                          <td>
                          <input
                                id="vue-checkbox-list"
                                type="checkbox"
                                value=""
                                className="w-[14px] h-[14px] text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
                            />
                          </td>
                          <td className='text-xs font-semibold text-gray-700'>{data.Name}</td>
                          <td className='w-40 pr-3'>{data.CompanyName}</td>
                          <td>
                              {data.Email}
                          </td>
                          <td>
                            {data.WorkPhone}
                          </td> 
                          <td>
                            {data.SourceofSupply}
                          </td> 
                          <td>
                            {data.Payables}
                          </td> 
                          <td>
                            {data.UnusedCredits}
                          </td> 
                          
                      </tr>
                      ))}
                  </tbody>
                 </table>
            </div>
    </div>
  )
}
