import { useState } from "react";
import { styled } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import {Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Paper, TableHead, TableSortLabel } from '@mui/material';

import PopupMenu from "../PopupMenu";
import { CustomCheckbox } from "./Checkbox";
import { headCells } from "./MockData";
import { Data, EnhancedTableProps, Order } from "./types";
import { tableCellClasses } from '@mui/material/TableCell';
import InvoiceTableToolbar from "../InvoiceTableToolbar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function createData(
    jobNumber: string,
    customer: string,
    location: string,
    salesRep: string,
    startDate: string,
    endDate: string,
    invoiceNumber: string,
    invoiceTotal: string,
    POAmount: number,
    totalJobSpend: string,
    totalPOSpend: string,
    lastComment: string,
    lastUpdated: string,
  ): Data {
    return {
      jobNumber,
      customer,
      location,
      salesRep,
      startDate,
      endDate,
      invoiceNumber,
      invoiceTotal,
      POAmount,
      totalJobSpend,
      totalPOSpend,
      lastComment,
      lastUpdated,
    };
  }
  
  const rows = [
    createData('20-MED1043', 'HMT INSPECTIONS, INC.', 'Tulsa', 'House account', '09/16/2021', '09/17/2021', '', '$3556.25', 0.00, '$360', '$37,225.02', '', '01/21/22 - 16:18'),
    createData('20-MED1044', 'CARASIQUE Gmbh', 'Osh', 'House account', '09/15/2021', '09/20/2021', '', '$355.00', 1.00, '$30', '$55,225.02', '', '04/22/22 - 20:20'),
    createData('20-MED1045', 'HMT INSPECTIONS, INC.', 'Cairo', 'House account', '09/16/2021', '09/17/2021', '', '$556.55', 2.00, '$860', '$67,225.02', '', '05/21/21 - 11:13'),
  ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f4f4f4',
    color: '#9FA2B4',
    fontFamily: 'Mulish',
    fontWeight: '700',
    border: 'none'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
  '.MuiButtonBase-root': {
    color: '#9FA2B4'
  },
  '.css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root.Mui-active': {
    color: '#9FA2B4'
  },
  '.MuiTableCell-root': {
    border: 'none'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: '#FFFAFA',
    },
    '.MuiTableCell-root': {
        fontFamily: 'Mulish',
        fontWeight: '700',
        color: 'black',
        borderBottom : '1px solid #DFE0EB',
    },
    '&.Mui-selected:not(:nth-of-type(even))': {
      backgroundColor: 'transparent'
    }
}));

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
          <CustomCheckbox
            color="primary"
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </StyledTableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              IconComponent={ArrowDropDownIcon}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const InvoicesTable = () => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('jobNumber');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.jobNumber);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];
    
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
        );
      }
      
    console.log("🚀 ~ file: InvoicesTable.tsx ~ line 202 ~ handleClick ~ newSelected", newSelected)
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none' }}>
        <InvoiceTableToolbar/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.jobNumber);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  
                  return (
                    <StyledTableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.jobNumber}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <CustomCheckbox
                          onClick={(event) => handleClick(event, row.jobNumber)}
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <PopupMenu/>
                          {row.jobNumber}
                        </div>
                      </TableCell>

                      <TableCell>{row.customer}</TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.salesRep}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.endDate}</TableCell>
                      <TableCell>{row.invoiceNumber}</TableCell>
                      <TableCell>{row.invoiceTotal}</TableCell>
                      <TableCell>{row.POAmount}</TableCell>
                      <TableCell>{row.totalJobSpend}</TableCell>
                      <TableCell>{row.totalPOSpend}</TableCell>
                      <TableCell>{row.lastComment}</TableCell>
                      <TableCell>{row.lastUpdated}</TableCell>
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default InvoicesTable