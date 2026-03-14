import React from 'react'

export default function Pagination(props) {
  return (
    <div className=''>
        
        <div className="flex justify-center gap-3  rounded-b-xl p-4 ">
  <button onClick={()=> props.onPageChange('Previous')} className="join-item border  text-sm border-gray-600/60 rounded-md px-3 py-1">Previous</button>
  <button className="join-item ">Page {props.currentPage} of {props.totalPage}</button>
  <button onClick={()=> props.onPageChange('Next')} className="join-item border  text-sm border-gray-600/60 rounded-md px-3 py-1">Next</button>
</div>
    </div>
  )
}
