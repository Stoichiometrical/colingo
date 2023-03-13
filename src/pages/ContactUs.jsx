import "./main.css"
import Navigation from "../components/navigation/Navigation";
import Button from "../components/button/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function ContactUs(){
    return(
        <>
            <div className="contact">
                <Navigation/>
                <div className="contact-sections">
                    <div className="get-in-touch">
                        <div className="chead-text">GET IN TOUCH</div>
                        <div className="csection-text">
                            <div className="cicon"><LocationOnIcon/></div>
                            <div className="icon-text">
                                <div className="itext">Our Offices</div>
                                <div className="itext">ALC, Powder Mill Road,<br/> Pamplemousses, Mauritius</div>
                            </div>
                        </div>
                        <div className="csection-text">
                            <div className="cicon"><EmailIcon/></div>
                            <div className="icon-text">
                                <div className="itext">Email</div>
                                <div className="itext">colingoano@gmail.com</div>
                            </div>
                        </div>
                        <div className="csection-text">
                            <div className="cicon"><LocalPhoneIcon/></div>
                            <div className="icon-text">
                                <div className="itext">Contact Us</div>
                                <div className="itext">+230 87880255</div>
                            </div>
                        </div>
                        <div className="soc-icons">
                            <FacebookOutlinedIcon className="sicon" sx={{ fontSize : 40 }}/>
                            <InstagramIcon className="sicon" sx={{ fontSize : 40 }} />
                            <TwitterIcon className="sicon" sx={{ fontSize : 40 }}/>
                        </div>
                    </div>
                    <div className="form-side">
                       <form className="form">
                           <div className="fsect">
                               <div className="fgroup">
                                   <div className="label">First Name</div>
                                   <input type="text" className="input" placeholder="First Name"/>
                               </div>
                               <div className="fgroup">
                                   <div className="label">Last Name</div>
                                   <input type="text" className="input"/>
                               </div>
                           </div>
                           <div className="fsect">
                               <div className="fgroup">
                                   <div className="label">Email</div>
                                   <input type="text" className="input" placeholder="Your email address"/>
                               </div>
                               <div className="fgroup">
                                   <div className="label">Phone Number</div>
                                   <input type="text" className="input" placeholder="Phone number"/>
                               </div>
                           </div>
                           <div className="fgroup">
                               <div className="label">Message</div>
                               <textarea className="textarea" placeholder="Enter your message"/>
                           </div>
                           <Button text="Submit"/>

                       </form>
                    </div>
                </div>
            </div>

        </>
    )
}