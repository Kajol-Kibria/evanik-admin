import * as React from "react";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { GoInfo } from "react-icons/go";
import Image from "next/image";
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import CollapsibleTable from "../common/CollapsibleTable";


const columns = [
  { field: "Payment Channel & Transaction History", headerName: "Payment Channel & Transaction History"},
  { field: "Revenue & Costs Breakdown", headerName: "Revenue & Costs Breakdown"  },
  { field: "TCS & TDS", headerName: "TCS & TDS" },
  { field: "Reserved & Settlement Balances", headerName: "Reserved & Settlement Balances"},
  { field: "", headerName: ""},

];

const expandedFields = [
  { field: "SellerID", label: "Seller ID" },
  { field: "PaidagainstOrders", label: "Paid against Orders" },
  { field: "DeductedagainstRefunds", label: "Deducted against Refunds" },
  { field: "OrderCount", label: "Order Count" },
  { field: "ReturnsCount", label: "Returns Count" },
  { field: "Penalties", label: "Penalties" },
 
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
       
        <TableCell className='font-[urbanist] px-0' >
        <div className="flex items-center gap-3">
        <div><p className='border rounded-lg w-9 h-9 flex items-center justify-center text-gray-700'>az</p></div>
            <div>
            <p className="text-blue font-medium underline">{data.Channel}</p>
            <p className="text-xs font-medium">{data.SettlementDate}</p>
            </div>
        </div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0' align="center">
            <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Net Orders Value:</p><p className="">{data.NetOrdersValue}</p></div>
            <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Fee & Commissions:</p><p className="">{data.FeeCommissions}</p></div>
            <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Non-order charges:</p><p className="">{data.Nonordercharges}</p></div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0' align="center">
        <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">TCS</p><p className="">{data.TCS}</p></div>
        <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">TDS</p><p className="">{data.TDS}</p></div>
        </TableCell>
        <TableCell className='font-[urbanist] px-0' align="center">
        <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Reserved Amount:</p><p className="">{data.ReservedAmount}</p></div>
        <div className="flex items-center gap-2 font-medium"><p className="text-gray-700 text-xs">Settlement Amount:</p><p className="">{data.SettlementAmount}</p></div>
        </TableCell>
        
        
       
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0, width: "100%", fontFamily:'urbanist' }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "14px 24px", background: "#F3F4FB" }}>
              <ul className="flex flex-wrap gap-6">
                {expandedFields.map((item) => (
                  <li key={item.field} className="space-y-1 w-[14%]">
                    <div className="flex text-xs items-center space-x-1 text-[#68698A]">
                      <GoInfo />
                      <span className="font-medium leading-none">
                        {item.label}
                      </span>
                    </div>
                    <p className="font-medium pt-2"> {data[item.field]} </p>
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

function TableSettlements({ data }) {
  return (
    <CollapsibleTable columns={columns}>
      {data.map((row, idx) => (
        <Row key={idx} data={row} />
      ))}
    </CollapsibleTable>
  );
}

export default TableSettlements;
