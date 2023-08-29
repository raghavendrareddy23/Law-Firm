import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Styles from './Attorneys.module.css'
import image from '../../assets/Gift 1.png'

const cardData = [
  {
    image: image,
    title: "98% Success Rate",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonText: "Read More",
  },
  {
    image: image,
    title: "100% Success Rate",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonText: "Read More",
  },
  {
    image: image,
    title: "100% Success Rate",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    buttonText: "Read More",
  },
];

function Cards() {
  return (
    <div className={Styles.container} id="attorneys">
      <Typography variant="h4" gutterBottom className={Styles.header}>
      Why Choose us?
      </Typography>
      <Grid container spacing={2} className={Styles.cardGroup}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={Styles.card}>
              <CardMedia
                component="img"
                height="140"
                src={card.image} 
                alt={card.title}
                className={Styles.cardImg}
              />
              <CardContent>
                <Typography variant="h6" className={Styles.cardTitle}>
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={Styles.cardDescription}
                >
                  {card.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={Styles.cardButton}
                >
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
