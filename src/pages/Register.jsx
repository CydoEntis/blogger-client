import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
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
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto bg-white py-[10rem] px-5 md:w-[60%] max-w-[750px]">
        <h1 className=" text-center text-2xl text-med-blue ">Register</h1>
        <form className="flex flex-col mx-auto " onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            className=" text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
          />
          <input
            required
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            className=" text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
          />
          <input
            required
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            className=" text-xl my-5 border-b-2 border-med-blue focus:outline-none text-med-blue"
          />
          <button
            type="button"
            className="mt-5 text-white bg-med-blue py-2 px-3 rounded-md"
          >
            Register
          </button>
          {err && <p>{err}</p>}
          <span className="my-3  text-med-blue">
            Already have an account?{" "}
            <Link className=" text-med-blue" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
