import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";
import SlavisaCV from "../cv/SlavisaCV.pdf"


const logoVariants = {
  hidden: {
    opacity: 0,
    pathLenght: 0
  },
  visible: {
    opacity: 1,
    pathLenght: 1,
    transition: {
      duration: 2,
      delay:2,
      ease: "easeInOut"
    }
  }
}

const navVariant = {
  hover: {
    scale: 1.2,
  }
}

const spring = {
  type: "spring",
  delay: 0.5
}


function Navigation() {


  return (
    <motion.div layout initial={{x:"-100vw", opacity:1}} animate={{x:0}} transition={spring}>
    <Navbar collapseOnSelect expand="sm" className="navbar" >
      <Container className="container">
        <motion.div variants={logoVariants} initial="hidden" animate="visible">
          <Navbar.Brand className="nav-brand" href="#home">Slavisa.</Navbar.Brand>
        </motion.div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-link" id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="/"><motion.p variants={navVariant} whileHover="hover">Home</motion.p></Nav.Link>
            <Nav.Link  href="#about"><motion.p variants={navVariant} whileHover="hover">About</motion.p></Nav.Link>
            <Nav.Link  href="#skills"><motion.p variants={navVariant} whileHover="hover">Skills</motion.p></Nav.Link>
            <Nav.Link href="#port"><motion.p variants={navVariant} whileHover="hover">Portfolio</motion.p></Nav.Link>
            <Nav.Link href="#contact"><motion.p variants={navVariant} whileHover="hover">Contact</motion.p></Nav.Link>
            <Button href={SlavisaCV} target="_blank" type="submit" className="btn" variant="success">Download CV</Button>
          </Nav>
        </Navbar.Collapse>   
      </Container>
      
    </Navbar>
    </motion.div>
  );
}

export default Navigation;