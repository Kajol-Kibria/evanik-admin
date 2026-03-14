'use client'
import React, { useState } from 'react'
import { getdata, getLength } from '../../../alldatafiles/Shippingdata';
import Pagination from '../common/Pagination';
import CollapsibleTable from '../common/CollapsibleTable';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { GoInfo } from "react-icons/go";
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Image from '../../../node_modules/next/image';
  const expandedFields = [
    { field: "Warehouse", label: "Warehouse" },
    { field: "OrderID", label: "Order ID" },
    { field: "ItemID", label: "Item ID" },
    { field: "PaymentDate", label: "Payment Date" },
  ];
  

export function Row(props) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow
      
        sx={{
          "& > *": {
            borderBottom: "1px solid #E0E1FF",
            backgroundColor: "#FCFEFF",
            color:'#000',

          },
        }}
      >
        <TableCell className='font-[urbanist] px-0 font-medium text-black'>
        <div className='flex items-center gap-2'>
           <div className='w-9 h-9 content-center text-center rounded-lg border font-normal text-gray-700'>fk</div>
           <div>
            <p>{data.Channel}</p>
            <p>{data.ChannelId}</p>
           </div>
        </div>                
        </TableCell>
        <TableCell className='font-[urbanist] px-0 text-black' >{data.SKUCode}</TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium text-black' >{data.Date}</TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium text-black' >
            <div className='flex'>
                <p className='w-1/3 px-2'>{data.Applicable.zone}</p>
                <p className='w-1/3 px-2'>{data.Applicable.weight}</p>
                <p className='w-1/3 px-2'>{data.Applicable.shippingFee}</p>
            </div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium text-black' >
            <div className='flex'>
                <p className='w-1/3 px-2'>{data.Applied.zone}</p>
                <p className='w-1/3 px-2'>{data.Applied.weight}</p>
                <p className='w-1/3 px-2'>{data.Applied.shippingFee}</p>
            </div>
        </TableCell>
        <TableCell className='font-[urbanist] px-2 text-black' >{data.Gap}</TableCell>
        <TableCell className='font-[urbanist] px-0 text-black w-20'>
          <div className='flex gap-2 items-start'>
            <div>
            <p>{data.Gap}</p>
            <div className={`text-[#1f674f] text-[13px] font-semibold rounded-full text-center`}>
            <div className='flex items-center gap-1'>
                <Image src='/images/icon-light-green-check.svg' alt='' width={18} height={18}/>
                <p>{data.Status}</p>
            </div>
            </div>  
            </div>
            <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </IconButton>
          </div>
        </TableCell>
      </TableRow>
      <TableRow >
        <TableCell style={{ padding: 0, width: "100%", fontFamily:'urbanist' }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "16px 24px", background: "#F3F4FB" }}>
              <ul className="flex flex-wrap gap-6">
                {expandedFields.map((item) => (
                  <li key={item.field} className="space-y-1 w-1/5">
                    <div className="flex text-xs items-center space-x-1 text-[#68698A]">
                      <GoInfo />
                      <span className="font-medium leading-none">
                        {item.label}
                      </span>
                    </div>
                    <p className={` font-medium`}> <span >{data[item.field]}</span></p>
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
export default function ShippingTablePegi() {
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
  return (
    <div className='w-full  mx-auto overflow-auto my-5'>
        <TableContainer component={"div"} className=' w-[1200px] 2xl:w-full'>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      "& > *": {
                        borderBottom: "1px solid #E0E1FF",
                        backgroundColor: "#FCFEFF",
                        fontFamily:'urbanist',
                        fontWeight:700,
                      },
                    }}
                  >
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0 content-end" >
                        <p className='py-1.5'>Channel</p>
                    </TableCell>
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0  content-end" >
                    <p className='py-1.5'>SKU Code</p>
                    </TableCell>
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0  content-end" >
                    <p className='py-1.5'>Date</p>
                    </TableCell>
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0 min-w-24" >
                        <div className='text-center border-b pb-2'>
                        Applicable
                        </div>
                        <div className='flex py-1.5'>
                            <p className='w-1/3 px-2 '>Zone</p>
                            <p className='w-1/3 px-2 border-x'>Weight</p>
                            <p className='w-1/3 px-2 '>Shipping Fee</p>
                        </div>
                    </TableCell>
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0 min-w-24 border-x" >
                        <div className='text-center border-b pb-2'>
                        Applied
                        </div>
                        <div className='flex py-1.5'>
                            <p className='w-1/3 px-2 '>Zone</p>
                            <p className='w-1/3 px-2 border-x'>Weight</p>
                            <p className='w-1/3 px-2 '>Shipping Fee</p>
                        </div>
                    </TableCell>
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0  content-end" >
                    <p className='py-1.5 pl-2'>Gap</p>
                    </TableCell>
                    <TableCell className="font-[urbanist] text-[#68698A] text-[13px] p-0  content-end" >
                    <p className='py-1.5'>Order Type / Status</p>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                {dataArray.map((row, idx) => (
                <Row key={idx} data={row} />
                 ))}
                </TableBody>
              </Table>
            </TableContainer>
        <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </div>
  )
}
