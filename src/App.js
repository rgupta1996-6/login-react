import React, { useState,useEffect } from "react";
import Login from "./pages/login";
import Nav from "./components/nav";
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
        <Route path="/" exact component={() => <Dashboard name={name} setName ={setName} />} />
        <Route path="/login" exact component={()=><Login setName ={setName}/>} />
        <Route path="/register" exact component={Register} />

        <main className="form-signin">
          <Route path="/newAccount" exact component={NewAccount} />
          <Route path="/creditBalance" exact component={CreditBalance} />
          <Route path="/debitBalance" exact component={DebitBalance} />
          <Route path="/deleteAccount" exact component={DeleteAccount} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
