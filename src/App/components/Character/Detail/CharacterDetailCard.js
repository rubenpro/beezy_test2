import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DetailCardStyles from './CharacterDetailCard.css';

const CharacterDetailCard = ({ character }) => {
  const classes = DetailCardStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.cover}
        image={character.img}
        title={character.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{character.name}</Typography>
        {character.nickname && (
          <div>
            <Typography variant="caption">also known as</Typography>&nbsp;
            <Typography variant="overline" component="span">
              {character.nickname}
            </Typography>
          </div>
        )}
        <p>
          {character.portrayed} performs {character.name}, a {character.occupation[0]} born in{' '}
          {character.birthday}
        </p>
        <div className={classes.appearance}>
          Seasons appearance: {`${_.size(character.appearance)} / 5`}
        </div>
      </CardContent>
    </Card>
  );
};

CharacterDetailCard.propTypes = {
  character: PropTypes.shape(),
};

export default CharacterDetailCard;
