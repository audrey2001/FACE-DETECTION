import React, { useState } from "react";
import "./authentication.css";
import Navigation from "../navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const onName = (e) => {
    setName(e.target.value);
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitRegister = () => {
    // this is to post whatever we have recieved to our backend
    // by default fetch does a get request
    fetch("http://localhost:5002/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user)
        if (user) {
          // had to destructure loaduser to be able to use it
          loadUser(user)
          // console.log(loadUser)
          navigate("/Home");
        }
      });
    // console.log({loginEmail,loginPassword})
  };

  return (
    <div>
      <Navigation />
      <form className="register-contanier">
        <div className="register-form-contanier shadow-5">
          <p
            style={{ textAlign: "center", fontSize: "20px", marginTop: "7px" }}
          >
            REGISTER
          </p>
          <div className="register-input">
            <input
              onChange={onName}
              type="text"
              placeholder="First Name"
              name="first name"
            />
            <input type="text" placeholder="Last Name" />
            <input
              onChange={onEmail}
              type="email"
              placeholder="Email*"
              name="email"
              required
            />
            <input
              onChange={onPassword}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button
              onClick={onSubmitRegister}
              type="submit"
              className="register_button"
            >
              <Link
                to="/Home"
                style={{ textDecoration: "none", color: "white", fontSize: 15 }}
              >
                Register
              </Link>
            </button>
          </div>
          <p style={{ textAlign: "center", marginBottom: "20px" }}>
            already signed up?{" "}
            <span style={{ marginLeft: "5px", cursor: "pointer" }}>
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "white", fontSize: 15 }}
              >
                Login
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
