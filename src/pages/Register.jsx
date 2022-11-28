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
        <div className="mx-auto mt-8 p-10 w-[90%] border shadow-md rounded-md">
            <h1 className="font-fredoka text-center text-2xl text-med-blue ">
                Register
            </h1>
            <form className="flex flex-col mx-auto " onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                    className="font-fredoka text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
                />
                <input
                    required
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    className="font-fredoka text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
                />
                <input
                    required
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    className="font-fredoka text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
                />
                <button className="mt-5 text-white bg-med-blue py-2 px-3 rounded-md">
                    Register
                </button>
                {err && <p>{err}</p>}
                <span className="my-3 font-fredoka text-med-blue">
                    Already have an account?{" "}
                    <Link className="font-fredoka text-vivid-blue" to="/login">
                        Login
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Register;
