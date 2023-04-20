import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { motion } from 'framer-motion';

const cardVariant = {
    hover: {
      backgroundColor:"#F0EB8D",
    }
  }

function Cards(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <motion.div variants={cardVariant} whileHover="hover">
            <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt="green iguana"
            />
            <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.content}
            </Typography>
            
            </CardContent>
            </motion.div>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Soure Code.
            </Button>
        </CardActions>
        </Card>
    );
}

export default Cards;