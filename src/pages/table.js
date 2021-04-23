import React from "react";
import {Link} from "react-router-dom";


const Table = ({ data }) => {

   
  const renderedList = data.map((dataitem) => {
    return (
     
       
          <tr key={dataitem.accid} >
            <td>{dataitem.accid}</td>
            <td>{dataitem.acctype}</td>
            <td>{dataitem.bcode}</td>
            <td>{dataitem.contact}</td>
            <td>{dataitem.balance}</td>
            <td>
            <Link to={{pathname: "/creditbalance", aboutProps:{name:dataitem.accid}}} className="btn btn-primary" >Credit Balance</Link>
            </td>
            <td>
            <Link to={{pathname: "/debitbalance", aboutProps:{name:dataitem.accid}}}className="btn btn-primary">Debit Balance</Link>
            </td>
          </tr>
    
    );
  });

  return (
    <div>
      <h2>Account Summary</h2>
      <div className= "table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Account Type</th>
              <th>Branch Code</th>
              <th>Contact</th>
              <th>Balance</th>
              <th>Credit</th>
              <th>Debit</th>
            </tr>
          </thead>
          <tbody>
          {renderedList}
          </tbody>
        </table>
      </div>
      </div>
   
  );
};

export default Table;
