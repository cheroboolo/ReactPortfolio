import React from "react";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import SlavisaCV from "../cv/SlavisaCV.pdf"
import Neo from "../images/neo.jpg"

const buttonVariant = {
    hover: {
      scale: [1,1.1,1,1.1,1,1.1,1,1.1],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:2
      }
    }
  }

const aboutVariants = {
  hidden: {
    opacity:0,
    scale:0
  },
  visible: {
    opacity:1,
    scale:1,
    transition:{
      duration:0.4,
      ease: "easeOut"
    }
  }
}


function About() {


    return (
      <section id="about">
        
        <motion.div className="about-main" variants={aboutVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <motion.h1 variants={buttonVariant} whileHover="hover">About</motion.h1>
            <motion.img className="about-img" src={Neo} alt="neo.jpg" initial={{x:"100vw"}} animate={{x:0}} transition={{type:"spring", delay:2, duration:3}}></motion.img>
            <div className="about-text">
                <motion.p className="left-content" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{type:"spring", delay:1, duration:2}}>I'm quietly confident, naturally curious, and perpetually working on improving my knowledge of Python and JavaScript. Learning new tools and programming language to use logic and experience to level up as Full-Stack Developer.</motion.p>
                <motion.p className="right-content" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{type:"spring", delay:0.6, duration:3}}>Since beginning my journey as a freelance Python Developer nearly 1 year ago, I've done some small Web Scraping projects with tools such Beautiful Soup, Selenium, Data Visualation with MatLab, PX, Seaborn, Automation with Pandas and Requests, on Upwork.</motion.p>
                <motion.p className="left-content" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{type:"spring", delay:0.2, duration:2}}>Lately, I’ve discovered my passion for the world of web development and the beauty behind building useful websites like the one you will find in this portfolio. I’m now looking for a junior dev position to finally kick start my career and learn among professionals.</motion.p>
            </div>
            <motion.div className="cv-btn" variants={buttonVariant} whileHover="hover" >
                    <a href={SlavisaCV} target="_blank"  rel="noreferrer" ><Button  size="lg" variant="success" >Resume.</Button></a>
            </motion.div>
        </motion.div>
        </section>
    );
}

export default About;