import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import API_BB from '../../../utils/BreakingBadAPI';
import Loader from '../../Loader/Loader';
import CharacterDetailCard from './CharacterDetailCard';
import DetailStyles from './CharacterDetail.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function CharacterDetail({ match: { params } }) {
  const classes = DetailStyles();
  const id = params.id;
  const [character, setCharacter] = useState([]);
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(true);

  useEffect(() => {
    API_BB.getCharacterDetail(id)
      .then((characterList) => setCharacter(characterList[0]))
      .then(() => setIsLoadingCharacter(false));
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        {isLoadingCharacter ? (
          <Loader />
        ) : (
          <Grid container className={classes.container}>
            <Grid item className={classes.item}>
              <CharacterDetailCard character={character} />
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
}

CharacterDetail.propTypes = {
  match: PropTypes.shape(),
};

export default CharacterDetail;
