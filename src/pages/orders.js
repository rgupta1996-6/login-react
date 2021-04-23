import React from 'react';
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




export default function Orders({data}) {

  const rows= data;
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
    </React.Fragment>
  );
}