import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


const DebitBalance = (props) => {
    const accid = props.location.aboutProps.name; 
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

    }

    if (redirect){
        return <Redirect to="/"/>;
    }


    return (
      <form onSubmit={onFormSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Enter Details</h1>

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
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    );


};

export default DebitBalance;