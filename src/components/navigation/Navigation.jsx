import "./nav.css"
import {Link} from "react-router-dom";

export default function Navigation(){
    return(
        <div className="nav">
            <div className="container">
                <div className="name">Colingo</div>
                <ul className="list">
                    <li className="list-item"><Link to="/home" className="link">Home</Link></li>
                    <li className="list-item"><Link to="/services" className="link">Services</Link></li>
                    <li className="list-item"><Link to="/about" className="link">About Us</Link></li>
                    <li className="list-item"><Link to="/contact" className="link">Contact Us</Link></li>
                </ul>
            </div>

        </div>
    )
}