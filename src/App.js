import React, { useState } from 'react'
import "./App.css";

import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import Blog from "./components/Blog";
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Navbar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    zIndex: 14000,
},
}));

function App() {

  const classes = useStyles();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
    
      
      <Header mobileDrawerOpen={mobileDrawerOpen} setMobileDrawerOpen={setMobileDrawerOpen} className={classes.appBar}/>
     
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" render={(props) => <Dashboard 
          {...props} 
          mobileDrawerOpen={mobileDrawerOpen} 
          setMobileDrawerOpen={setMobileDrawerOpen}
          />} 
        />
        <Route path='/blog' component={Blog}/>
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
