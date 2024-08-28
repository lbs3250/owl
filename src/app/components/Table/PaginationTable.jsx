import { Box, styled, Table, TableBody, TableCell, TablePagination, TableRow } from '@mui/material';
import { useState } from 'react';

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': {
      '& th': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  '& tbody': {
    '& tr': {
      '& td': {
        paddingLeft: 0,
        textTransform: 'capitalize',
      },
    },
  },
}));

export default function PaginationTable ({ prop }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableBody>
          {prop.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) =>
            <TableRow key={index}>
              <TableCell align="left">{data.title}</TableCell>

              <TableCell align="right">{data.date}</TableCell>
            </TableRow>)}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={prop.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ 'aria-label': 'Next Page' }}
        backIconButtonProps={{ 'aria-label': 'Previous Page' }}
      />
    </Box>
  );
}
