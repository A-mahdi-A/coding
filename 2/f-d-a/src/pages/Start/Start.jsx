import React from "react";
import Logo from "../../assets/image/LogoStart.png";
import image from '../../assets/image/Group.png'
import './style.scss'
import StartBTN from "../../component/startPageBTN";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <div id="fader">
        {/* logo up */}
        <section id="Logo">
          <div>
            <img src={Logo} alt="" />
          </div>
        </section>
        {/* teaxt */}
        <section id="text">
          <h1>Food for <br /> Everyone</h1>
        </section>
        {/* imge */}
        <section id="img">
          <div>
            <img src={image} alt="" />
          </div>
        </section>
        {/* button */}
        <section id="btn">
         <Link to='/Login'> <StartBTN/></Link>
        </section>
      </div>
    </>
  );
}
export default Start;
