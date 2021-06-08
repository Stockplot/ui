import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { ArrowRightAlt, CheckCircleOutlined } from '@material-ui/icons';
import "./styles.css";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "-14px 7px 19px 8px rgb(0 0 0 / 20%)",
    borderRadius:"10px",
    backgroundColor:"#222",
    color:"#fff",
    
    padding:"15%",
    '&:hover': {
        transform: "scale3d(1.1, 1.1, 1)"
      }
  },

  cardMedia: {
    paddingTop: '100%', // 16:9
     
  },
  cardContent: {
    flexGrow: 1,
    padding:"none"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const cards=[{
    name:"Select",
    image:"https://image.flaticon.com/icons/png/512/1443/1443000.png",
    id:1,
    desc:"Select a stock from the list of stocks",
},
{
    name:"Plot",
    image:"https://image.flaticon.com/icons/png/512/1443/1443031.png",
    id:2,
    desc:"plot the candlestick model"
},
{
    name:"Test",
    image:"https://image.flaticon.com/icons/png/512/1443/1443029.png",
    id:3,
    desc:"obtain the buy and sell points to make trading profitable"
},



]
function About() {
    const classes = useStyles();
    return (
        <div>
            <h1>Why do we use it?</h1>
            <p>
                This platform is visualize NSE stocks plot various indicators such as Bollinger Bands ,RSI,MACD etc ...
                <br></br>
                We get the points where we can buy and sell a particular stock.
                <br></br>
                To develop a taste of finance ,we include blogs with easy explanantions.
            </p>
            <main>
        {/* Hero unit */}
       
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card} style={{fontFamily:"Karla"}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                    
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.name}
                    </Typography>
                    <Typography>
                     {card.desc}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
        </div>
    )
}

export default About
