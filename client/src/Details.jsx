import React, {useEffect, useState} from "react"
import axios from "axios";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




function Details(data,demo) {
    const [details,setDetails]= useState([]);
    const{name,email,password,_id} = data;

    // const fetchDataServer = async()=>{
    //   let response = await axios(`http://localhost:8000/api/get`)
    //   let toConvertJSON = await response.json();
    //   setDetails(toConvertJSON);
    //   console.log(toConvertJSON);
    // }

    const fetchDataServer = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/get");
        setDetails(response.data); // Use response.data to access the JSON data
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    
    
    const deleteData = async(id)=>{
      // id.preventDefault();
      try {
       await axios.delete(`http://localhost:5000/api/hosting/${id}`);
       fetchDataServer();
      } catch (error) {
        console.log(error.message);
      }
    }


    useEffect(()=>{
      fetchDataServer();
    },[]);
  return (
    <div>
      <h1>Registered users</h1>
      <div>
     {details.map((item,index)=>(
              <div key={index} style={{flex: '0 0 50%', maxWidth :'80%',margin :'10px', marginLeft:'30px'}}>
             <Card key={index} style={{width:'100%',}}>
              <Card.Body>
                <Card.Text>
                <div key= {index}>
                  <p><strong>Name:</strong>{item.name}</p>
                  <p><strong>email:</strong>{item.email}</p>
                  <p><strong>password:</strong>{item.password}</p>
                </div>
                </Card.Text>
              <div>
              <Link to={`/update/${_id}`}><Button variant="primary">Update</Button></Link>
              <Button onClick={()=>demo(_id)}  variant="danger">Delete</Button>
              <Link to ={'/'}><Button>Home</Button></Link>
              </div>
              </Card.Body>
             </Card>
               
                </div>
     ))
     }
     </div>
     </div>
  )
}

export default Details
