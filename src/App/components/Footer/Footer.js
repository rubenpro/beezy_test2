import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FooterStyles from './Footer.css';

const Footer = () => {
  const classes = FooterStyles();

  return (
    <Container className={classes.container}>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          By Rubén Pacheco Rodríguez
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
