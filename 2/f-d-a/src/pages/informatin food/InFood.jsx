import React from "react";
import bacik from "../../assets/image/backBTN.svg"
import Like from '../../assets/image/heart.png'
import './style.scss'
function InFood(){
    return(
<>
<header id="IN-header">
    <div><img src={bacik} alt="" /></div>
    <div><img src={Like} alt="" /></div>
</header>
{/* ----------------------------img aned name-------------------------- */}
<section id="imgAndName"></section>
{/* __________________________text__________________________________ */}
<section id="information"></section>
{/* --------------------------------button--------------------------- */}
<section id="addToSabad"></section>
</>
    )
}
export default InFood