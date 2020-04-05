import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import API_BB from '../../../utils/BreakingBadAPI';
import DetailStyles from './CharacterDetailPage.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import CharacterDetail from './CharacterDetail';
import CharacterContext from '../CharacterContext';

function CharacterDetailPage({ match: { params } }) {
  const classes = DetailStyles();
  const id = params.id;
  const [character, setCharacter] = useState({});
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(true);
  const state = {
    classes,
    character,
    isLoadingCharacter,
  };

  useEffect(() => {
    API_BB.getCharacterDetail(id)
      .then((characterList) => setCharacter(characterList[0]))
      .then(() => setIsLoadingCharacter(false));
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <CharacterContext.Provider value={state}>
          <CharacterDetail character={character} />
        </CharacterContext.Provider>
      </Container>
      <Footer />
    </>
  );
}

CharacterDetailPage.propTypes = {
  match: PropTypes.shape(),
};

export default CharacterDetailPage;
