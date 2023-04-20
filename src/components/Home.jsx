import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from "framer-motion";


const logoVariants = {
    hidden: {
      opacity: 0,
      pathLenght: 0
    },
    visible: {
      opacity: 1,
      pathLenght: 1,
      transition: {
        duration:0.1,
        delay:0.1,
        ease: "easeInOut"
      }
    }
  }

function Home() {

    return (
        <motion.div className="home-title" initial={{x:"-100vw"}} animate={{x:0}} transition={{type:"spring", delay:0.5}}>
            <Container >
                <Row>
                    <Col className="heading" md={6}>
                        <motion.h1 className="heading-text" variants={logoVariants} initial="hidden" animate="visible" whileHover={{scale:1.2}}>I'm Slavisa</motion.h1>
                        <p className="heading-p">Full Stack Python and JavaScript developer</p>
                        <div className="icon-div">
                        <motion.div whileHover={{scale:1.3, x:0}} transition={{type:"spring", stiffness:300}}>
                        <a className="icon" href="https://www.linkedin.com/in/cheroboolo/"> <LinkedInIcon fontSize="large" /> </a>
                        <a className="icon" href="https://github.com/cheroboolo"> <GitHubIcon fontSize="large" /> </a>
                        <a className="icon" href="https://www.instagram.com/cheroboolo/"> <InstagramIcon fontSize="large" /> </a>
                        <a className="icon" href="https://www.facebook.com/Cheroboolo/"> <FacebookIcon fontSize="large" /> </a>
                        </motion.div>
                        </div>
                        
                    </Col>
                    <Col md={6}>
                        <img className="home-img" src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="Programming"></img>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )

}

export default Home;