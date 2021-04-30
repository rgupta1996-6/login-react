import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {fetchAccounts} from '../actions';
import {fetchCount} from '../actions';


const DeleteAccount = (props) => {
    const accID=props.accid;
    const [redirect,setRedirect]= useState(false);

    console.log(accID);

    const onFormSubmit = async (e) => {

        e.preventDefault();
        const data = {
            accID: accID.toString(),
        };

        await axios.post('http://localhost:8000/api/deleteaccount',data);
        setRedirect(true);
        props.setOpen(false);
        props.fetchAccounts(props.tableData);
        props.fetchCount(props.tableData);

    }

    if (redirect){
        return <Redirect to="/"/>;
    }


    return (
     
      <form>
        <h4 className="h4 mb-3 fw-normal">Do you want to continue to delete this account?</h4>

        <br />
        <button className="w-40 btn btn-lg btn-primary" type="submit" onClick={onFormSubmit}>
          YES
        </button>
        <button className="w-40 btn btn-lg btn-primary" type="submit" style={{ marginLeft: `${20}px` }} onClick={(e)=>{e.preventDefault(); props.setOpen(false);}}>
          NO
        </button>
      </form>
      
    );


};

const mapStateToProps = (state) => {
  return { 
    accounts:state.accounts,
    count: state.count
  }
}



export default connect(
  mapStateToProps,
  {fetchAccounts,fetchCount}
)(DeleteAccount);