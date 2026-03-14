import React from 'react'
import CommonInfo from "./CommonInfo";
import VendorButtons from "./VendorButtons";
import VendorMenu from "./VendorMenu";
export default function AddVendorCantainer() {
  return (
    <div  className='sm:pt-7 sm:pl-7 sm:pr-9 xl:pr-14 p-5 '>
      <VendorButtons/>
      <CommonInfo/>
      <VendorMenu/>
    </div>
  )
}
