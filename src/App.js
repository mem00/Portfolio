import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from './Components/Header'
import Links from './Components/Links'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  paper: {
    width: '600px'
  }
})


function App() {
  const classes = useStyles();
  return (
    <Router>
    <Grid container justify="center">
      <Paper className={classes.paper}>
        <Header/>
        <Switch>
          <Route exact path ="/" render={()=><Links/>}/>
          
          
        </Switch>
      </Paper>
    </Grid>
    </Router>
  );
}

export default App;
