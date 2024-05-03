import React from "react";
import "./style.scss"
import HomeLogo from '../../assets/image/home.svg'
import LikeLogo from '../../assets/image/like.svg'
import ProfileLogo from '../../assets/image/profile.svg'
import historyLogo from '../../assets/image/history.svg'
import { Link } from "react-router-dom";
function Navbar(){
return(
    <>
    <section id="Navbar">
        <div id="home"><Link><img src={HomeLogo}alt="" /></Link></div>
        <div id="Like"><Link><img src={LikeLogo}alt="" /></Link></div>
        <div id="Profile"><Link><img src={ProfileLogo} alt="" /></Link></div>
        <div id="history"><Link to='/history'><img src={historyLogo} alt="" /></Link></div>
    </section>
    </>
);
}
export default Navbar