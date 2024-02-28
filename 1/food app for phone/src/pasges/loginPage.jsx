import '../styles/loginPage.scss'
import Logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';
function loginPage() {
    return (
        <div className="page-contorol">
            <section id='img-Switch-page'>
                <div id='img'><img src={Logo} /></div>
                <div id='bottons'>
                    <div id='login'>Login</div>
                    <div id='sign-up'>Sign-up</div>
                </div>
            </section>
            {/*------------------- section2------------------------------- */}
            <section id='form'></section>
        </div>
    );
}
export default loginPage