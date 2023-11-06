import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom"

const Update = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {id} = useParams();
    const onSubmitAll = async(e) => {
      e.preventDefault();
   

    try {
      const response  = await axios.put(`http://localhost:8000/api/put/${id}`,{
          name:name,
          email:email,
          password:password,
      })

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }

  };
    
    const nameFunction = (e) => {
      setName(e.target.value);
      console.log(e.target.value);
    };

    const emailFunction = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    };

    const passwordFunction = (e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
    };

    const fetchData= async(id)=>{
        try {
            let response = await axios.get(`http://localhost:8000/api/get/${id}`);
            console.log(response.data);
            setName(response.data.name);
            console.log(setName,'nsnfknsd');
            setEmail(response.data.email);
            setPassword(response.data.password);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect (()=>{
      fetchData(id);
    },[]);

    const deleteData = async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.delete(`http://localhost:8000/api/get/${id}`)
      } catch (error) {
        console.log(error.message);
      }
    }


   


  return (
    <div style={{textAlign:"center",marginTop:"10rem",gap:'20px'}}>
      <h1>Edit form </h1>
      <form onSubmit={onSubmitAll} >
          <label >Name:</label>
          <input type="text" id="name" value={name} onChange={nameFunction}  style={{marginLeft:'20px'}}/>
        <br />
          <label>Email:</label>
          <input type="email" id="email" value={email} onChang={emailFunction} style={{marginLeft:'20px'}}/>
        <br />
          <label>password:</label>
          <input type="Password" id="password" value={password}  onChange={passwordFunction}  style={{marginLeft:'0px'}}/>
          <br/>padding
          <div style={{display:'flex',textAlign:"center",gap:"1rem",padding:"20px",alignItems:'center',marginLeft:'680px'}}>  
            <button type="submit">Submit</button>
            <Link to='/details'><button>View form</button></Link>
          </div>
      </form>
    </div>
  );
};

export default Update;