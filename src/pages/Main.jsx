import "./main.css"
import Navigation from "../components/navigation/Navigation";
import {Link} from "react-router-dom";

export default function Main(){
    return(
        <>
            <div className="main">
                <Navigation/>
                <div className="main-section">
                    <div className="mtext-side">
                        <div className="mtext-subtext-big">
                            Choose your next<br/> stop through <br/>Colingo.
                        </div>
                        <div className="mtext-subtext-sm">
                            <div className="mtext-subtext-sm1">
                                We provide the best service for relocating  to<br/> different parts of the world
                            </div>
                            <div className="mtext-subtext-sm2">
                                <div className="btn"><Link to="/services" className="link linka">Check Our Services</Link></div>
                                <div className="play-demo">
                                    <img src="assets/play.png" className="demo-png"/>
                                    <div className="demo-text">Play Demo</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mimage-side">
                        <img src="assets/home-effect.png" className="home-effect" alt="Photo Missing"/>
                    </div>
                </div>
            </div>

        </>
    )
}