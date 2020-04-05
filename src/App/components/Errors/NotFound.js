import React from 'react';
import Box from '@material-ui/core/Box';
import BreakingBadTitleMaker from '../../utils/BreakingBadTitleMaker';
import NotFoundStyles from './NotFound.css';

const words = {
  first: {
    element: 'N',
    atomicNumber: '7',
    text: 'ot',
  },
  second: {
    element: 'F',
    atomicNumber: '9',
    text: 'ound',
  },
};

const NotFound = () => {
  const classes = NotFoundStyles();

  return (
    <Box className={classes.box}>
      <BreakingBadTitleMaker words={words} />
    </Box>
  );
};

export default NotFound;
