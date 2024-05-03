import React from "react";
import "./style.scss";
import shopLogo from "../../assets/image/shopping-cart.png"
import minmeno from '../../assets/image/minmeno.png'
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
      <div><Link ><img src={minmeno} alt="" /></Link></div>
        <div><Link to='/order'><img src={shopLogo} alt="" /></Link></div>
        
      </header>
    </>
  );
}
export default Header;
