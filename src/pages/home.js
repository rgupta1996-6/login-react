import React,{useEffect} from 'react';
import Table from './table';
import Sidebar from '../components/sidebar';
import './home.css';
import { connect } from 'react-redux';
import {fetchAccounts} from '../actions';


const Home = (props) => {

    

    useEffect(() => {
       props.fetchAccounts();
      },[]);
      console.log(props.accounts);

    return (
      <div className="row">
        <div className="side">{props.name ? <Sidebar /> : ""}</div>
        <div className="main">
          {props.name
            ? "Hi " + props.name + ","
            : "You have been logged out,Please login again to continue."}
          <div>{props.name ? <Table data={props.accounts} /> : ""}</div>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {accounts:state.accounts}
}



export default connect(
    mapStateToProps,
    {fetchAccounts}
)(Home);