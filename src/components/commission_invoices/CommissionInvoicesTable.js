import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CollapsibleTable from "../common/CollapsibleTable";

const columns = [
  { field: "checkbox", headerName: ""},
  { field: "Channel", headerName: "Channel"},
  { field: "Store", headerName: "Store"  },
  { field: "Warehouse", headerName: "Warehouse"  },
  { field: "Date", headerName: "Date" },
  { field: "Invoice ID", headerName: "Invoice ID"},
  { field: "Type", headerName: "Type"},
  { field: "GSTIN", headerName: "GSTIN"},
  { field: "Taxable Amount", headerName: "Taxable Amount"},
  { field: "Invoice Amount", headerName: "Invoice Amount"},
  { field: "Expenses", headerName: "Expenses"},
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
        <TableCell>
          <input type="checkbox"/>
        </TableCell>
        <TableCell className='font-[urbanist] px-0' >
          <p className=" w-9 h-9 flex items-center justify-center border rounded-lg">{data.Channel}</p>
        </TableCell>
        <TableCell className='font-[urbanist] px-0' >
            <p>{data.Store}</p>
            <p>({data.StoreId})</p>
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.Warehouse}
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.Date}
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.InvoiceID}
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.Type}
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.GSTIN}
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.TaxableAmount}
        </TableCell>
        <TableCell className='font-[urbanist] px-0'>
          {data.InvoiceAmount}
        </TableCell>
        <TableCell className='px-0'>
          <button
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            className="border-blue text-blue hover:bg-blue hover:text-white font-medium border rounded-lg py-1 px-4 transition-all duration-300"
          >
            View
          </button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0, width: "100%", fontFamily:'urbanist' }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "14px 24px", background: "#F3F4FB" }}>
            <ul className="flex gap-7 justify-end">
               <li className="space-y-3 text-black w-40">
                <p className="text-gray-600 font-medium text-[13px] ">Expense Head</p>
                <p>Shipping Charges</p>
                <p>Commision Fee</p>
                <p>Advertising Expenses</p>
               </li>
               <li className="space-y-3 text-black w-32">
                <p className="text-gray-600 font-medium text-[13px] ">Taxable Value</p>
                <p>{data.ShippingCharges.TaxableValue}</p>
                <p>{data.CommisionFee.TaxableValue}</p>
                <p>{data.AdvertisingExpenses.TaxableValue}</p>
               </li>
               <li className="space-y-3 text-black w-32">
                <p className="text-gray-600 font-medium text-[13px] ">Tax Amount</p>
                <p>{data.ShippingCharges.TaxAmount}</p>
                <p>{data.CommisionFee.TaxAmount}</p>
                <p>{data.AdvertisingExpenses.TaxAmount}</p>
               </li>
               <li className="space-y-3 text-black w-32">
                <p className="text-gray-600 font-medium text-[13px] ">Total</p>
                <p>{data.ShippingCharges.Total}</p>
                <p>{data.CommisionFee.Total}</p>
                <p>{data.AdvertisingExpenses.Total}</p>
               </li>
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CommissionInvoicesTable({ data }) {
  return (
    <CollapsibleTable columns={columns}>
          {data.map((row, idx) => (
            <Row key={idx} data={row} />
          ))}
    </CollapsibleTable>
  )
}
