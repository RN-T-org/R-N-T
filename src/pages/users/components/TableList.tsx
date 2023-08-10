// ** React Imports
import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface Column {
  id: 'full_name' | 'email' | 'image' | 'phone_no'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'full_name', label: 'full name', minWidth: 170 },
  { id: 'email', label: 'email', minWidth: 100 },
  {
    id: 'image',
    label: 'image',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'phone_no',
    label: 'phone no',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  }
]

const TableStickyHeader = ({ dataList, pageNo, setPageNo, pageLimit, count, setPageLimit, search, setSearch }: any) => {
  // ** States
  const [rows, setRows] = useState<any[]>([])

  useEffect(() => {
    setRows(dataList)
    // setPageNo(dataList?.currentPage)
    // setCount(dataList?.totalRecords)
    // setPageLimit(dataList?.perPage)
  }, [dataList])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPageNo(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setPageLimit(+event.target.value)
    setPageNo(0)
  }

  return (
    <>
      <Card>
        {/* <CardContent sx={{ p: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Apple Watch
          </Typography>
        </CardContent> */}
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.length > 0 && rows.map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={count}
          rowsPerPage={pageLimit}
          page={pageNo}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </>
  )
}

export default TableStickyHeader
