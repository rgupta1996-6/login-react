import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from './table';
import Sidebar from '../components/sidebar';
import './home.css';


const Home = (props) => {

    const [data,setData]= useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios.get("http://localhost:8000/api/showall");
    
          const content = await response.data;
    
          setData(content);
        })();
      },[]);
      console.log(data);

    return (
      <div className="row">
        <div className="side">{props.name ? <Sidebar /> : ""}</div>
        <div className="main">
          {props.name
            ? "Hi " + props.name + ","
            : "You have been logged out,Please login again to continue."}
          <div>{props.name ? <Table data={data} /> : ""}</div>
        </div>
      </div>
    );
};

export default Home;