/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import AutocompleteStyles from './AutocompleteSelect.css';

function AutocompleteSelect({ characters, onChange }) {
  const classes = AutocompleteStyles();

  return (
    <Autocomplete
      classes={classes}
      options={characters}
      getOptionLabel={(option) => option.name}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label="Character" variant="outlined" />}
    />
  );
}

AutocompleteSelect.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()),
  onChange: PropTypes.func,
};

export default AutocompleteSelect;
