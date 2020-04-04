import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListStyles from './CharacterList.css';

import Loader from '../../Loader/Loader';
import API_BB from '../../../utils/BreakingBadAPI';
import CharacterListItem from './CharacterListItem';
import AutocompleteSelect from './Filters/Filter/AutocompleteSelect';
import ViewOptions from './Filters/Options/ViewOptions';

function CharacterList() {
  const classes = ListStyles();
  const [characters, setCharacters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);

  useEffect(function getCharacters() {
    setIsLoadingCharacters(true);
    API_BB.getCharacterList(4)
      .then((characterList) => {
        setCharacters(characterList);
        setFilteredList(characterList);
        return characterList;
      })
      .then(() => setIsLoadingCharacters(false));
  }, []);

  const handleOrder = (fL) => setFilteredList(fL);
  const handleSort = (fL) => setFilteredList(fL);

  const handleChange = (e, value, reason) => {
    if (value) {
      setFilteredList(filteredList.filter((item) => item.name === value.name));
    } else {
      setFilteredList(characters);
      /* setFilteredList(_.orderBy(characters, ['name'], ['desc'])); */
    }
  };

  return (
    <Container>
      <Grid container justify="space-between" alignItems="center">
        <Grid id="filters" item sm={6} xs={12} className={classes.options}>
          <AutocompleteSelect characters={characters} onChange={handleChange} />
        </Grid>
        <Grid id="options" item sm={6} xs={12} className={classes.options}>
          <ViewOptions
            characters={filteredList}
            handleOrderBy={handleOrder}
            handleSortBy={handleSort}
          />
        </Grid>
      </Grid>
      {isLoadingCharacters ? (
        <Loader />
      ) : (
        <Grid container spacing={6} className={classes.list}>
          {filteredList.map((character) => (
            <CharacterListItem key={character.char_id} character={character} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default CharacterList;
