import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemStyles from './CharacterListItem.css';

const CharacterListItem = ({ character }) => {
  const classes = ListItemStyles();
  return (
    <Fragment key={character.char_id}>
      <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
        <Link to={`/character/${character.char_id}`}>
          <Paper color="secondary" square className={classes.paper}>
            <Card square>
              <CardActionArea className={classes.cardActionArea}>
                <Box>
                  <CardMedia component="img" image={character.img} alt={character.name} />
                </Box>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" className={classes.root}>
                    {character.name}
                  </Typography>
                  <Typography variant="caption">portrayed by&nbsp;</Typography>
                  <Typography variant="overline">{character.portrayed}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Link>
      </Grid>
    </Fragment>
  );
};

CharacterListItem.propTypes = {
  character: PropTypes.shape(),
};

export default CharacterListItem;
