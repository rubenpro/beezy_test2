import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoaderStyles from './Loader.css';

const Loader = () => {
  const classes = LoaderStyles();

  return (
    <Grid container justify="center" className={classes.container}>
      <CircularProgress className={classes.loader} />
    </Grid>
  );
};

export default Loader;
