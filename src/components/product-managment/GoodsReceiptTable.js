import React from 'react'
import CustomSlideCheck from '../common/CustomSlideCheck'

export default function GoodsReceiptTable(props) {
  return (
    <div className='sm:w-[700px] 2xl:w-auto w-full overflow-auto my-6'>
    <table   className="w-[1250px]">
      <thead className=''>
               
          <tr className=' text-[13px] text-left font-semibold text-gray-500'>
              <th className='pl-2 py-[10px] content-end'><h1>SKU</h1></th>
              <th className='pl-2 py-[10px] content-end'><h1 >Product</h1></th>
              <th className='pl-2 py-[10px] content-end'><h1 >UOM</h1></th>
              <th className='w-[436px]'>
                <h1 className='text-center border-x border-b'>
                    Quantity
                </h1>
                <div className='flex border-x items-center'>
                    <p className='my-2 px-2  w-[109px] border-r '>Received</p>
                    <p className='my-2 px-2  w-[109px] border-r '>PO</p>
                    <p className='my-2 px-2  w-[109px] border-r '>Rejected</p>
                    <p className='my-2 px-2  w-[109px] border-r '>Net Good</p>
                </div>
              </th>
              <th className='w-[218px]'>
                <h1 className='text-center border-b border-r'>
                Unit Price
                </h1>
                <div className='flex border-r items-center justify-between'>
                    <p className='my-2 px-2 border-r w-1/2'>PO</p>
                    <p className='my-2 px-2 w-1/2'>Invoice</p>
                </div>
              </th>
              <th className='pl-2 py-[10px] content-end'><h1 >Discount</h1></th>
              <th className='pl-2 py-[10px] content-end'><h1 >Incl GST</h1></th>
              <th className='pl-2 py-[10px] content-end'><h1 >GST</h1></th>
              <th className='pl-2 py-[10px] content-end'><h1 >Amount</h1></th>
          </tr>
              
      </thead>
      <tbody>
          {props.dataArray.map((data, i)=>(

          <tr key={i} className='max-h-[54px] h-[54px] border-t text-sm text-black'>
              <td >{data.SKU}</td>
              <td >
                <p>{data.ProductName}</p>
                <p>{data.ProductSize}</p>
                <p>{data.ProductSAC}</p>
              </td>
              <td >{data.UOM}</td>
              <td >
                <div className='flex mb-2 items-start'>
                    <div className='w-[109px]  '>
                    <input className="py-1 w-14 border rounded-lg px-2 text-sm m-2 outline-none" type="text" defaultValue={data.Received}/>
                    <button className="ml-2  border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-1  font-medium">Receive All</button>
                    </div>
                    <div className=' w-[109px] '>
                    <p className='py-1  px-2 text-sm m-2'>{data.ReceivedPO}</p>
                    </div>
                    <div className='w-[109px]  '>
                    <input className="py-1 w-14 border rounded-lg px-2 text-sm m-2 outline-none" type="text" defaultValue={data.Received}/>
                    <button className='ml-2 text-blue font-semibold text-[13px]'>Reject Reason</button>
                    </div>
                    <div className='w-[109px] '>
                    <input className="py-1 w-14 border rounded-lg px-2 text-sm m-2 outline-none" type="text" defaultValue={data.Received}/>
                    </div>
                    
                    
                    
                </div>
              </td>
              <td >
              <div className='flex mb-2 items-start'>
                    <div className='w-[109px]  '>
                    <p className="py-1 px-2 text-sm m-2"  >{data.Received}</p>
                    <button className='ml-2 text-blue font-semibold text-[13px]'>Purchase History</button>
                    </div>

                    <div className='w-[109px]  '>
                    <input className="py-1 w-14 border rounded-lg px-2 text-sm m-2 outline-none" type="text" defaultValue={data.Received}/>
                    <button className="ml-2 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-1  font-medium">Accept</button>
                    </div>
                
                    
                  
                    
                    
                    
                </div>
              </td>
              <td className=''>
              <input className="py-1 w-14 border rounded-lg px-2 text-sm m-2 outline-none" type="text" defaultValue={data.Discount}/>
              <div className='flex items-center gap-2 mx-2'>
                %
                <CustomSlideCheck/>
                ₹
              </div>
              </td>
              <td>
              <input
            id="vue-checkbox-list"
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
              </td>
              <td >{data.GST}</td>
              <td >{data.Amount}</td>
              
              
              
          </tr>
          ))}
      </tbody>
     
     </table>
     
</div>
  )
}
