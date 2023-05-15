import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "./Cards";
import notes from "../notes";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { motion } from "framer-motion";


const portfolioVariants = {
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

const cardVariant = {
    hover: {
      scale: 1.1,
      transition: {
        ease: "easeInOut"
      }
      }
  }

function Portfolio() {
    const [expand, setExpand] = useState(false);

    function isExpand() {
        setExpand(prevValue => !prevValue);
    }


    return (
        <div className="portfolio" id="port">
            <motion.h1 variants={portfolioVariants} initial="hidden" animate="visible">My Work</motion.h1>
            <motion.p className="title-portfolio" variants={portfolioVariants} initial="hidden" animate="visible">Portfolio is result of my improvement and learning path.  Some of these project's I've used to showcase my Python and JavaScript skills and implelement through practice and freelance on Upwork. More of my project's you can check on my GitHub account.</motion.p>
            <div>
            <Container>
                <Row>
                    {notes.map(noteItem => (
                        
                        <Col className="mobile-card" md={4}>
                        <motion.div variants={cardVariant} whileHover="hover" initial={{x:"-100vw"}} animate={{x:0}} >
                        {!expand && noteItem.key<4 && <Cards 
                                key={noteItem.key}
                                title={noteItem.title}
                                content={noteItem.content}
                                img={noteItem.img}
                            /> }
                        {expand && <Cards 
                                key={noteItem.key}
                                title={noteItem.title}
                                content={noteItem.content}
                                img={noteItem.img}
                            /> }
                        </motion.div>
                        </Col>
                    ))}
                </Row>
                
            </Container>
            </div>
            <div className="portfolio-btn">
                <Button onClick={isExpand} size="md" variant="outline-success">{expand ? "Show Less" : "Show More"}</Button>
            </div>
            
        </div>
    )
}
export default Portfolio;
