import React from 'react';
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';



export default function Orders({data}) {

  const rows= data;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <h2>Accounts Summary</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Account ID</TableCell>
            <TableCell>Account Type</TableCell>
            <TableCell>Branch Code</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell>Credit</TableCell>
            <TableCell>Debit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.accid}>
            <TableCell>{row.accid}</TableCell>
              <TableCell>{row.acctype}</TableCell>
              <TableCell>{row.bcode}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.balance}</TableCell>
              <TableCell>
                  <Link to={{pathname: "/creditbalance", aboutProps:{name:row.accid}}} className="btn btn-primary" >Credit Balance</Link>
              </TableCell>
              <TableCell>
                  <Link to={{pathname: "/debitbalance", aboutProps:{name:row.accid}}} className="btn btn-primary" >Debit Balance</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </React.Fragment>
  );
}