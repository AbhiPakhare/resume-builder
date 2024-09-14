import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/auth/register", inputs);
    if (response.data) {
      console.log(response.data);
    }
  };
  return (
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
  );
};

export default Register;
