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
      <section id="searchin">

        <Search/>
      </section>
    </>
  );
}
export default Home;
