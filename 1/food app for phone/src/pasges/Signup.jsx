import React from "react";
import { Link } from "react-router-dom"; import Logo from '../assets/image/Group 3.png'
import '../styles/Sign-up.scss';
function PageSignUp() {
    return (
        <>

            <section id="top">
                <div id="p-imge"><img src={Logo} alt="logo web site" /></div>
                <div id="p-login-sinUP">
                    <button id="login"><Link to='/login'>Login</Link></button>
                    <button id="sign-up"><Link to='/Sign-Up'>sign-up</Link></button>
                </div>
            </section>
            {/* ---------------------------------------------- */}
            <section id="form">
                <div id="email">
                    <h6>Email address</h6>
                    <input type="Emaail" id="emails" required />
                </div>
                <div id="passeord">
                    <h6>Password</h6>
                    <input type="Password" id="Passwords" required />
                </div>
                <div className="Confirm password" id="passeord">
                    <h6> Confirm password</h6>
                    <input type="Password" id="Passwords" required />
                </div>
            </section>
            {/* ----------------------------- */}

            <section id="buttonL"><button><Link>Sign Up</Link></button></section>
        </>
    )
}
export default PageSignUp