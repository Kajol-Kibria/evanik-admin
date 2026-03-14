import * as React from 'react'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { GoInfo } from 'react-icons/go'
import CollapsibleTable from '../common/CollapsibleTable'
import DropButton from '../common/DropButton'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  getInboundData,
  getinboundData,
  getInboundLength,
  getinboundLength,
} from '../../alldatafiles/inbounddata'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

const columns = [
  { field: 'Date', headerName: 'Date' },
  { field: 'Ship TO', headerName: 'Ship TO' },
  { field: 'Shipment Id', headerName: 'Shipment Id' },
  { field: 'SKUs', headerName: 'SKUs' },
  { field: 'Dispatched Qty', headerName: 'Dispatched Qty' },
  { field: 'inbound by FBA', headerName: 'Inbound by FBA' },
  { field: 'Diff', headerName: 'Diff' },
  { field: '', headerName: '' },
]

function Row(props) {
  const { data } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': {
            borderBottom: '1px solid #E0E1FF',
            backgroundColor: '#FCFEFF',
            fontWeight: 'medium',
          },
        }}
      >
        <TableCell style={{ fontFamily: 'urbanist' }}>{data.Date}</TableCell>
        <TableCell style={{ fontFamily: 'urbanist' }}>{data.ShipTO}</TableCell>
        <TableCell
          className="font-[urbanist] text-blue cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {data.ShipmentId}
        </TableCell>
        <TableCell style={{ fontFamily: 'urbanist' }}>{data.SKUs}</TableCell>

        <TableCell style={{ fontFamily: 'urbanist' }}>
          {data.DispatchedQty}
        </TableCell>
        <TableCell style={{ fontFamily: 'urbanist' }}>
          {data.InboundbyFBA}
        </TableCell>
        <TableCell style={{ fontFamily: 'urbanist' }}>{data.Diff}</TableCell>

        <TableCell>
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
        <TableCell
          style={{ padding: 0, width: '100%', fontFamily: 'urbanist' }}
          colSpan={10}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: '0px 24px', background: '#F3F4FB' }}>
              <ul className="flex items-center gap-7 ">
                <li className="text-xs w-1/5">
                  <div className="my-3 text-gray-600 font-semibold">SKU</div>
                  <p>{data.SKU}</p>
                </li>
                <li className="text-xs w-1/5">
                  <div className="my-3 text-gray-600 font-semibold">
                    Product
                  </div>
                  <p>{data.Product}</p>
                </li>
                <li className="text-xs w-1/5">
                  <div className="my-3 text-gray-600 font-semibold">
                    Additional information
                  </div>
                  <p>{data.Size}</p>
                  <p>{data.ASIN}</p>
                  <p>{data.FNSKU}</p>
                </li>
                <li className="text-xs w-3/5">
                  <div className=" text-gray-600 font-semibold text-center border-b border-r border-l border-gray-300 py-2">
                    Quantity
                  </div>
                  <div className="flex items-start">
                    <div className="w-1/4">
                      <p className="border-l border-r p-2 border-gray-300">
                        Received
                      </p>
                      <input
                        className="py-1 w-1/2 border rounded-lg px-2 text-sm m-2 outline-none"
                        type="text"
                        defaultValue={data.Received}
                      />
                      <button className="border-blue border rounded-md text-blue hover:text-white hover:bg-blue transition-all duration-300 px-2 py-1 m-3">
                        Received All
                      </button>
                    </div>
                    <div className="w-1/4">
                      <p className="border-r p-2 border-gray-300">PO</p>
                      <p className="py-1 w-1/2 m-2 ">{data.PO}</p>
                    </div>
                    <div className="w-1/4">
                      <p className="border-r p-2 border-gray-300">Received</p>
                      <input
                        className="py-1 w-1/2 border rounded-lg px-2 text-sm m-2 outline-none"
                        type="text"
                        defaultValue={data.Rejected}
                      />
                      <button className=" m-3 text-blue font-semibold">
                        Rejecte Reason
                      </button>
                    </div>
                    <div className="w-1/4">
                      <p className=" border-r p-2 border-gray-300">Net Good</p>
                      <input
                        className="py-1 w-1/2 border rounded-lg px-2 text-sm m-2 outline-none"
                        type="text"
                        defaultValue={data.NetGood}
                      />
                    </div>
                  </div>
                </li>
                <li className="text-xs text-center w-1/5">
                  <div className="my-3 text-gray-600 font-semibold">
                    Unit Price
                  </div>
                  <p>{data.UnitPrice}</p>
                </li>
              </ul>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

function InboundTable() {
  const [inboundlimit, setinboundLimit] = React.useState(5)
  const [inboundpage, setinboundPage] = React.useState(1)
  let totalinboundPage = Math.ceil(getInboundLength() / inboundlimit)
  function handleinboundPageChange(value) {
    if (value === 'Previous') {
      if (inboundpage !== 1) {
        setPage(inboundpage - 1)
      }
    } else if (value === 'Next') {
      if (inboundpage !== totalinboundPage) {
        setPage(inboundpage + 1)
      }
    }
  }

  const data = getInboundData(inboundpage, inboundlimit)

  return (
    <CollapsibleTable columns={columns}>
      {data.map((row, idx) => (
        <Row key={idx} data={row} />
      ))}
    </CollapsibleTable>
  )
}

export default InboundTable
