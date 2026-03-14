import * as React from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { GoInfo } from "react-icons/go";
import CollapsibleTable from "../common/CollapsibleTable";
import DropButton from "../common/DropButton";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Link from "next/link";
import CustomRadio from "../common/CustomRadio";


const columns = [
  { field: "", headerName: "", width: 80 },
  { field: "Channel", headerName: "Channel", width: 200 },
  { field: "OrderID", headerName: "Order ID", width: 200 },
  { field: "SKU", headerName: "SKU", width: 200 },
  { field: "Quantity", headerName: "Quantity", width: 200 },
  { field: "Status", headerName: "M/P Status", width: 320 },
  { field: "ReturnStatus", headerName: "Return Status", width: 320 },
  { field: "Returncreateddate", headerName: "Return created date", width: 320 },
  { field: "Reimbursement", headerName: "Reimbursement", width: 320 },
  { field: "Disposition", headerName: "Disposition", width: 200 },
  { field: "collapse", headerName: "", width: 80 },
];

const expandedFields = [
  { field: "Store", label: "Store" },
  { field: "OrderedDate", label: "Ordered Date" },
  { field: "SellerSKU", label: "Seller SKU" },
  { field: "InvNo", label: "Inv No." },
  { field: "TrackingID", label: "Tracking ID" },
  { field: "ReturnTrackingID", label: "Return Tracking ID" },
  { field: "ChannelSKU", label: "Channel SKU" },
  { field: "ReturnRemarks", label: "Return Remarks" },
  { field: "ReimbursementStatus", label: "Reimbursement Status" },
  { field: "OrderItemID", label: "Order Item ID" },
  { field: "OrderQty", label: "Order Qty" },
  { field: "Returnrecieveddate", label: "Return recieved date" },
  { field: "PaymentStatus", label: "Payment Status" },
  { field: "Ageging", label: "Ageging" },
  { field: "OrderValue", label: "Order Value" },
  { field: "TransporterName", label: "Transporter Name" },
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
        <TableCell >
          <CustomRadio/>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 ' >
        
        <div className='w-10 h-10 content-center text-center rounded-lg border'>{data.Channel}</div>
        
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium text-black' >
        <Link href='/order-details-modal-returns' className="text-[#0d6efd] underline">{data.OrderID}</Link> 
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium text-black' >{data.SKU}</TableCell>
        <TableCell className='font-[urbanist]  font-medium text-black' >{data.Quantity}</TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium text-black' >
          <div
            className={`${data.Status == 'Returned'?'text-[#1f674f]':''  || data.Status == 'Not Received'?'text-[#AA791D]':'' || data.Status == 'Unknown'?'text-[#68698a]':'' || data.Status == 'Cancelled'?' text-red-500':''} py-2 rounded-full `}
          >
            {data.Status}
          </div>
        </TableCell>
        <TableCell className='text-[13px] font-[urbanist] px-0 font-medium text-blac text-' >
                 <div className={`bg-[#fbf3e4] text-[#AA791D] py-2 flex items-center justify-center gap-2 px-4 rounded-full text-center hover:border border border-white  cursor-pointer hover:border-blue hover:bg-blue/5 hover:text-blue transition-all duration-300 w-32`} >
                     {data.ReturnStatus}                           
                 </div>
          </TableCell>
          <TableCell className='font-[urbanist] px-0 font-medium text-black' >{data.Returncreateddate}</TableCell>
          <TableCell className='font-[urbanist] px-0 font-medium text-black' >{data.Reimbursement}</TableCell>
          <TableCell className='font-[urbanist] px-0 font-medium text-black' >                                 
               <div className={`text-[13px] py-[6px] flex items-center  gap-2  px-3 w-fit text-center hover:border border border-white  cursor-pointer  hover:text-blue hover:bg-blue/10 transition-all duration-200`}>
                  {data.Disposition}
              </div>
        </TableCell>

        <TableCell >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow >
        <TableCell style={{ padding: 0, width: "100%", fontFamily:'urbanist' }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "8px 24px", background: "#F3F4FB" }}>
              <ul className="flex flex-wrap gap-6">
                {expandedFields.map((item) => (
                  <li key={item.field} className="space-y-1 w-1/6">
                    <div className="flex text-xs items-center space-x-1 text-[#68698A]">
                      <GoInfo />
                      <span className="font-medium leading-none">
                        {item.label}
                      </span>
                    </div>
                    <p className={` font-medium ${data[item.field]=='Unpaid'?'text-red-500':'' || data[item.field]=='Not Received'?'text-[#1f674f]':''}`}> <span >{data[item.field]}</span> </p>
                  </li>
                ))}
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function ReturnsTable({ data }) {
  return (
    <CollapsibleTable columns={columns}>
      {data.map((row, idx) => (
        <Row key={idx} data={row} />
      ))}
    </CollapsibleTable>
  );
}

export default ReturnsTable;
