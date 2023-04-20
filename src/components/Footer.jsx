import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from "framer-motion";

const footerVariant = {
    hover: {
      scale: [1.3,1,1.3,1,1.3,1,1.3],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:1,
        ease: "easeInOut"
      }
    }
  }

function Footer() {
    return (
        
        <motion.div className="footer-div" initial={{y:"100vh"}} animate={{y:0}} transition={{type:"spring", delay:2, duration:2}}>
            <motion.a className="icon-footer" href="https://www.linkedin.com/in/cheroboolo/" variants={footerVariant} whileHover="hover" > <LinkedInIcon fontSize="large"/> </motion.a>
            <motion.a className="icon-footer" href="https://github.com/cheroboolo" variants={footerVariant} whileHover="hover" > <GitHubIcon fontSize="large" /> </motion.a>
            <motion.a className="icon-footer" href="https://www.instagram.com/Cheroboolo/" variants={footerVariant} whileHover="hover" > <InstagramIcon fontSize="large" /> </motion.a>
            <motion.a className="icon-footer" href="https://www.facebook.com/Cheroboolo/" variants={footerVariant} whileHover="hover" > <FacebookIcon fontSize="large" /> </motion.a>
            <p className="copyright">Designed & Built by Slavisa Petrovic</p>
        </motion.div>
        
    )
}

export default Footer;