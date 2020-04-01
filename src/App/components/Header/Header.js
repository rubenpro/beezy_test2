import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import HeaderStyles from './Header.css';

const Header = () => {
  const classes = HeaderStyles();

  return (
    <Container maxWidth="xl" className={classes.header}>
      <Link to="/" className={classes.headerLink}>
        <Typography variant="h1">
          <Box className={classes.word}>
            <Box className={classes.element}>
              <div>Br</div>
              <div className={classes.number}>35</div>
            </Box>
            <Box className={classes.fontAveria}>eaking</Box>
          </Box>
          <Box className={classes.word2}>
            <Box className={`${classes.element} inverted`}>
              <div>Ba</div>
              <div className={classes.number}>56</div>
            </Box>
            <Box className={classes.fontAveria}>pp</Box>
          </Box>
        </Typography>
      </Link>
    </Container>
  );
};

export default Header;
