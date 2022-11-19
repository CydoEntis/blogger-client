import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
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
            const res = await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="auth">
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    required
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    required
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <button>Register</button>
                {err && <p>{err}</p>}
                <span>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
