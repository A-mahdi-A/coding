import "./style.scss";
import React from "react";
import LoginLogo from "../../assets/image/login logo.png";
import ChengPage from "../../component/chengPage";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      {/* sectione logo and  switch form*/}
      <section id="logo-and-switch-form">
        <img src={LoginLogo} alt="" />
        <ChengPage />
      </section>
      {/* sectione forme */}
      <section id="form">
        <div className="inputs">
          <h2>Email address</h2> <input type="email" required />
        </div>
        <div className="inputs">
          <h2>Password</h2> <input type="password" required />
        </div>

        <div id="forget">Forgot passcode?</div>
        <section id="btn-login">
          <Link to='/'><button>LOGIN</button></Link>
        </section>
      </section>
    </>
  );
}
export default Login;
