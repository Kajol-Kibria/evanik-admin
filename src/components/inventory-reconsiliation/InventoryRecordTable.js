import * as React from "react";
import { IoIosSearch } from 'react-icons/io';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CollapsibleTable from "../common/CollapsibleTable";

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { getinventoryData, getinventoryLength } from "../../alldatafiles/inventoryrecorddata";
import CustomSelect from "../common/CustomSelect";
import Image from "../../../node_modules/next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";



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
        
        <TableCell className="content-start px-2" > 
        <input id={data.Channel} type="checkbox" />
        </TableCell>
        <TableCell  className='font-[urbanist] px-0' >
        <div className='flex items-center gap-1 text-xs text-gray-700'>Channel:<p className='text-black text-sm '>{data.Channel}</p></div>
        <div className='flex items-center gap-1 text-xs text-gray-700'>WH:<p className='text-black text-sm '>{data.WH}</p></div>
        <div className='flex items-center gap-1 text-xs text-gray-700'>Seller:<p className='text-black text-sm'>{data.Seller}</p></div>
        </TableCell>
        <TableCell  className='font-[urbanist] px-0'>{data.Title}</TableCell>
        <TableCell  className='font-[urbanist] px-0'>{data.StartingWHBalance}</TableCell>
        <TableCell  className='font-[urbanist] px-0' >{data.EventType}</TableCell>
        
        
          <TableCell  className='font-[urbanist] px-0' >{data.Disposition}</TableCell>
          <TableCell  className='font-[urbanist] px-0' >{data.WHTransferIn}</TableCell>
          <TableCell  className='font-[urbanist] px-0' >{data.WHTransferOut}</TableCell>
          <TableCell  className='font-[urbanist] px-0' >{data.EndingWHBalance}</TableCell>
          <TableCell  className='font-[urbanist] px-0' >{data.ReconciledQty}</TableCell>
          <TableCell  className='font-[urbanist] px-0' >{data.UnreconciledQty}</TableCell>

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
        <TableCell style={{ padding: 0,  fontFamily:'urbanist' }} colSpan={13}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: "8px 24px", background: "#F3F4FB"}}>
              <ul className="flex gap-7  ">
               
               <li className="space-y-3 text-black  w-1/6  border-r ">
                <p className="text-gray-600 font-semibold ">Event Type</p>
                <p>Receipts</p>
                <p>Shipment</p>
                <p>Returns</p>
                <p>Found</p>
                <p>Lost</p>
               </li>
               <li className="space-y-3 text-black border-r w-1/6 ">
                <p className="text-gray-600 font-semibold ">Value</p>
                <p>{data.ReceiptsValue}</p>
                <p>{data.ShipmentValue}</p>
                <p>{data.ReturnsValue}</p>
                <p>{data.FoundValue}</p>
                <p>{data.LostValue}</p>
                
               </li>
               <li className="space-y-3 text-black w-1/6 border-r">
                <p className="text-gray-600 font-semibold ">Units</p>
                <p>{data.ReceiptsUnits}</p>
                <p>{data.ShipmentUnits}</p>
                <p>{data.ReturnsUnits}</p>
                <p>{data.FoundUnits}</p>
                <p>{data.LostUnits}</p>
               </li>
               
               
               <li className="space-y-3 text-black w-1/6  border-r">
                <p className="text-gray-600 font-semibold ">Disposition Types</p>
                <p>Sellable</p>
                <p>Defective</p>
                <p>Customer Damaged</p>
                <p>Distributor Damaged</p>
                <p>Fulfillment Centre Damaged</p>
                <p>Carrier Damaged</p>
                <p>Expired</p>
               </li>
               <li className="space-y-3 text-black  w-1/6 border-r">
                <p className="text-gray-600 font-semibold ">Value</p>
                <p>{data.SellableValue}</p>
                <p>{data.DefectiveValue}</p>
                <p>{data.CustomerDamagedValue}</p>
                <p>{data.DistributorDamagedValue}</p>
                <p>{data.FulfillmentCentreDamagedValue}</p>
                <p>{data.CarrierDamagedValue}</p>
                <p>{data.ExpiredValue}</p>
               </li>
               <li className="space-y-3 text-black w-1/6 ">
                <p className="text-gray-600 font-semibold ">Units</p>
                <p>{data.SellableUnits}</p>
                <p>{data.DefectiveUnits}</p>
                <p>{data.CustomerDamagedUnits}</p>
                <p>{data.DistributorDamagedUnits}</p>
                <p>{data.FulfillmentCentreDamagedUnits}</p>
                <p>{data.CarrierDamagedUnits}</p>
                <p>{data.ExpiredUnits}</p>
               </li>
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const aquaticCreatures = [
  { label: '1mg', value: '1mg' },
  { label: 'amazon', value: 'amazon' },
  { label: 'Flipkart', value: 'Flipkart' },
  { label: 'Jiomart', value: 'Jiomart' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];


function InventoryRecordTable() {

    const [inventorylimit, setinventoryLimit] = React.useState(5);
    const [inventorypage, setinventoryPage] = React.useState(1);
    let totalinventoryPage = Math.ceil(getinventoryLength() / inventorylimit);
    function handleinventoryPageChange(value) {
      if (value === "Previous") {
        if (inventorypage !== 1) {
          setPage(inventorypage - 1);
        }
      } else if (value === "Next") {
        if (inventorypage !== totalinventoryPage) {
          setPage(inventorypage + 1);
        }
      }
    }
  
    const data = getinventoryData(inventorypage, inventorylimit); 
  return (
    <>
    <div className="sm:flex items-start justify-between">
    <div className='sm:flex  gap-2 items-start  my-4'>
      <input type="date" className="outline-none text-xs font-semibold border rounded-lg py-2 px-3 border-gray-400 cursor-pointer"/>
      <CustomSelect options={aquaticCreatures}/>
      <CustomSelect options={aquaticCreatures}/>
      <CustomSelect options={aquaticCreatures}/>
      <div className='flex items-center mt-4 sm:mt-0 mr-5'>
            <input className='pl-5 pr-14 w-full sm:w-auto border-2 border-[#e0e1ff] outline-none placeholder:text-sm placeholder:text-gray-600 focus:placeholder-transparent py-[6px] rounded-2xl' placeholder='Search'/>
            <button className='text-gray-600 -ml-10'><IoIosSearch size={20}/></button>
      </div> 
    </div>
    <div className="flex items-center gap-4">
      <button className="buttonBlue">Upload offline</button>
      <button className='w-10 h-10 flex items-center justify-center border rounded-full hover:bg-blue/10 hover:border-blue transition-all duration-300'><Image src='/images/icon-download.svg' alt='' width={15} height={15}/></button>
    </div>
    </div>
    <TableContainer sx={{
          "& > *": {
            minWidth: 1200,
          },
        }} component={"div"}>
          <Table >
            <TableHead className='border-b'>
                <TableRow className=' text-[13px] text-left font-semibold   text-gray-500'>
                    <th className='content-end p-2'><input type='checkbox'/></th>
                    <th className='content-end py-2'><h1>SKU/ASIN</h1></th>
                    <th className='content-end py-2'><h1 >Starting WH Balance</h1></th>
                    <th>
                      <div className=" ">
                        <div className=" text-gray-600 font-semibold text-center border-b  border-l border-gray-300 py-1 uppercase">Events</div>
                        <div className="flex items-start">
                        <div className="w-1/2">
                        <p className="border-l border-r p-2 border-gray-300">Inbound</p>
                        </div>
                        <div className="w-1/2">
                        <p className=" p-2 border-gray-300">Outbound</p>
                        </div>
                        </div>
                      </div>
                    </th>
                    <th >
                    <div className=" ">
                        <div className=" text-gray-600 font-semibold text-center border-b border-x border-gray-300 py-1 uppercase">Transfers</div>
                        <div className="flex items-start">
                        <div className="w-1/2">
                        <p className="border-l border-r p-2 border-gray-300">WH Transfer In</p>
                        </div>
                        <div className="w-1/2">
                        <p className="p-2 border-gray-300 border-r">Total WH Transfer</p>
                        </div>
                        </div>
                      </div>
                    </th>
                    <th className='content-end p-2 '><h1 >Calculated WH Balance</h1></th>
                    <th className='content-end p-2 '><h1 >Actual WH Balance</h1></th>
                    <th className='content-end p-2 '><h1 >Unreconciled Qty</h1></th>
                    <th className='content-end p-2 '><h1 >Disposition</h1></th>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, idx) => (
              <Row key={idx} data={row} />
            ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}

export default InventoryRecordTable;
