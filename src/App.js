import logo from "./logo.svg";
import "./App.css";

import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import Blog from "./components/Blog";
import {BrowserRouter} from "react-router-dom"
import PrimarySearchAppBar from "./components/Navbar";
import Header from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    
      
      <Header/>
     
      <Switch >
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path='/blog' component={Blog}/>
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
