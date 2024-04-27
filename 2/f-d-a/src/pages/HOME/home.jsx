import React from "react";
import "./style.scss";
import Header from "../../component/hedar";
function Home (){
    return(
        <>
        {/* header */}
        <Header/>
        <section id="text"><h1>Delicious <br />
food for you</h1></section>
        </>
    )
}
export default Home;