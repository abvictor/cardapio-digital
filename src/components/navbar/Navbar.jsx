import logo from '../../assets/logo.png' 
import bag from "../../assets/bag.png";
import "./navbar.css"

function Navbar() {
    
    
    return (
        <nav>
            <img src={logo} alt="Logotipo" className="logotipo"/>
            <div className="menu">
                <a href="#">Histórico</a>
                <button className="btn btn-red">
                    <img src={bag} className="icon" alt='bag icon' />
                    Sacola
                </button>
            </div>
        </nav>
    )
}

export default Navbar