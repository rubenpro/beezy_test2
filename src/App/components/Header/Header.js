import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import HeaderStyles from './Header.css';
import BreakingBadTitleMaker from '../../utils/BreakingBadTitleMaker';

const words = {
  first: {
    element: 'Br',
    atomicNumber: '35',
    text: 'eaking',
  },
  second: {
    element: 'Ba',
    atomicNumber: '56',
    text: 'pp',
  },
};

const Header = () => {
  const classes = HeaderStyles();

  return (
    <Container maxWidth="xl" className={classes.header}>
      <Link to="/" className={classes.headerLink}>
        <BreakingBadTitleMaker words={words} />
      </Link>
    </Container>
  );
};

export default Header;
