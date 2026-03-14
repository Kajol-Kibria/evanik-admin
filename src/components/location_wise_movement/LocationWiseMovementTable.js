import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CollapsibleTable from "../common/CollapsibleTable";
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import {
  Dialog,
  DialogContentLarge,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "../../../node_modules/next/image";
import StateTable from "./StateTable";


const columns = [
    
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},
  { field: "", headerName: ""},

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
        <TableCell className='font-[urbanist] px-0 font-medium' >
            {data.SKU}
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>North Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg">{data.NorthTotal}</span></p>
        </TableCell>
        {/* <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>North West Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg">{data.NorthWestTotal}</span></p>
        </TableCell> */}
        <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>East Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg">{data.EastTotal}</span></p>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>West Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg">{data.WestTotal}</span></p>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>South Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg">{data.SouthTotal}</span></p>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>North East Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg">{data.NorthEastTotal}</span></p>
        </TableCell>
        <TableCell className='font-[urbanist] px-0 font-medium' >
            <p>Grand Total <span className="mx-1 px-2.5 py-1.5 border bg-blue/10 rounded-lg font-bold">{data.GrandTotal}</span></p>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger>
              <Image src='/images/icon-india-map.svg' alt='' width={20} height={23}/>
              </DialogTrigger>
              <DialogContentLarge className=' overflow-auto max-h-[90vh]'>
                <DialogHeader>
                  <DialogTitle>
                  </DialogTitle>
                  <StateTable data={data.Statedata}/>
                </DialogHeader>
              </DialogContentLarge>
            </Dialog>
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
        <TableCell style={{ padding: 0,  fontFamily:'urbanist' }} colSpan={13}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "8px 24px", background: "#F3F4FB"}}>
              <ul className="flex gap-7  ">
               <li className="text-black  w-1/5  border-r ">
                <p className="text-gray-600 font-semibold pb-2">North</p>
                <div className="flex justify-between">
                <div className="space-y-2">
                <p>Chandigarh</p>
                <p>Delhi</p>
                <p>Haryana</p>
                <p>Himachal Pradesh</p>
                <p>Jammu & Kashmir</p>
                <p>Ladakh</p>
                <p>Punjab</p>
                <p>Rajasthan</p>
                <p>Uttar Pradesh</p>
                <p>Uttarakhand</p>
                </div>
                <p className="text-blue font-bold px-5">1</p>
                </div>
               </li>
               <li className="text-black  w-1/5  border-r ">
                <p className="text-gray-600 font-semibold pb-2">East</p>
                <div className="flex justify-between">
                <div className="space-y-2">
                <p>Bihar</p>
                <p>Jharkhand</p>
                <p>Odisha</p>
                <p>West Bengal</p>
                </div>
                <p className="text-blue font-bold px-5">1</p>
                </div>
               </li>
               <li className="text-black  w-1/5  border-r ">
                <p className="text-gray-600 font-semibold pb-2">West</p>
                <div className="flex justify-between">
                <div className="space-y-2">
                <p>Madhya Pradesh</p>
                <p>Gujrat</p>
                <p>Madhya Pradesh</p>
                <p>Goa</p>
                <p>Daman & Diu</p>
                <p>Dadra and Nagar Haveli</p>
                </div>
                <p className="text-blue font-bold px-5">1</p>
                </div>
               </li>
               <li className="text-black  w-1/5  border-r ">
                <p className="text-gray-600 font-semibold pb-2">South</p>
                <div className="flex justify-between">
                <div className="space-y-2">
                <p>Andaman and Nicobar Islands</p>
                <p>Andhra Pradesh</p>
                <p>Karnataka</p>
                <p>Karnataka</p>
                <p>Karnataka</p>
                <p>Karnataka</p>
                <p>Telangana</p>
                </div>
                <p className="text-blue font-bold px-5">1</p>
                </div>
               </li>
               <li className="text-black  w-1/5 ">
                <p className="text-gray-600 font-semibold pb-2">North East</p>
                <div className="flex justify-between">
                <div className="space-y-2">
                <p>Arunachal Pradesh</p>
                <p>Assam</p>
                <p>Manipur</p>
                <p>Meghalaya</p>
                <p>Nagaland</p>
                <p>Sikkim</p>
                </div>
                <p className="text-blue font-bold px-5">1</p>
                </div>
               </li>
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function LocationWiseMovementTable({data}) {
  return (
    <CollapsibleTable columns={columns}>
          {data.map((row, idx) => (
            <Row key={idx} data={row} />
          ))}
    </CollapsibleTable>
  )
}
