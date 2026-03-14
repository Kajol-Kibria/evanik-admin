import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function CollapsibleTable({ columns, children }) {
  return (
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
              if (column.field === "checkbox") {
                return (
                  <TableCell key={i}>
                    <input id={column.field} type="checkbox"/>
                  </TableCell>
                );
              }

              return (
                <TableCell
                style={{ fontFamily:'urbanist' }}
                key={i}
                align="center"
                className="text-[#68698A]  text-left text-xs font-semibold  px-0"
                >
                  {column.headerName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody >{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
