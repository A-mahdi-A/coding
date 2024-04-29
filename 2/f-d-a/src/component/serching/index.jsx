import React from "react";
import Vector from '../../assets/image/Vector.png'
import './style.scss'
function Search(){
    return(
<>
<section id="ser-sec">
    <div><img src={Vector} alt="" /></div>
    <div><input type="text" /></div>
</section>
</>
    );
}
export default Search