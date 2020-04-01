import { makeStyles } from '@material-ui/core/styles';

const DetailCardStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardContent: {
    width: '100%',
    padding: '2rem',
    position: 'relative',
  },
  cover: {
    width: '30%',
  },
  appearance: {
    position: 'absolute',
    bottom: '1rem',
    right: '2rem',
  },
}));

export default DetailCardStyles;
