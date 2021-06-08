import React from 'react';
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
import { ArrowRightAlt, Opacity } from '@material-ui/icons';
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
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundColor:"#fffa52",
    
    
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
    '&:hover': {
      transform: "scale3d(1.1, 1.1, 1)"
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    name:"Technical Indicators",
    image:"https://news.tradimo.com/wp-content/uploads/2019/11/technicalanalysis-696x365.jpg",
    id:1,
    url:"/article",
    desc:"Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity, such as price movement and volume."
  },
  {
    name:"Bolinger Bands",
    image:"https://zerodha.com/varsity/wp-content/uploads/2014/10/M2-Ch15-Chart3-1024x376.jpg",
    id:2,
    url:"/article1",
    desc:"Introduced by John Bollinger in the 1980s, Bollinger Bands (BB) is perhaps one of the most useful technical analysis indicators. BB is used to determine overbought and oversold levels,"
  },{
    name:"MACD",
    image:"https://zerodha.com/varsity/wp-content/uploads/2014/10/M2-Ch15-Chart2-1024x407.jpg",
    id:3,
    url:"/article2",
    desc:"MACD is all about the convergence and divergence of the two moving averages. Convergence occurs when the two moving averages move towards each other, and divergence occurs when the moving averages move away."
  },
  {
    name:"RSI",
    image:"https://zerodha.com/varsity/wp-content/uploads/2014/10/M2-Ch14-Chart1-300x133.jpg",
    id:4,
    url:"/article3",
    desc:"Relative strength Index or just RSI, is a prevalent indicator developed by J.Welles Wilder. RSI is a leading momentum indicator which helps in identifying a trend reversal."
  }
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main id="blog-hero">
        {/* Hero unit */}
        <div className={classes.heroContent} >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{fontFamily:"Karla"}}>
              Blog Page
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{fontFamily:"Karla"}}>
              A short crisp and interesting collection of articles 
              <br></br>
              Enhanding your financial knowledge and helping you grow money
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item >
                  <Button variant="contained" color="primary">
                    Go to Dashboard
                  </Button>
                </Grid>
                
              </Grid>
            </div>
           
          </Container>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" id ="blog-hero" viewBox="0 0 1440 200"><path fill="#fffa52" fill-opacity="1" d="M0,128L480,32L960,160L1440,160L1440,0L960,0L480,0L0,0Z"></path></svg>
        <Container className={classes.cardGrid} maxWidth="lg" id="blog-post">
          {/* End hero unit */}
          <Grid container spacing={8}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card} style={{fontFamily:"Karla"}}>
                 
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                    href={card.url}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.name}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.url}>
                      View More <ArrowRightAlt/>
                    </Button>
                    
                  </CardActions>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L360,192L720,96L1080,320L1440,224L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg> */}
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}