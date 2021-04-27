import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/nav';


const DeleteAccount = () => {
    const [accID,setAccID] = useState(''); 
    const [redirect,setRedirect]= useState(false);

    const onFormSubmit = async (e) => {

        e.preventDefault();
        const data = {
            accID: accID,
        };

        await axios.post('http://localhost:8000/api/deleteaccount',data);
        setRedirect(true);

    }

    if (redirect){
        return <Redirect to="/"/>;
    }


    return (
     
      <form onSubmit={onFormSubmit} >
        <h1 className="h3 mb-3 fw-normal">Please Enter Details</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Account ID"
          onChange={(e) => setAccID(e.target.value)}
        />
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
      
    );


};

export default DeleteAccount;