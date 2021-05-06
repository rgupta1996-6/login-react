import React,{useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './home.css';
import Nav from '../components/nav';
import { connect } from 'react-redux';
import {fetchCount} from '../actions';
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },

}));


const NewAccount = (props) => {
  const classes = useStyles();

    const [accID,setAccID] = useState(''); 
    const [accType,setAccType] = useState('');
    const [bCode,setBCode] = useState('');
    const [contact,setContact]= useState('');
    const [bal,setBal]= useState('');
    const [redirect,setRedirect]= useState(false);

    const onFormSubmit = async (e) => {

        e.preventDefault();
        const data = {
            accID: accID,
            accType: accType,
            bCode: bCode,
            contact:contact,
            bal:bal,
        };

        await axios.post('http://localhost:8000/api/addnewaccount',data);
        props.fetchCount();
         setRedirect(true);

    }

    if (redirect){
        return <Redirect to="/"/>;
    }


    return (

        <div className={classes.root}>
        <Nav/> 
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
      <form className= {"form-signin"} onSubmit={onFormSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Enter Details</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Account ID"
          onChange={(e) => setAccID(e.target.value)}
        />

        <select
            id="drop"
          className="form-control"
          onChange={(e) => setAccType(e.target.value)}
        >
          <option disabled selected hidden>
            Choose Account Type
          </option>
          <option value="current">Current</option>
          <option value="savings">Savings</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Branch Code"
          onChange={(e) => setBCode(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Contact"
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Balance"
          onChange={(e) => setBal(e.target.value)}
        />
        <br />
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
      </main>
      </div>
    );
};


const mapStateToProps = (state) => {
  return { 
    count: state.count
  }
}



export default connect(
  mapStateToProps,
  {fetchCount}
)(NewAccount);