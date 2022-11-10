import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputForm, BlueButton } from "../styles/Styled";
import { useNavigate } from "react-router-dom";
import instance from "../config/axios";

interface ILogin {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !inputValidation({
        email: input.email,
        password: input.password,
      })
    ) {
      try {
        let user = await instance.post("http://localhost:8080/login", {
          email: input.email,
          password: input.password,
        });
        navigate("/", { replace: true });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });

  const inputValidation = (payload: ILogin) => {
    let errorState = {
      email: false,
      password: false,
    };
    let errorTotal = false;

    if (payload.email === "") {
      errorState = { ...errorState, email: true };
      errorTotal = true;
    }
    if (payload.password === "") {
      errorState = { ...errorState, password: true };
      errorTotal = true;
    }

    setInputErrors(errorState);
    return errorTotal;
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center ">
        <div className="mt-5">
          <h1 className="fw-bold fs-1">Login</h1>
        </div>
        <form onSubmit={handleLogin} noValidate>
          <div className="row mt-5">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <br />
            <InputForm
              name="email"
              type="email"
              className='"form-control'
              id="email"
              placeholder="test@email.com"
              value={input.email}
              onChange={handleChange}
              required
            />
          </div>
          {inputErrors.email ? (
            <span className="text-danger">This Field is Required</span>
          ) : (
            <></>
          )}
          <div className="row mt-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>{" "}
            <br />
            <InputForm
              name="password"
              type="password"
              className='"form-control'
              id="password"
              value={input.password}
              onChange={handleChange}
              required
            />
          </div>
          {inputErrors.password ? (
            <span className="text-danger">This Field is Required</span>
          ) : (
            <></>
          )}
          <div className="row mt-4">
            <BlueButton type="submit">Login</BlueButton>
          </div>
        </form>
        <div className="row mt-2">
          <p>
            You don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
