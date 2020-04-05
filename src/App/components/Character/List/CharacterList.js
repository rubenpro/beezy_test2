import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';
import Loader from '../../Loader/Loader';
import CharacterListItem from './CharacterListItem';
import CharacterContext from '../CharacterContext';

const CharacterList = () => {
  const state = useContext(CharacterContext);

  return state.isLoadingCharacters ? (
    <Loader />
  ) : (
    <Grid container spacing={6} className={state.classes.list}>
      {state.filteredList.map((character) => (
        <CharacterListItem key={character.char_id} character={character} />
      ))}
    </Grid>
  );
};

export default CharacterList;
