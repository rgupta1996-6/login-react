import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [name,setName] = useState(''); 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect]= useState(false);

    const submit = async (e) => {

        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password
        };

       await axios.post('http://localhost:8000/api/register',data);

       setRedirect(true);

       }

       if (redirect){
           return <Redirect to="/login"/>;
       }


    return (
       
            <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange ={e => setName(e.target.value)} 
        />

        <input
          type="email"
          className="form-control"
          placeholder="Email ID"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>

    );
};

export default Register;