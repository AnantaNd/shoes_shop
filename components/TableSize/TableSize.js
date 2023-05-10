import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const TableSize = ({dataSize}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>US Size</TableCell>
            <TableCell>UK Size</TableCell>
            <TableCell>UE Size</TableCell>
            <TableCell>CM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSize.map((size, i)=>(
            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{size.us}</TableCell> 
              <TableCell>{size.uk}</TableCell> 
              <TableCell>{size.ue}</TableCell> 
              <TableCell>{size.cm}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
