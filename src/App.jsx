import { HashRouter as Router , Routes , Route } from "react-router-dom"
import Main from "./pages/Main";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServicesCompare from "./pages/ServicesCompare";

export default function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route  exact path ="" element={<Main/> }/>
                    <Route exact path ="/home" element={<Main/> }/>
                    <Route path="/contact" element={<ContactUs/> }/>
                    <Route path ="/about" element={<AboutUs/>}/>
                    <Route path = "/services" element={<Services/>}/>
                    <Route path ="/service" element={<ServicesCompare/>}/>
                </Routes>
            </Router>
        </>
    )
}