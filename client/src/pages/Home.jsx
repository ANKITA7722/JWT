import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'; 

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let status = localStorage.getItem("userValid");
        if (status) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const api = "YOUR_API_ENDPOINT"; // Replace with actual API endpoint
        axios.post(api, { email, password }).then((res) => {
            console.log(res.data);

            localStorage.setItem("auth-token", res.data.token);
            localStorage.setItem("username", res.data.username);

            navigate("/dashboard");
        }).catch((error) => {
            console.error("Error during submission:", error);
        });
    };

    return (
        <div>
            <h1>This is my home page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Home;
