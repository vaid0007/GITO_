import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Login = () => {


  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const navigate = useNavigate()

  const handleSumbit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login",{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success") {
        navigate("/")
      }
     
    })
    .catch(err => console.log(err))
  }

    return(
        <>

<div className="container-fluid row">

    <div className="col-md-2"></div>

    <div className="col-md-8 my-5">

<form onSubmit={handleSumbit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    onChange={(e)=>setEmail(e.target.value)} 
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" 
    onChange={(e)=>setPassword(e.target.value)} 
    className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>

  <h5>don`t have an account? <NavLink to="/register">Register</NavLink></h5>
</form>

</div>

<div className="col-md-2"></div>


</div>


        
        </>
    )
}
    
export default Login;