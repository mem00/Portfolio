import React from 'react';
import Header from './Components/Header'
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
    <Grid container justify="center">
      <Paper className={classes.paper}>
        <Header/>
      </Paper>
    </Grid>
  );
}

export default App;
