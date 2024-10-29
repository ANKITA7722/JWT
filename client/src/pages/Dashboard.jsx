import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard=()=>{
    const [userName, setUserName]=useState("");
    const navigate= useNavigate();
     
    useEffect(()=>{
      let Uname= localStorage.getItem("username");
       setUserName(Uname);
    }, [])
    

     const logout=()=>{
        localStorage.clear();
        navigate("/home");
     }

    
    return(
        <>
        <h1> Dashboard</h1>
        <h4> Welcome : {userName} !   </h4>

<button onClick={logout}> Logout </button>

        </>
    )
}
export default Dashboard;