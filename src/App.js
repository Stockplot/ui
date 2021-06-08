import React, { useState } from 'react'

import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";

import Blog from "./components/Blog";
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Navbar";
import Article from "./components/Article"
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
   
},
}));

function App() {

  const classes = useStyles();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  return (
    <BrowserRouter>
    

      <div className="App">
      <Navbar mobileDrawerOpen={mobileDrawerOpen} setMobileDrawerOpen={setMobileDrawerOpen} className={classes.appBar}/>
     
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" render={(props) => <Dashboard 
          {...props} 
          mobileDrawerOpen={mobileDrawerOpen} 
          setMobileDrawerOpen={setMobileDrawerOpen}
          />} 
        />
        <Route path='/blog' component={Blog} />
        <Route path="/article" component={Article}/>
      </Switch>
      
     </div>
    </BrowserRouter>
  );
  
}

export default App;
