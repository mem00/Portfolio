import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      width: '420px',
    },
    grid:{
        paddingTop: '30px'
    }
})

function Projects() {
    const classes = useStyles()
  return (
 
    <Grid container justify="center" direction="column" alignItems="center" className={classes.grid} spacing={3}>
       <Grid item>
            <Card className={classes.card}>
                <CardContent>
                    <div className="content-title">CurArt</div>
                    <div className="content">React, CSS Flexbox, Met API</div>
                    <div className="content">Load art from the Met Collection, save your favorites, and continue!</div>
                    <div className="content"><a target="_blank" rel="noopener noreferrer" href="https://broken-thought.surge.sh/">View Here</a></div>
                </CardContent>
            </Card>
        </Grid> 
    
        <Grid item>
            <Card className={classes.card}>
                <CardContent>
                    <div className="content-title">Gift Me</div>
                    <div className="content">PSQL, Express, Sequelize, React, Material UI</div>
                    <div className="content">Full CRUD application. Add items and events to your wish list. Friends and family
                    can find your wish list by your email.</div>
                    <div className="content"><a target="_blank" rel="noopener noreferrer" href="https://giftme-hjm.herokuapp.com/">View Here</a></div>
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card className={classes.card}>
                <CardContent>
                    <div className="content-title">Convey</div>
                    <div className="content">PSQL, Ruby on Rails, Action Cable, React, Material UI</div>
                    <div className="content">Direct messaging app using WebSockets. Sign up and message me! (username: mem) </div>
                    <div className="content"><a target="_blank" rel="noopener noreferrer" href="https://convey-messenger.herokuapp.com/">View Here</a></div>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}

export default Projects;