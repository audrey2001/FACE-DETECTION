import React, { useState } from "react";
import "./authentication.css";
import Navigation from "../navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
// import Home from '../Home/Home'
// login is a state component which makes it a smart component
const Login = ({loadUser}) => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const[error,setError] = useState("")
  let navigate = useNavigate();

  const onEmail = (e) => {
    setloginEmail(e.target.value);
  };
  const onPassword = (e) => {
    setloginPassword(e.target.value);
  };
  

  const onSubmitLogin = () => {
    // this is to post whatever we have recieved to our backend so it checks it
    // by default fetch does a get request
    // the object describes what our request would be
    fetch("http://localhost:5002/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      // we have to send it in an object format,which is json
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          loadUser(data)
          navigate("/Home");
          // window.location.href = "http://localhost:3000/Home";
          // cannot use this because it causes a reload which i do not want
        }
        if (!data.id) {
          setError(data)
        }
      })
      
    // console.log({loginEmail,loginPassword})
  };

  return (
    <div>
      <Navigation />
      <div className="register-contanier">
        <div className="register-form-contanier shadow-5">
          <p
            style={{ textAlign: "center", fontSize: "20px", marginTop: "7px" }}
          >
            LOGIN
          </p>
          <div className="register-input">
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
            />
             {/* displays error message on wrong login */}
        {error && (
          <div
            style={{
              fontSize: "12px",
              width:"70%",
              color: "black",
              borderRadius: "5px",
              backgroundColor: "white",
              textAlign: "center",
              padding:"10px",
              fontFamily:"cursive"
            }}
          >{error}
             </div>
        )}
            
            <button
              type="submit"
              className="register_button"
              onClick={onSubmitLogin}
            >
              {/* <Link
              to="/Home"
              style={{ textDecoration: "none", color: "white", fontSize: 15 }}
            > */}
              Login
            </button>
            
          </div>
          <p style={{ textAlign: "center", marginBottom: "20px" }}>
            not signed up yet?{" "}
            <span style={{ marginLeft: "5px", cursor: "pointer" }}>
              <Link
                to="/Register"
                style={{ textDecoration: "none", color: "white", fontSize: 15 }}
              >
                Register
              </Link>
            </span>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
