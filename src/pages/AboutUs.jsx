import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Button from "../components/button/Button";

export default function AboutUs(){
    return(
        <>
            <div className="about-us">
             <Navigation/>
                <div className="about-cont">
                    <div className="mission">
                        <div className="mission-sub">
                            <div className="mission1">
                                <h1>Mission</h1>
                                <div style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo. Cras consequat tortor vel elit eleifend ultricies. Ut quis urna fermentum, interdum nunc non, eleifend purus.</div>
                            </div>
                            <div className="mission2">
                                <h1>Vision</h1>
                                <div style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo. Cras consequat tortor vel elit eleifend ultricies. Ut quis urna fermentum, interdum nunc non, eleifend purus.</div>
                            </div>
                        </div>


                    </div>
                    <div className="ano-bio">
                        <div className="ano-side">
                            <img src="assets/ano.jpeg" className="ano" alt="Missing"/>
                        </div>
                        <div className="text-side">
                            <div className="main-text">Anotida Tauya</div>
                            <div className="a-text">
                                Anotida is a computer science student at the African Leadership University who has a passion for technology and cybersecurity. With her experience and skills, she is the creator of Colingo, a platform for comparing the cost of living in different countries. Through this platform, Anotida aims to provide users with an easy and affordable way to make informed decisions about their finances and living expenses when considering moving to a different country.

                                As a young entrepreneur and advocate for digital safety, Anotida is determined to make a difference in the world through technology. She is a true inspiration to anyone who wants to pursue their passions and create positive change in the world.
                            </div>
                            <Button text="Lets Chat"/>
                        </div>
                    </div>
                </div>
                    <div className="c2">
                        <div className="blue-area"/>
                        <div className="our-services">
                            <div className="o-services1">
                                <h2>Our services</h2>
                                <div style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo. </div>
                            </div>
                            <div className="o-services2">
                                <div className="circle">01</div>
                                <div className="o-serv-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo. Cras consequat tortor vel elit eleifend ultricies.</div>
                                <Button text="Learn More"/>
                            </div>
                            <div className="o-services2">
                                <div className="circle">02</div>
                                <div className="o-serv-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales porta commodo. Cras consequat tortor vel elit eleifend ultricies.</div>
                                <Button text="Learn More"/>
                            </div>

                        </div>
                </div>



            </div>
        </>
    )
}