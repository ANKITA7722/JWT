import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios';
import { message } from 'antd'; // Corrected import

const Registration = () => {
    const [input, setInput] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => { // Added event parameter
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const api = "YOUR_API_ENDPOINT"; // Replace with actual API endpoint
        axios.post(api, input).then((res) => {
            console.log(res);
            message.success("You are successfully registered!"); // Corrected spelling
            navigate("/login");
        }).catch((error) => {
            message.error("Registration failed. Please try again.");
            console.error("Error during registration:", error);
        });
    };

    return (
        <>
            <h1>User Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" name="name" value={input.name || ''} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" name="email" value={input.email || ''} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" name="password" value={input.password || ''} onChange={handleInput} /> {/* Corrected name attribute */}
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </>
    );
};

export default Registration;
