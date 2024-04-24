import React from "react";
import './style.scss'
import { Link } from "react-router-dom";
function ChengPage() {
  return (
    <>
      <section id="cheng">
        <div id="Login"><Link to='/Login'>Login</Link></div>
        <div id="Sign-up"><Link to='/signUp'>Sign-up</Link></div>
      </section>
    </>
  );
}
export default ChengPage;
