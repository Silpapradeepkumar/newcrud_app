import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './App.css'

function App() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  
  const onSubmitAll = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/post",{
        name:name,
        email:email,
        password:password,
    })
      console.log(response.data);
      alert("data submitted succesfully");
      
    } catch (error) {
      console.log(error.message); 
    }
  };


  const nameFunc = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const emailFunc = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const passwordFunc = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmitAll}>
      <div>
        <input type='text' id='name' onChange={nameFunc} placeholder='enter  name here...'/>
      </div>
      <br/>
      <div>
        <input type='text' id='email' onChange={emailFunc} placeholder='enter email id here...'/>
      </div>
      <br/>
      <div>
        <input type='text' id='password' onChange={passwordFunc} placeholder='enter password here...'/>
      </div>
      <br/>
      <button type='submit' >Submit</button>
      <Link to={'/details'}><button>View forms</button></Link>
    </form>
    </div>
  )
}

export default App
