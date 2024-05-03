import React from "react";
import "./style.scss";
import FoodImage from "../../assets/image/Mask Group.svg";
function Card() {
  return (
    <>
      <section id="cardsParent">
        <div id="im">
          <img src={FoodImage} alt="" />
        </div>
        <div>
          <h2 id="foodName">Veggie <br />tomato mix</h2>
          <p 
          id="Price">N1,900</p>
        </div>
      </section>
    </>
  );
}
export default Card;
