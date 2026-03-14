'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CollapsibleTable from "../common/CollapsibleTable";

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { getdata, getLength } from "../../alldatafiles/inventoryplanningdata";
import Pagination from "../common/Pagination";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
const columns = [
    

  { field: "SKU", headerName: "SKU"  },
  { field: "Channel", headerName: "Channel" } ,
  { field: "Sales and Profits", headerName: "Sales and Profits" },
  { field: "Daily Sales", headerName: "Daily Sales"  },
  { field: "Forecast (AI Model)", headerName: "Forecast (AI Model)"}   ,
  { field: 'Current Inventory', headerName: 'Current Inventory'}   ,
  { field:  "Restock Threshold", headerName: "Restock Threshold" },
  { field: "Days to Replenish", headerName: "Days to Replenish" },
  { field: "DOSA (Days of Stock Available)", headerName: "DOSA (Days of Stock Available)" },
  { field: "In Transit", headerName: "In Transit" },
  { field: "Suggested PO Qty", headerName: "Suggested PO Qty" },
  { field: "Excess Qty", headerName: "Excess Qty" },
  { field: "Replenishment Profits", headerName: "Replenishment Profits" },
  { field: "", headerName: ""} 

]

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
        <TableCell className="font-[urbanist] text-xs text-gray-700 font-semibold">
        {data.SKU}
        </TableCell>
        <TableCell className='font-[urbanist]'><p className="w-9 h-9 border rounded-lg flex items-center justify-center">{data.Channel}</p></TableCell>
        <TableCell className='font-[urbanist]' >{data.SalesandProfits}</TableCell>
        <TableCell className='font-[urbanist]' >{data.DailySales}</TableCell>
        <TableCell className='font-[urbanist]' >{data.Forecast}</TableCell>
        <TableCell className='font-[urbanist]' >{data.CurrentInventory}</TableCell>
        <TableCell className='font-[urbanist]' >{data.RestockThreshold}</TableCell>
        <TableCell className='font-[urbanist]' >{data.DaystoReplenish}</TableCell>
        <TableCell className='font-[urbanist]' >{data.DOSA}</TableCell>
        <TableCell className='font-[urbanist]' >{data.InTransit}</TableCell>
        <TableCell className='font-[urbanist]' >{data.SuggestedPOQty}</TableCell>
        <TableCell className='font-[urbanist]' >{data.ExcessQty}</TableCell>
        <TableCell className='font-[urbanist]' >{data.ReplenishmentProfits}</TableCell>
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
        <TableCell style={{ padding: 0,  fontFamily:'urbanist' }} colSpan={14}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "8px 24px", background: "#F3F4FB"}}>
              <ul className="flex text-xs ">
               <li className="space-y-3 text-black  px-6 w-1/4  border-r ">
                <p className="text-gray-600 font-semibold text-center">Suggested Price Change</p>
                <div className="flex justify-between mx-1">
                <div className="space-y-5">
                <p>Az</p>
                <p>Fk</p>
                <p>Sd</p>
                <p>Ms</p>
                <p>My</p>
                </div>
                  <div className="space-y-5 font-semibold">
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                  </div>
                </div>
               </li>
               <li className="space-y-3 text-black border-r px-6 w-1/4 ">
               <p className="text-gray-600 font-semibold text-center">Average Daily Sales</p>
                <div className="flex justify-between mx-1">
                <div className="space-y-5">
                <p>Last 7 Days</p>
                <p>Last 15 Days	</p>
                <p>Last 30 Days</p>
                <p>Last 45 Days	</p>
                <p>Yesterday</p>
                <p className="text-black font-semibold">Weighted Daily</p>
                </div>
                  <div className="space-y-5 font-semibold">
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                  </div>
                </div>
                
               </li>
               <li className="space-y-3 text-black px-6 w-1/4 border-r">
                <p className="text-gray-600 font-semibold  text-center">Forecast (AI Model)</p>
                <div className="flex justify-between">
                    <div className="space-y-5">
                    <p>Next 7 Days</p>
                    <p>Next 15 Days	</p>
                    <p>Next 30 Days</p>
                    <p>Next 45 Days	</p>
                    <p>Tomorrow</p>
                    <p className="text-black font-semibold">Weighted Daily</p>
                    </div>
                    <div className="space-y-5 font-semibold">
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    <p>65</p>
                    </div>
                </div>
                
               </li>
               
               
               <li className="space-y-3 text-black px-6 w-1/4">
               <p className="text-gray-600 font-semibold  text-center">Sales vs Replenishment</p>
               <div className="flex justify-between">
                    <div className="space-y-5">
                    <p>YNOF</p>
                    <p>Last 15 Days	</p>
                    <p>Last 30 Days</p>
                    <p>Last 45 Days	</p>
                    <p>Yesterday</p>
                    </div>
                    <div className="space-y-5  font-semibold">
                    <p>28</p>
                    </div>
                    <div className="space-y-5  font-semibold">
                    <p>28</p>
                    </div>
                </div>
               </li>
               {/* <li className="space-y-3 text-black px-6 w-1/5  border-r">
               <p className="text-gray-600 font-semibold  text-center">Suggested Replenishment Qty</p>
               <div className="flex justify-between">
                    <div className="space-y-5">
                    <p>BLR5</p>
                    <p>BLR7</p>
                    <p>BOM3</p>
                    <p>BOM7</p>
                    <p>HYD8</p>
                    <p>DEL4</p>
                    </div>
                    <div className="space-y-5  font-semibold">
                    <p>{data.BLR5}</p>
                    <p>{data.BLR7}</p>
                    <p>{data.BOM3}</p>
                    <p>{data.BOM7}</p>
                    <p>{data.HYD8}</p>
                    <p>{data.DEL4}</p>
                    </div>
                </div>
               </li> */}
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function InventoryPlanningTable() {
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);
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

  const data = getdata(page, limit);


  return (
    <>
    <TableContainer sx={{
          "& > *": {
            minWidth: 1200,
          },
        }} component={"div"}>
          <Table >
            <TableHead>
              <TableRow
              
                sx={{
                  "& > *": {
                    borderBottom: "1px solid #E0E1FF",
                    backgroundColor: "#FCFEFF",
                    fontFamily:'urbanist',
                  },
                }}
              >
                {columns.map((column, i) => {
                  return (
                    <TableCell
                    style={{ fontFamily:'urbanist' }}
                    key={i}
                    align="center"
                    className="text-[#68698A] text-center text-xs font-semibold px-2"
                    >
                      {column.headerName}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody >
            {data.map((row, idx) => (
            <Row key={idx} data={row} />
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      
    <Pagination currentPage={page} totalPage = {totalPage} onPageChange={handlePageChange}/>
    </>
  );
}

export default InventoryPlanningTable;
