
import React from "react";
import "./style.scss";
import FoodImage from "../../assets/image/food.svg";
import { Link } from "react-router-dom";
function Card() {
  return (
    <>
      <section id="cardsParent">
        <Link to='/InFood'>
          <div id="im">
            <img src={FoodImage} alt="" />
          </div>
          <div>
            <h2 id="foodName">Veggie <br />tomato mix</h2>
            <p
              id="Price">N1,900</p>
          </div>
        </Link>
      </section>
    </>
  );
}
export default Card;