import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TitleMakerStyles from './BreakingBadTitleMaker.css';

const BreakingBadTitleMaker = ({ words: { first, second } }) => {
  const classes = TitleMakerStyles();

  return (
    <Typography variant="h1" className={classes.h1}>
      <Box className={classes.word}>
        <Box className={classes.element}>
          <div>{first.element}</div>
          <div className={classes.number}>{first.atomicNumber}</div>
        </Box>
        <Box className={classes.fontAveria}>{first.text}</Box>
      </Box>
      <Box className={classes.word2}>
        <Box className={`${classes.element} inverted`}>
          <div>{second.element}</div>
          <div className={classes.number}>{second.atomicNumber}</div>
        </Box>
        <Box className={classes.fontAveria}>{second.text}</Box>
      </Box>
    </Typography>
  );
};

BreakingBadTitleMaker.propTypes = {
  words: PropTypes.shape({
    first: PropTypes.shape({
      element: PropTypes.string,
      atomicNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    }),
    second: PropTypes.shape({
      element: PropTypes.string,
      atomicNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    }),
  }),
};

export default BreakingBadTitleMaker;
