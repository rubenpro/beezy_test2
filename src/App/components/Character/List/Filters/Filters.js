import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AutocompleteSelect from './Filter/AutocompleteSelect';
import ViewOptions from './Options/ViewOptions';
import CharacterContext from '../../CharacterContext';

const Filters = ({ handleChange, handleOrder, handleSort }) => {
  const state = useContext(CharacterContext);

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid id="filters" item sm={6} xs={12} className={state.classes.options}>
        <AutocompleteSelect characters={state.characters} onChange={handleChange} />
      </Grid>
      <Grid id="options" item sm={6} xs={12} className={state.classes.options}>
        <ViewOptions
          characters={state.filteredList}
          handleOrderBy={handleOrder}
          handleSortBy={handleSort}
        />
      </Grid>
    </Grid>
  );
};

Filters.propTypes = {
  handleChange: PropTypes.func,
  handleOrder: PropTypes.func,
  handleSort: PropTypes.func,
};

export default Filters;
