import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/auth/login", inputs);
            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <button>Login</button>
                {err && <p>{err}</p>}
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
