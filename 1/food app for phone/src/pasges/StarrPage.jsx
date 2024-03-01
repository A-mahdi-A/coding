import '../styles/satartPage.scss'
import Logo from '../assets/image/logo.png'
import group from '../assets/image/Group 67.png'
import { Link } from 'react-router-dom';
function StartPage() {
    return (
        <div className='p-start'>
            <section id='logo'>
                <div><img src={Logo} /></div>
            </section>
            {/* =========================== */}
            <section id='text'>
                <h1>Food for <br />
                    Everyone</h1>
            </section>
            {/* ====================== */}
            <section id='img'> <div><img src={group} /></div></section>
            {/* ============================= */}
            <section id='button'>
                <div><Link to='/login'>Get starteed</Link></div>

            </section>        </div>
    );
}
export default StartPage;