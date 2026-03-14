import React from 'react'
const data = [
  {
    timeFrame: '07-Oct-2021 To 20-October-2021',
    validTrackingRate: 100,
    validTrackingCount: 63,
    onTimeDeliveryRate: 98.03,
    onTimeDeliveryCount: 62,
  },
];
export default function TrackingInformationTable() {
  return (
    <div className='p-5 shd bg-white rounded-lg my-5 '>
      <p className='sm:text-3xl text-xl font-medium text-[#3a3b4c] my-4'>Tracking Information Metrics</p>
      <div className='overflow-auto'>
      <table className='sm:w-full text-left text-sm font-medium mt-8  w-[1000px]'>
      <thead>
        <tr className='text-gray-500 '>
          <th className='py-2 font-semibold'>Time Frame</th>
          <th className='py-2 font-semibold'>Valid Tracking Rate</th>
          <th className='py-2 font-semibold'>Valid Tracking Count</th>
          <th className='py-2 font-semibold'>On-Time Delivery Rate</th>
          <th className='py-2 font-semibold'>On-Time Delivery Count</th>
        </tr>
      </thead>
      <tbody>
      {data.map((row, i) => (
        <tr key={i} className='border-t'>
          <td className='py-2'>{row.timeFrame}</td>
          <td className='py-2'>{row.validTrackingRate}</td>
          <td className='py-2'>{row.validTrackingCount}</td>
          <td className='py-2'>{row.onTimeDeliveryRate}</td>
          <td className='py-2'>{row.onTimeDeliveryCount}</td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
    </div>
  )
}
