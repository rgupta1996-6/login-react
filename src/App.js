import React, { useState,useEffect } from "react";
import Login from "./pages/login";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import NewAccount from "./pages/newAccount";
import CreditBalance from "./pages/creditBalance";
import DebitBalance from "./pages/debitBalance";
import DeleteAccount from "./pages/deleteAccount";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/api/user", {
        withCredentials: true,
      });

      const content = await response.data;

      setName(content.name);
    })();
  },[name]);


  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={name?() => <Dashboard />:()=><div>You Have been logged out,Please Login to continue</div>} />
        <Route path="/login" exact component={()=><Login setName ={setName}/>} />
        <Route path="/register" exact component={Register} />
    
        <main className="form-signin">
          <Route path="/newAccount" exact component={name?() => <NewAccount />:()=><div>You Have been logged out,Please Login to continue</div>} />
          <Route path="/creditBalance" exact component={name?() => <CreditBalance />:()=><div>You Have been logged out,Please Login to continue</div>} />
          <Route path="/debitBalance" exact component={name?() => <DebitBalance />:()=><div>You Have been logged out,Please Login to continue</div>} />
          <Route path="/deleteAccount" exact component={name?() => <DeleteAccount />:()=><div>You Have been logged out,Please Login to continue</div>} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
