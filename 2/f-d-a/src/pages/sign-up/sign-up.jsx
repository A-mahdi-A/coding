import React from "react";
import LoginLogo from "../../assets/image/login logo.png";
import ChengPage from "../../component/chengPage";
import { Link } from "react-router-dom";
import "./style.scss";
import "./style.scss";
function signUp() {
  return (
    <>
      {/* sectione logo and  switch form*/}
      <section id="logo-and-switch-form">
        <img src={LoginLogo} alt="" />
        <ChengPage />
      </section>
      {/* sectione forme */}
      <section id="form2">
        <div className="inputs2">
          <h2>Email address</h2> <input type="email" required />
        </div>
        <div className="inputs2">
          <h2>Email address</h2> <input type="email" required />
        </div>
        <div className="inputs2">
          <h2>Password</h2> <input type="password" required />
        </div>

        <section id="btn-login2">
          <Link to="/">
            <button>LOGIN</button>
          </Link>
        </section>
      </section>
    </>
  );
}
export default signUp;
