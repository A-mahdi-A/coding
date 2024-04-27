import React from "react";
import "./style.scss";
import shopLogo from "../../assets/image/shopping-cart.png"
import minmeno from '../../assets/image/minmeno.png'
function Header() {
  return (
    <>
      <header>
      <div><a href="#"><img src={minmeno} alt="" /></a></div>
        <div><a href="#"><img src={shopLogo} alt="" /></a></div>
        
      </header>
    </>
  );
}
export default Header;
