import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
    const { login } = useContext(AuthContext);
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
            await login(inputs);
            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="mx-auto bg-white py-[10rem] px-5 md:w-[60%] max-w-[750px]">
                <h1 className=" text-center text-2xl text-med-blue ">Login</h1>
                <form className="flex flex-col " onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                        className=" text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        className=" text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
                    />
                    <button className="mt-5 text-white bg-med-blue py-2 px-3 rounded-md">
                        Login
                    </button>
                    {err && <p>{err}</p>}
                    <span className="my-3  text-med-blue">
                        Don't have an account?{" "}
                        <Link className=" text-med-blue" to="/register">
                            Register
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
