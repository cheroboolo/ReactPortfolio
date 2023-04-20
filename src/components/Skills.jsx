import React from "react";
import { motion } from "framer-motion";

const skillVariants = {
    hidden: {opacity:0},
    visible: {
        opacity:1,
        transition: {
            type: "spring",
            delay: 0.5,
            duration:15
        }
    }
}

const logoVariant = {
    hover: {
      scale: [1,1.3,1,1.3,1,1.3,1,1.3],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:2
      }
    }
  }

function Skills() {
    return (
        <section id="skills">
        <motion.div className="skills" variants={skillVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
            <motion.h1 variants={logoVariant} whileHover="hover">My Skills.</motion.h1>
            <p>Over time, I have gained a wealth of experience designig and developing web applications. Below are some of technologies that I use and practice through project's.</p>
            <div className="icons">
                    <motion.i className="fa-brands fa-react fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-node fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-html5 fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-css3-alt fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-bootstrap fa-4x fa-light " variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-python fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-github fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
                    <motion.i className="fa-brands fa-square-git fa-4x fa-light" variants={logoVariant} whileHover="hover"></motion.i>
            </div>
        </motion.div>
        </section>
    )
}

export default Skills;