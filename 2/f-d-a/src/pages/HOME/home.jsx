import React from "react";
import "./style.scss";
import Header from "../../component/hedar";
import Search from "../../component/serching";
function Home() {
  return (
    <>
      {/* header */}
      <Header />
      <section id="text-Home">
        <h1>
          Delicious <br />
          food for you
        </h1>
      </section>
      {/* search */}
      <section id="serchin">

        <Search/>
      </section>
      {/* meno part */}
      <section id="meno">
        <div id="select"><a href="#">Foods</a></div>
        <div><a href="#">Drinks</a></div>
        <div><a href="#">Snacks</a></div>
        <div><a href="#">Sauce</a></div>
        <div><a href="#">wine</a></div>
      </section>
    </>
  );
}
export default Home;
