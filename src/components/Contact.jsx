import React, {useState, useRef} from "react";
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import Example from "./Dialog";


const textVariant = {
    hover: {
        scale:[1,1.3,1,1.3,1],
        transition: {
            duration:2,
            ease: "easeInOut"
        }
    }
}

function Contact() {

    const [isExpand, setExpand] = useState(false);
    const [isName, setName] = useState({
        fName: "",
        lName: "",
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    function handleClick() {
        setExpand(true);
    }

    const form = useRef();

    function submitButton(e) {

        e.preventDefault();
        handleShow()

        emailjs.sendForm('service_lhk8ktx', 'template_aymckfn', form.current, 'ftpphQbKyhC51Fn2g')
        .then((result) => {
            console.log(result.text);
            console.log("BRAVOOO")
        }, (error) => {
            console.log(error.text);
        });
        
    }

    function changeInput(e) {
        const {name, value} = e.target;
        setName(prevValue => {
            return {
                ...prevValue, 
                [name]:value
            };
        });
    }



    return <section id="contact"><motion.div className="contact-main" initial={{x:"-100vw"}} animate={{x:0}} transition={{type:"spring", delay:0.5, duration:2}}>
        <h1>Contact Me.</h1>
        <h3>Get In Touch.</h3>
        <p>My inbox is always open. Whether you have a question or job offer. I'll try my best to get back to you! Feel free to mail me and we can resolve anything. :)</p>
        {isExpand? <h1>Hello {isName.fName} {isName.lName}..</h1>:null}
        <motion.div className="container-form" initial={{y:"100vh"}} animate={{y:0}} transition={{type:"spring", delay:1, duration:3}}>
            <form ref={form} onSubmit={submitButton}>
                {isExpand?<div><input placeholder="First Name" onChange={changeInput} value={isName.fName} name="fName" ></input>
                <input placeholder="Last Name" onChange={changeInput} value={isName.lName} name="lName"></input>
                <input type="email" placeholder="Email" name="email"></input></div>:null}
                
                <motion.textarea style={{backgroundColor:isExpand?null:"white"}} onClick={handleClick} name="message" placeholder={isExpand?null:"Please, type me a message.."} rows={isExpand?5:2} variants={textVariant} whileHover="hover" ></motion.textarea>
                <Zoom in={isExpand}>
                    <Fab>
                        <button type="submit">Submit.</button>
                    </Fab>
                </Zoom>
            </form>
            
        </motion.div>
        
        <Example data={show} close={handleClose} />
    </motion.div>
    </section>
}

export default Contact;
