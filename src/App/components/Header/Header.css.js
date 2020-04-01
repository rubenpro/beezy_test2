import { makeStyles } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem',
    '& .MuiTypography-h1': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '4rem',
      },
    },
  },
  headerLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  word: {
    display: 'flex',
    alignItems: 'center',
  },
  word2: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '9rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '6rem',
    },
  },
  element: {
    border: '2px solid',
    width: '9rem',
    height: '9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    position: 'relative',
    background: 'linear-gradient(145deg, rgba(0,70,62,1) 0%, rgba(0,121,71,1) 100%)',
    [theme.breakpoints.down('sm')]: {
      width: '6rem',
      height: '6rem',
    },
    '&.inverted': {
      background: 'linear-gradient(145deg, rgba(0,121,71,1) 0%, rgba(0,70,62,1) 100%)',
    },
  },
  number: {
    position: 'absolute',
    fontSize: '1.2rem',
    right: '0.6rem',
    top: '0.36rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      right: '0.6rem',
      top: '0.3rem',
    },
  },
  fontAveria: {
    fontFamily: 'Averia Serif Libre',
  },
}));

export default headerStyles;
