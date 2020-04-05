import { makeStyles } from '@material-ui/core/styles';

const HeaderStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem',
  },
  headerLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default HeaderStyles;
