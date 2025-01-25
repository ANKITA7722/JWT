
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard=()=>{
    const [username, setUsername]= useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        setUsername(localStorage.getItem("uname"));
    }, [])


    const logout=()=>{
        localStorage.clear();
        navigate("/home");

    }
    return(
        <>
          <h1> User Dashboard!!!</h1>
          <h2> Welcome : {username} !  

            <button onClick={logout}>Logout</button>
          </h2>


        </>
    )
}

export default DashBoard;