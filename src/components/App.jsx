import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles.css"
import { BounceLoader } from "react-spinners";


function App() {

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
 
    return (
        <div>    
            <Navigation />
            {
                loading? (<div className="app"><BounceLoader cssOverride={true} size={50} color={"#36d7b7"} loading={loading} /> </div>) : <Home />
            }
            
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;