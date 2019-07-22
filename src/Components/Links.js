import React from 'react';
import {Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function Links() {

  return (
    <Grid container justify="center">
        <Button color="primary"><Link to="aboutme">About Me</Link></Button>
        <Button color="primary"><Link to="projects">Projects</Link></Button>
        <Button color="primary"><Link to="contactme">Contact Me</Link></Button>
    </Grid>
  );
}

export default Links;