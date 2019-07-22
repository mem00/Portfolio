import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      width: '600px'
    },
    grid: {
      padding: '30px'
   }
})

function About() {
    const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.grid}>
        <Card className={classes.card}>
        <CardContent>
        <div>I am a job searching software engineer.</div>
        <div> A.B. Cognitive Science, University of Geogia.</div>
        <div>Software Engineering Immersive, General Assembly, NYC.</div>
        <div>I am looking for an opportunity to learn and contribute in a full-stack position.</div>
        </CardContent>
        </Card>
    </Grid>
  );
}

export default About;