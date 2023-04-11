import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Container, Grid } from '@mui/material'




// data grid
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    minWidth: 90,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'name',
    headerName: 'ITEM',
    minWidth: 80,
  },
  {
    field: 'price',
    headerName: 'PRICE (Rp)',
    minWidth: 180,
    type: 'number',
    align: 'rightm mm',
    headerAlign: 'right'
  },
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 100,
    align: 'center',
    headerAlign: 'center'
  }
]


export const TableHistory = ({dataHistory}) => {
  const dotPrice =(numb)=>{
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const styleStatus = (data) =>{
    if(data === 'success'){
      return 'green'
    }else if(data === 'pending'){
      return 'orange'
    }else if(data === 'failed'){
      return 'red'
    }
  }

  return (
    <Container maxWidth='sm'>
      <Box sx={{ height: '380px'}}>
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
        />
      </Box>
    </Container>
  )
}
