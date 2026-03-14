import React from 'react'
const data = [
  { timeFrame: 'Order Count', period1: 771, period2: 4375 },
  { timeFrame: 'Late Shipment Rate', period1: 771, period2: 4375 },
  { timeFrame: 'Late Shipment Count', period1: 771, period2: 4375 },
  { timeFrame: 'Pre Fulfillment Cancellation Rate', period1: 771, period2: 4375 },
  { timeFrame: 'Pre Fulfillment Cancellation Count', period1: 771, period2: 4375 },
  { timeFrame: 'Refunds Rate', period1: 771, period2: 4375 },
  { timeFrame: 'Refunds Count', period1: 771, period2: 4375 },
];
export default function CustomerExperienceTable() {
  return (
    <div>
    <p className='sm:text-3xl text-xl font-medium text-[#3a3b4c] my-4'>Customer Experience Metrics</p>
    <table className='w-full text-left text-sm font-medium mt-8'>
    <thead>
      <tr className='text-gray-500 '>
        <th className='py-2 font-semibold'>TimeFrame</th>
        <th className='py-2 text-center font-semibold'>31-July-2021 To 29-September-2021</th>
        <th className='py-2 text-center font-semibold'>16-June-2021 To 14-September-2021</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i} className='border-t'>
          <td className=' py-2'>{row.timeFrame}</td>
          <td className='text-center py-2'>{row.period1}</td>
          <td className='text-center py-2'>{row.period2}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  )
}
