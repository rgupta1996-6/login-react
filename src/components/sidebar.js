import React from 'react';
import {Link} from "react-router-dom";


const Sidebar = () => {

    return(
        <div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to = "/newAccount" className="nav-link active" aria-current="page">
              Add new account
            </Link>
          </li>
        
          <li className="nav-item">
          <Link to = "/deleteAccount" className="nav-link active" aria-current="page">

              Delete Account
            </Link>
          </li>
        </ul>
    </div>
    </nav>
    </div>
    </div>
    );

};

export default Sidebar;