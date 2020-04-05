import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Loader from '../../Loader/Loader';
import CharacterContext from '../CharacterContext';
import CharacterDetailCard from './CharacterDetailCard';

const CharacterDetail = ({ character }) => {
  const state = useContext(CharacterContext);

  return state.isLoadingCharacter ? (
    <Loader />
  ) : (
    <Grid container className={state.classes.container}>
      <Grid item className={state.classes.item}>
        <CharacterDetailCard character={character} />
      </Grid>
    </Grid>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape(),
};

export default CharacterDetail;
