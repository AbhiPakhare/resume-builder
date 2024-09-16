import React, { useState, useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.store";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [id]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(inputs);

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        inputs
      );

      if (response.data) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setUser(user);
        setIsLoggedIn(true);

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <div className="flex align-items-center justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              value={inputs.email || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <Button className="mt-3" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
