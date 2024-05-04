import React from "react";
import bacik from "../../assets/image/backBTN.svg";
import Like from "../../assets/image/heart.png";
import "./style.scss";
import food from "../../assets/image/Mask Group.png";
import { Link } from "react-router-dom";
function InFood() {
  return (
    <>
      <header id="IN-header">
        <Link to="/Home">
          <div>
            <img src={bacik} alt="" />
          </div>
        </Link>
        <div>
          <img src={Like} alt="" />
        </div>
      </header>
      {/* ----------------------------img aned name-------------------------- */}
      <section id="imgAndName">
        <div>
          <img src={food} alt="" />
        </div>
        <div>
          <h1 id="Food-titel">Veggie tomato mix</h1>
          <p id="Price">N1,900</p>
        </div>
      </section>
      {/* __________________________text__________________________________ */}
      <section id="information"></section>
      {/* --------------------------------button--------------------------- */}
      <section id="addToSabad"></section>
    </>
  );
}
export default InFood;
