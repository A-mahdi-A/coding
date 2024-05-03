import React from "react";
import './style.scss'
import backBTN from '../../assets/image/backBTN.svg'
import listCenter from '../../assets/image/Vector1.png'
import { Link } from "react-router-dom";
function Pagehistorys() {
    return (
        <>
            <section id="his">
                <section id="hisHeader">
                    <div><Link to='/Home'><img src={backBTN} alt="" /></Link></div>
                    <div>History</div>
                    </section>
                <section id="centerside">
                    <div><img src={listCenter} alt="" /></div>
                    <div id="matn">
                        <h1>No history yet</h1>
                        <p>Hit the orange button down <br />
                            below to Create an order</p></div>
                </section>
                <section id="HBTN"><button>Start odering</button></section>
            </section>
        </>
    );
}
export default Pagehistorys;
