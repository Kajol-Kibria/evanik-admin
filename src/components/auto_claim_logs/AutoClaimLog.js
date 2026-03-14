'use client'
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { getdata, getLength } from '../../../alldatafiles/AutoClaimLogdata';
import Pagination from '../common/Pagination';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { GoInfo } from "react-icons/go";
import CollapsibleTable from "../common/CollapsibleTable";
import DropButton from "../common/DropButton";
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Image from '../../../node_modules/next/image';
import { CustomDateRangePicker } from '../dashboard/CustomDateRangePicker';


const columns = [
  { field: "checkbox", headerName: "checkbox", width: 80 },
  { field: "ID", headerName: "ID", width: 200 },
  { field: "Date", headerName: "Date", width: 200 },
  { field: "Cost", headerName: "Cost", width: 200 },
  { field: "Claim Status", headerName: "Claim Status", width: 200 },
  { field: "Comments", headerName: "Comments", width: 320 },
  { field: "", headerName: "", width: 320 },
];

const expandedFields = [
  { field: "SellerID", label: "Seller ID" },
  { field: "OrderID", label: "Order ID" },
  { field: "OrderItemID", label: "Order Item ID" },
  { field: "Whid", label: "Whid" },
  { field: "ClaimType", label: "Claim Type" },

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

          },
        }}
      >
        <TableCell >
          <input type='checkbox'/>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 text-black' align="center">
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">ID:</p><p>{data.ID}</p></div>
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Channel Incident ID:</p><p>{data.ChannelIncidentId}</p></div>
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">EVanik Claim ID:</p><p>{data.EvanikClaimId}</p></div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 text-black' align="center">
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Claim Date:</p><p>{data.Date.ClaimDate}</p></div>
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Order Date:</p><p>{data.Date.OrderDate}</p></div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 text-black' align="center">
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Reimbursement:</p><p>{data.Cost.Reimbursement}</p></div>
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Product Cost:</p><p>{data.Cost.ProductCost}</p></div>
                    <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Order Value:</p><p>{data.Cost.OrderValue}</p></div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 text-black' >
          <div className={`${data.ClaimStatus == 'Approved'?'text-[#1f674f] bg-[#E7FBE4]':'text-[#AA791D] bg-[#AA791D]/10'} w-fit px-5 py-2 rounded-full `}>
            {data.ClaimStatus}
          </div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 text-black' >
          {data.Comments}
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
        <TableCell style={{ padding: 0, width: "100%", fontFamily:'urbanist' }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "16px 24px", background: "#F3F4FB" }}>
              <ul className="flex flex-wrap gap-6">
                {expandedFields.map((item) => (
                  <li key={item.field} className="space-y-1 w-1/6">
                    <div className="flex text-xs items-center space-x-1 text-[#68698A]">
                      <GoInfo />
                      <span className="font-medium leading-none">
                        {item.label}
                      </span>
                    </div>
                    <p>{data[item.field]}</p>
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
export default function AutoClaimLog() {
          const [limit, setLimit] = useState(5);
          const [page, setPage] = useState(1);
          let totalPage = Math.ceil(getLength() / limit);
          function handlePageChange(value) {
            if (value === "Previous") {
              if (page !== 1) {
                setPage(page - 1);
              }
            } else if (value === "Next") {
              if (page !== totalPage) {
                setPage(page + 1);
              }
            }
          }
        
          const dataArray = getdata(page, limit);
    const [value1, setValue1] = useState('Channel')
    const [value2, setValue2] = useState('Claim Type')
    const [value3, setValue3] = useState('Claim Status')
  return (
    <div>
        <div className='sm:flex justify-between gap-7 space-y-4 sm:space-y-0'>
            <div className='sm:w-1/3 bg-[#F3F4FB] p-4 rounded-lg text-sm'>
                <div className='flex items-center justify-between pb-4'>
                    <p>Claims Raised</p>
                    <p className='px-2 py-1 bg-gray-300/40 font-medium rounded-md'>100</p>
                </div>
                <div className='flex items-center justify-between '>
                    <p>Value</p>
                    <p className='font-medium'>20000</p>
                </div>
            </div>
            <div className='sm:w-1/3 bg-[#FBF8E4] p-4 rounded-lg text-sm'>
                <div className='flex items-center justify-between pb-4'>
                    <p>Claims Approved</p>
                    <p className='px-2 py-1 bg-gray-300/40 font-medium rounded-md'>100</p>
                </div>
                <div className='flex items-center justify-between '>
                    <p>Value</p>
                    <p className='font-medium'>20000</p>
                </div>
            </div>
            <div className='sm:w-1/3 bg-[#f1f8f6] p-4 rounded-lg text-sm content-center'>
                <div className='flex items-center justify-between'>
                    <p>Reimbursed</p>
                    <p className='px-2 py-1 bg-gray-300/40 font-medium rounded-md'>100</p>
                </div>
            </div>
        </div>
        <div className='sm:flex items-center gap-4 my-4'>
                <div className='flex scrollmenu gap-4 space-y-2 sm:space-y-0'>
                    <button className="text-[13px] shadow-xl w-28 border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-2  font-medium">Bulk Action</button>
                      <CustomDateRangePicker/>
                    <DropButton state={value1} setState={setValue1} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value2} setState={setValue2} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                    <DropButton state={value3} setState={setValue3} items={["This week", "This Month", "This Quarter", 'This Year', 'Yesterday']}/>
                </div>
                <div className='flex items-center mt-4 sm:mt-0 sm:mr-5'>
                        <input className='pl-5 pr-14 w-full sm:w-52 border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Order ID'/>
                        <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
                </div>
                <button className='min-w-10 min-h-10 w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
                        
        </div>
        <div className='w-full  mx-auto overflow-auto my-5'>
        <CollapsibleTable columns={columns}>
              {dataArray.map((row, idx) => (
                <Row key={idx} data={row} />
              ))}
        </CollapsibleTable>
        </div>
    <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
