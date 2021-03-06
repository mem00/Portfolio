import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      width: '300px',
    },
    grid:{
       padding: '30px'
    }
})

function Contact() {
    const classes = useStyles()
  return (
 
    <Grid container justify="center" className={classes.grid}>
        <Card className={classes.card}>
            <CardContent>
                <div className="content">203-505-4487</div>
                <div className="content">michael@mcguire.ch</div>
                <div className="content"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mem00">GitHub</a></div>
            </CardContent>
        </Card>
    </Grid>
  );
}

export default Contact;