import logo from '../../assets/logo.png' 
import bag from "../../assets/bag.png";
import Cart from '../cart/cart';

import "./navbar.css"
import { useNavigate } from 'react-router-dom';

function Navbar() {
    
    function openSideBar() {
        const event = new CustomEvent('openSideBar')
        window.dispatchEvent(event)
    }

    const navigate = useNavigate
    
    return (
        <nav>
            <img src={logo} alt="Logotipo" className="logotipo"/>
            <div className="menu">
                <a onClick={navigate('/checkout')}>Histórico</a>
                <button className="btn btn-red" onClick={openSideBar}>
                    <img src={bag} className="icon" alt='bag icon' />
                    Sacola
                </button>
            </div>
            <Cart/>
        </nav>
    )
}

export default Navbar