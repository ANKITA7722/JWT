import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home=()=>{
  const navigate= useNavigate();
  useEffect(()=>{
  const authCheck = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) { localStorage.setItem("auth-token", ""); token = ""; }
    const tokenResponse = await axios.post("http://localhost:8000/user/checkuservalidation", null, { headers: { "x-auth-token": token } });    
    console.log(tokenResponse.data);
    if (tokenResponse.data) { 
          navigate("/dashboard");
     }
  }
  authCheck();
}, []) 


    return(
        <>
          <h1> Welcome To Home Page</h1>
        
        </>
    )
}

export default Home;