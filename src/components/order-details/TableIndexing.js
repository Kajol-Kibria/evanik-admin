import * as React from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { BsExclamationCircle } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import CollapsibleTable from "../common/CollapsibleTable";


import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Link from "next/link";


const columns = [
  // { field: "checkbox", headerName: "" },
  { field: "Orderdetails", headerName: "Order details"},
  { field: "Productdetails", headerName: "Product details"},
  { field: "Shippingdetails", headerName: "	Shipping details" },
  { field: "Status", headerName: "Status" },
  { field: "Action", headerName: "Action" },
  { field: "", headerName: "" },

];



function Row(props) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
      
        sx={{
          "& > *": {
            
            borderBottom: "1px solid #E0E1FF",
            backgroundColor: "#FCFEFF",
            fontWeight:'medium',

          },
        }}
      >
        {/* <TableCell className=" content-start font-[urbanist] ">
          <input
            id="vue-checkbox-list"
            type="checkbox"
            value=""
            className="w-3 h-3 mt-2 text-blue-600 bg-gray-160 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
         
        </TableCell> */}
        <TableCell className=" content-start font-[urbanist]  px-0" >
        <div className={`${open?'h-[155px]':'h-[78px]'}  overflow-hidden transition-[height] duration-300`} >
          <div className="flex items-start gap-3">
            <p className="w-9 mt-1 h-9 rounded-lg text-center content-center border">fk</p>
              <Link href='/order-details-modal'>

             <div className='flex items-center gap-1 text-xs text-gray-700'>Date:<p className='text-black text-sm '>{data.Date}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Order Ref:<p className='text-black text-sm'>{data.OrderRef}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Item Ref:<p className='text-black text-sm'>{data.ItemRef}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Invoice NO:<p className='text-black text-sm '>{data.InvoiceDate}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Invoice Date:<p className='text-black text-sm '>{data.InvoiceDate}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Store Name:<p className='text-black text-sm'>{data.Date}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Warehouse:<p className='text-black text-sm'>{data.Warehouse}</p></div>
                                <div className='flex items-center gap-1 text-xs text-gray-700'>Fulfillment:<p className='text-black text-sm'>{data.Fulfillment}</p></div>
              </Link>
            
          </div>
        </div>
          </TableCell>
        <TableCell className=" content-start font-[urbanist]  px-0" >
        <div className={`${open?'h-[145px]':'h-[59px]'}  overflow-hidden transition-[height] duration-300`}>

                  <div className='flex items-center gap-1 text-xs text-gray-700'>SKU:<p className='text-black text-sm '>{data.SKU}</p></div>
                   <div className='flex items-center gap-1 text-xs text-gray-700'>Order value/ Qty:<p className='text-black text-sm '>{data.OrdervalueQty}</p></div>
                   <div className='flex items-center gap-1 text-xs text-gray-700'>Tracking ID/ AWB:<p className='text-black text-sm'>{data.TrackingIDAWB}</p></div>
                   {/* <div className='flex items-center gap-1 text-xs text-gray-700'>Expected Payout:<p className='text-black text-sm'>{data.ExpectedPayout}</p></div> */}
                   <div className='flex items-center gap-1 text-xs text-gray-700'>Picklist ID:<p className='text-black text-sm'>{data.PicklistID}</p></div>
                   <div className='flex items-center gap-1 text-xs text-gray-700'>HSN:<p className='text-black text-sm'>{data.HSN}</p></div>
                   {/* <div className='flex items-center gap-1 text-xs text-gray-700'>Fulfillment:<p className='text-black text-sm'>{data.Fulfillment}</p></div> */}
 </div>
        </TableCell>
        <TableCell className=" content-start font-[urbanist]  px-0" >
            <div className={`overflow-hidden transition-[height] duration-300`}>
          <div className='flex items-center gap-1 text-xs text-gray-700'>City:<p className='text-black text-sm '>{data.City}</p></div>
          <div className='flex items-center gap-1 text-xs text-gray-700'>Pincode:<p className='text-black text-sm '>{data.Pincode}</p></div>
          <div className='flex items-center gap-1 text-xs text-gray-700'>State:<p className='text-black text-sm'>{data.State}</p></div>
          <div className='flex items-center gap-1 text-xs text-gray-700'>Order Status:<p className='text-black text-sm'>{data.State}</p></div>

          {/* <div className='flex items-center gap-1 text-xs text-gray-700'>Name:<p className='text-black text-sm'>{data.Name}</p></div> */}
          {/* <div className='flex items-center gap-1 text-xs text-gray-700'>Address:<p className='text-black text-sm'>{data.Address}</p></div> */}
          </div>
        </TableCell>
        <TableCell className=" content-start font-[urbanist]  px-0" >
          <div>
          <div className={`${data.Status == 'Approved'?'text-[#1f674f]':''  || data.Status == 'Returned'?'bg-[#fbf3e4] text-[#AA791D]':'' || data.Status == 'Shipped'?'bg-[#e7e5f3] text-[#68698a]':'' || data.Status == 'Cancelled'?'bg-red-500/15 text-red-500':''} bg-[#e7fbe4]  w-fit py-2 px-4 rounded-full`}>{data.Status}</div>
          <div className="py-3 px-2 flex items-center gap-2 font-medium text-[13px] uppercase">
          <p className="text-red-500">
          <BsExclamationCircle/>
          </p>
            {data.PaymentStatus}</div>
          </div>
        </TableCell>
        <TableCell className=" content-start font-[urbanist]  px-0">
          <div className="space-y-2">
         <button className="buttonBlue w-40">Mark as Returned</button>
         <button className="buttonRed w-40">Mark as Cancelled</button>
          </div>
         
        </TableCell>
        <TableCell className=" content-start font-[urbanist] px-0">
          <IconButton
          className=""
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      
    </React.Fragment>
  );
}

function TableIndexing({ data }) {
  return (
    <CollapsibleTable columns={columns}>
      {data.map((row, idx) => (
        <Row key={idx} data={row} />
      ))}
    </CollapsibleTable>
  );
}

export default TableIndexing;
