import React from 'react'
const data = [
  {
    timeFrame: '07-Oct-2021 To 14-October-2021',
    returnOrderCount: 0,
    dissatisfactionRate: 0,
    dissatisfactionCount: 0,
    negativeFeedbackRate: 0,
    negativeFeedbackCount: 0,
    lateResponseRate: 0,
    lateResponseCount: 0,
    invalidRejectionRate: 0,
    invalidRejectionCount: 0,
  },
];
export default function ReturnDissatisfactionTable() {
  return (
  <div className='p-5 shd bg-white rounded-lg my-5'>
      <p className='sm:text-3xl text-xl font-medium text-[#3a3b4c] my-4'>Return Dissatisfaction Metrics</p>
      <div className='overflow-auto'>
      <table className='sm:w-full text-left text-sm font-medium mt-8 w-[1200px]'>
      <thead className='text-center'>
        <tr className='text-gray-500 '>
            <th className='p-2 text-left font-semibold'>Time Frame</th>
            <th className='p-2 font-semibold'>Return Order Count</th>
            <th className='p-2 font-semibold'>Dissatisfaction Rate</th>
            <th className='p-2 font-semibold'>Dissatisfaction Count</th>
            <th className='p-2 font-semibold'>Negative Return Feedback Rate</th>
            <th className='p-2 font-semibold'>Negative Return Feedback Count</th>
            <th className='p-2 font-semibold'>Late Response Rate</th>
            <th className='p-2 font-semibold'>Late Response Count</th>
            <th className='p-2 font-semibold'>Invalid Rejection Rate</th>
            <th className='p-2 font-semibold'>Invalid Rejection Count</th>
        </tr>
      </thead>
      <tbody className='text-center'>
      {data.map((row, i) => (
        <tr key={i} className='border-t'>
          <td className='p-2 text-left'>{row.timeFrame}</td>
          <td className='p-2'>{row.returnOrderCount}</td>
          <td className='p-2'>{row.dissatisfactionRate}</td>
          <td className='p-2'>{row.dissatisfactionCount}</td>
          <td className='p-2'>{row.negativeFeedbackRate}</td>
          <td className='p-2'>{row.negativeFeedbackCount}</td>
          <td className='p-2'>{row.lateResponseRate}</td>
          <td className='p-2'>{row.lateResponseCount}</td>
          <td className='p-2'>{row.invalidRejectionRate}</td>
          <td className='p-2'>{row.invalidRejectionCount}</td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
    </div>
  )
}
