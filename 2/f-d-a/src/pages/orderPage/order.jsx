import React from "react";
import sabad from '../../assets/image/sabad.png'
import listCenter from '../../assets/image/Vector1.png'
import './style.scss'
function Order (){
    return(
        <>
        <section id="his">
                <section id="hisHeader">
                    <div><Link to='/Home'><img src={sabad} alt="" /></Link></div>
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
export default Order;