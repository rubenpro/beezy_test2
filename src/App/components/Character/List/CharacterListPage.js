import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import Container from '@material-ui/core/Container';
import ListStyles from './CharacterListPage.css';
import API_BB from '../../../utils/BreakingBadAPI';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Filters from './Filters/Filters';
import CharacterContext from '../CharacterContext';
import CharacterList from './CharacterList';

function CharacterListPage() {
  const classes = ListStyles();
  const [characters, setCharacters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);
  const state = {
    classes,
    characters,
    filteredList,
    isLoadingCharacters,
  };

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
    <>
      <Header />
      <Container>
        <CharacterContext.Provider value={state}>
          <Filters handleChange={handleChange} handleOrder={handleOrder} handleSort={handleSort} />
          <CharacterList />
        </CharacterContext.Provider>
      </Container>
      <Footer />
    </>
  );
}

export default CharacterListPage;
