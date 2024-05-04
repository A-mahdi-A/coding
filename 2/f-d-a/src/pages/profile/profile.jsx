import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import bacik from "../../assets/image/backBTN.svg";
import IDCarde from "../../component/ID Card";
import './style.scss'
function Profile() {
  return (
    <>
      
        <header id="back">
          <Link to="/Home">
            <img src={bacik} alt="" />
          </Link>
        </header>
        {/* --------------------------my profile text------------------------ */}
        <section id="myP">
          <div id="titr">
            <h1>My profile</h1>
          </div>
          {/* --------------------------------- */}
          <div id="edit">
            {" "}
            <div><h5>Personal details</h5></div>
            <div id="defColor"><h5>change</h5></div>
          </div>
          {/* ============================================ */}
          <div id="idCarde"><IDCarde/></div>
        </section>
        <section></section>
      
    </>
  );
}
export default Profile;
