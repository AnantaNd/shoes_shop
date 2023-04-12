import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Container, Grid } from '@mui/material'
import clsx from 'clsx'


// data grid
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 90,
    align: 'center',
    headerAlign: 'center',
    headerClassName: 'header'
  },
  {
    field: 'name',
    headerName: 'ITEM',
    minWidth: 80,
    headerClassName: 'header'
  },
  {
    field: 'price',
    headerName: 'PRICE (Rp)',
    minWidth: 180,
    type: 'number',
    align: 'right',
    headerAlign: 'right',
    headerClassName: 'header'
  },
  {
    field: 'status',
    headerName: 'STATUS',
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    headerClassName: 'header',
    cellClassName: (params)=>{
      if(params.value == null){
        return ''
      }
      return clsx('status',{
        success: params.value == 'success',
        pending: params.value == 'pending',
        process: params.value == 'process',
        failed: params.value == 'failed'
      })
    }
  }
]

export const TableHistory = ({dataHistory}) => {

  return (
    <Container maxWidth='sm'>
      <Box 
        sx={{ 
          height: '380px',
          width: '100%',
        }}>
        <DataGrid
          rows={dataHistory}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            '& .status.success':{
              color: 'white',
              backgroundColor: '#367E18',
              textTransform: 'uppercase'
            },
            '& .status.pending':{
              color: 'white',
              backgroundColor: '#FD841F',
              textTransform: 'uppercase'
            },
            '& .status.process':{
              color: 'white',
              backgroundColor: '#F2A71B',
              textTransform: 'uppercase'
            },
            '& .status.failed':{
              color: 'white',
              backgroundColor: '#D2001A',
              textTransform: 'uppercase'
            },
          }}
        />
      </Box>
    </Container>
  )
}
