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



const columns = [
  { field: "checkbox", headerName: "" },
  { field: "Product", headerName: "Product" },
  { field: "ASIN", headerName: "ASIN" },
  { field: "Monthly orders", headerName: "Monthly orders(contribution to sales last 4 weeks)" },
  { field: "Instock Inventory", headerName: "Instock Inventory" },
  { field: "Recommend Qty", headerName: "Recommend Qty" },
  { field: "Days of supply left", headerName: "Days of supply left" },
  { field: "collapse", headerName: ""},
];

const expandedFields = [
  { field: "RecommendedFCzone", label: "Recommended FC (zone)" },
  { field: "AlternateFC", label: "Alternate FC" },
  { field: "ShiptoFCDate", label: "Ship to FC Date" },
  { field: "Accuracy", label: "Accuracy %" },
  { field: "RecommendationCoverageWeeks", label: "Recommendation Coverage(Weeks)" },
  { field: "CreateInbound", label: "Create Inbound" },
  
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
        <input
            id={data.Product}
            type="checkbox"
            value=""
            className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300  focus:ring-[#86b7fe] focus:ring-2 rounded-lg"
          />
        </TableCell>
        <TableCell style={{ fontFamily:'urbanist' }} >{data.Product}</TableCell>
        <TableCell style={{ fontFamily:'urbanist' }} >{data.ASIN}</TableCell>
        <TableCell style={{ fontFamily:'urbanist' }} >{data.Monthlyorders}</TableCell>
        <TableCell style={{ fontFamily:'urbanist' }} >{data.InstockInventory}</TableCell>
        
      
        
          <TableCell style={{ fontFamily:'urbanist' }} >{data.RecommendQty}</TableCell>
          <TableCell style={{ fontFamily:'urbanist' }} >{data.Daysofsupplyleft}</TableCell>
          

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
        <TableCell style={{ padding: 0, width: "100%", fontFamily:'urbanist' }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "12px 24px", background: "#F3F4FB" }}>
              <ul className="flex  gap-6">
                {expandedFields.map((item) => (
                  <li key={item.field} className="space-y-1 w-1/6">
                    <div className="flex text-xs items-center space-x-1 text-[#68698A]">
                      <GoInfo />
                      <span className="font-medium leading-none">
                        {item.label}
                      </span>
                    </div>
                    <p className={` font-medium`}> <span >{data[item.field]}</span> </p>
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

function RestockTable({ data }) {
  return (
    <CollapsibleTable columns={columns}>
      {data.map((row, idx) => (
        <Row key={idx} data={row} />
      ))}
    </CollapsibleTable>
  );
}

export default RestockTable;
