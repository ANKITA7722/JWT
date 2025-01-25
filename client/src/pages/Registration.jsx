import { useState } from "react";
import axios from "axios";

const Registration=()=>{ 
  const [input, setInput]= useState({});
  const handleInput=(e)=>{
     let name= e.target.name;
     let value= e.target.value;
     setInput(values=>({...values, [name]:value}));
  }

  const handleSubmit=()=>{
    let api="http://localhost:8000/user/registration";
    axios.post(api, input).then((res)=>{
      alert("You are succesfully Registered!!!");
    })
  }

    return(
        <>
          <h1> Registration</h1>
          Enter User name : <input type="text" name="username" 
          value={input.username} onChange={handleInput} />
          <br/>
          Enter email : <input type="text" name="email" 
            value={input.email} onChange={handleInput} />
          <br/>
          Enter password : <input type="password"  name="password" 
            value={input.password} onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}> Register</button>
        </>
    )
}
export default Registration;