import React from 'react';
import './style.css';


const Notification = (props) => {

  const classNames = props.show ? "Show" : "Hide";

  console.log(props.name);
  console.log(classNames);
    return (
        <div className={`${"Notification"} ${classNames}`}>
           {props.name}
        </div>
    )



}

export default Notification;