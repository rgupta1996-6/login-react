import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


const Login = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect]= useState(false);

    const submit=async (e)=>{
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };

      const response= await axios.post('http://localhost:8000/api/login',data,{withCredentials:true});

      const content= await response.data;
      setRedirect(true);
      props.setName(content.name);
       

    }

    if(redirect){
        return <Redirect to="/" />;
    }


    return (
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          onChange={e =>{setEmail(e.target.value)}}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={e =>{setPassword(e.target.value)}}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    );
};

export default Login;