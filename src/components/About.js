import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import "./styles.css";
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "-14px 7px 19px 8px rgb(0 0 0 / 20%)",
    borderRadius: "10px",
    backgroundColor: "#222",
    color: "#fff",

    padding: "15%",
    "&:hover": {
      transform: "scale3d(1.1, 1.1, 1)",
    },
  },

  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    padding: "none",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const cards = [
  {
    name: "Select",
    image: "https://image.flaticon.com/icons/png/512/1443/1443000.png",
    id: 1,
    desc: "Select a stock",
  },
  {
    name: "Plot",
    image: "https://image.flaticon.com/icons/png/512/1443/1443031.png",
    id: 2,
    desc: "Plot any Indicator",
  },
  {
    name: "Test",
    image: "https://image.flaticon.com/icons/png/512/1443/1443029.png",
    id: 3,
    desc: "Obtain BUY/SELL signals",
  },
];
function About() {
  const classes = useStyles();
  return (
    <div id="about" style={{ padding:"0 20%" }}>
      <h1>Why Stockplot?</h1>
      <p>
        Stockplot helps to visualize stock market data and plot indicators such
        as Bollinger Bands, MACD, RSI, etc for training and testing. 
        It generates buy and sell signals for the indicator and displays the net
        profit at each transaction. 
        For easy comprehensibility and to make the
        platform beginner friendly, there are accompanying articles for each
        indicator.
       
      </p>
      <main>
        {/* Hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card} style={{ fontFamily: "Karla" }}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default About;
