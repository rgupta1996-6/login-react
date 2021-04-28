import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {fetchAccounts} from '../actions';



const DebitBalance = (props) => {
    const accid = props.accid; 
    const [amount,setAmount]= useState('');
    const [redirect,setRedirect]= useState(false);

    const onFormSubmit = async (e) => {

        e.preventDefault();
        const data = {
            accID: accid.toString(),
            amount: amount,
        };

        await axios.post('http://localhost:8000/api/debitbalance',data);
        setRedirect(true);
        props.setOpen(false);
        props.fetchAccounts(props.tableData);

    }

    if (redirect){
        return <Redirect to="/"/>;
    }


    return (
        
      <form onSubmit={onFormSubmit}>
        <h3 className="h3 mb-3 fw-normal text-muted">Enter Amount</h3>

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
        <button className="w-100 btn btn-lg btn-primary btn-small" type="submit">
          Submit
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