import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './Components/Header'
import Links from './Components/Links'
import About from './Components/About'
import Contact from './Components/Contact'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  paper: {
    width: '600px'
  }
})


function App() {
  return (
    <Router>
    <Grid container justify="center">
     
        <Header/>
        <Links/>
        <Switch>
          <Route exact path= "/" render={()=> <About/>}/>
          <Route exact path= "/projects" render={()=> <div>hello again</div>}/>
          <Route exact path= "/contact" render={()=><Contact/>}/>
        

          
        </Switch>
   
    </Grid>
    </Router>
  );
}

export default App;
