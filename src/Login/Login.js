import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import auth from "./git authcopy.jpg";

const Login = () => {
  const REACT_APP_GITHUB_CLIENT_ID = "your client id";
  const navigate = useNavigate();

  //authentication for oauth
  function LoginWithGithub() {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${REACT_APP_GITHUB_CLIENT_ID}`
    );
    //after auth this will navigate to repos page
    navigate("/repos");
  }

  return (
    <div>
      <div className="nav-bar">
        <h2 className="heading">Github - Oauth</h2>
      </div>
      <div className="img-intro">
        <div className="img-container">
          <img src={auth} alt="auth.img" className="auth-img" />
        </div>
        <div className="intro">
          <p className="instruction-header">Instructions</p>
          <ul className="instruction">
            <li>
              After clicking the Login(button) a page will show like the beside
              image and you need to click the green color "authorize" button to
              see the trending repositories.
            </li>
          </ul>
          <button onClick={LoginWithGithub} className="login-btn">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
