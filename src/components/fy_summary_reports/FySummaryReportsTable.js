import React from 'react'

export default function FySummaryReportsTable() {
    const dataArray = [
        { Particulars: 'Sales', GrandTotal: 0 },
        { Particulars: 'Cancellation', GrandTotal: 0 },
        { Particulars: 'Gross Sales', GrandTotal: 0 },
        { Particulars: 'Return(received)', GrandTotal: 0 },
        { Particulars: 'Total Net Sales', GrandTotal: 0 },
        { Particulars: 'Settled(order vakue for forward sales)', GrandTotal: 0 },
        { Particulars: 'Return Initiated(RNR or remburemnet not receive)', GrandTotal: 0 },
        { Particulars: 'Pending Payment(unpaid for delivered order)', GrandTotal: 0 },
        { Particulars: 'Total MP Fees', GrandTotal: 0 },
        { Particulars: 'Bank Settlement-(off the month)', GrandTotal: 0 },
        { Particulars: 'CODB Percentage', GrandTotal: 0 },
        { Particulars: 'Return Percentage', GrandTotal: 0 },
        { Particulars: 'Total Pendency', GrandTotal: 0 },
      ];
  return (
    <div>
    <table className='w-full text-left text-sm font-medium my-8'>
      <thead>
        <tr className='text-gray-500 '>
          <th className='py-2 font-semibold'>Particulars</th>
          <th className='py-2 font-semibold'>Grand Total</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, i) => (
          <tr key={i} className='border-t'>
            <td className=' py-2'>{item.Particulars}</td>
            <td className=' py-2'>{item.GrandTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
