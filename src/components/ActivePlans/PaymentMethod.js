import React from 'react'

export default function PaymentMethod() {
    const dataArray=[
        {
            PaysFor:'Base Subscription	',
            PaymentMethod:'Bank Transfer (quarterly)',
        },
        {
            PaysFor:'Report API	',
            PaymentMethod:'Credit Card (monthly)',
        },
        {
            PaysFor:'Amazon feedBAKER	',
            PaymentMethod:'Recharge (UPI)',
        },
        {
            PaysFor:'Orderr Processing	',
            PaymentMethod:'Recharge (UPI)',
        },
        {
            PaysFor:'Reporrt API	',
            PaymentMethod:'Recharge (UPI)',
        },
        {
            PaysFor:'Order Processiing	',
            PaymentMethod:'Recharge (UPI)',
        },
    ]
  return (
    <div>
        <div className=" shd rounded-lg">
                                <h2 className=" bg-[#525cc7] text-white font-semibold  rounded-t-lg p-4">Payment Method</h2>
                                <div className="m-5 max-h-[250px] overflow-auto mr-4">
                                <table className='w-full h-full '>
                                    <thead>
                                        <tr className=' text-[14px]  text-left font-semibold   text-gray-500'>
                                            <th className='py-2'>Pays For</th>
                                            <th>Payment Method</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataArray.map((data)=>(

                                            <tr key={data.PaysFor} className='max-h-[50px] h-[50px] border-t text-sm text-black '>
                                            <td className='px-2'>{data.PaysFor}</td>
                                            <td className='px-2'>{data.PaymentMethod}</td>
                                            <td className='px-4'>
                                            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.7573 6.67143L11.3433 5.25744L2.0293 14.5714V15.9854H3.4433L12.7573 6.67143ZM14.1713 5.25744L15.5853 3.84343L14.1713 2.42943L12.7573 3.84343L14.1713 5.25744ZM4.2713 17.9854H0.0292969V13.7424L13.4643 0.307435C13.6518 0.119964 13.9061 0.0146484 14.1713 0.0146484C14.4365 0.0146484 14.6908 0.119964 14.8783 0.307435L17.7073 3.13644C17.8948 3.32396 18.0001 3.57827 18.0001 3.84343C18.0001 4.1086 17.8948 4.36291 17.7073 4.55044L4.2723 17.9854H4.2713Z" fill="#626BCC"></path>
                                            </svg>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                                </div>
                </div>
    </div>
  )
}
