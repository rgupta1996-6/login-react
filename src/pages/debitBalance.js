import React,{useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {fetchAccounts} from '../actions';


const DebitBalance = (props) => {
    const accid = props.accid; 
    const [amount,setAmount]= useState('');
    const [message,setMessage] = useState('');
    const [alertMessage,setAlertMessage] = useState('');
    const onFormSubmit = async (e) => {

        e.preventDefault();
        const data = {
            accID: accid.toString(),
            amount: amount,
        };

        console.log(data);
        const r= await axios.post('http://localhost:8000/api/debitbalance',data);
        setMessage(r.data.message);
        setAlertMessage("Account has been debited successfully");
        props.setOpen(false);
        props.fetchAccounts(props.tableData); 
    }

    const onCancelClick = (e) => {
      e.preventDefault();
      props.setOpen(false);
      setMessage("SUCCESS");
      setAlertMessage("Transaction has been cancelled!")
    };

   props.callbackMessage(message,alertMessage);
    

   

    return (
     
      <form >
        <h1 className="h3 mb-3 fw-normal text-muted">Enter Amount</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Account ID"
          value={accid}
          readOnly
        />

        <input
          type="text"
          className="form-control"
          placeholder="Debit Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <button className="btn btn-primary btn-sm btn-secondary" type="submit" onClick={onFormSubmit}>
          Submit
        </button>
        <button style={{ marginLeft: `${10}px` }} className="btn btn-primary btn-sm btn-secondary" type="submit" onClick={onCancelClick}>
          Cancel
        </button>
      </form>
     
      
      
    );


};


const mapStateToProps = (state) => {
    return {accounts:state.accounts}
}



export default connect(
    mapStateToProps,
    {fetchAccounts}
)(DebitBalance);