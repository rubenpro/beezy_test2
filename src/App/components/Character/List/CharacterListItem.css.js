import makeStyles from '@material-ui/core/styles/makeStyles';

const ListItemStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
  },
  paper: {
    border: '2px solid',
  },
  cardActionArea: {
    position: 'relative',
  },
  cardContent: {
    display: 'inline-block',
    backgroundColor: 'rgba(66, 66, 66, 0.6)',
    padding: '0.7rem 0.9rem',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));

export default ListItemStyles;
