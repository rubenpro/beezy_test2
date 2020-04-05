import makeStyles from '@material-ui/core/styles/makeStyles';

const ListStyles = makeStyles((theme) => ({
  options: {
    display: 'flex',
    '&#filters .MuiAutocomplete-root': {
      padding: `0 ${theme.spacing(3)}px`,
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    '&#options': {
      justifyContent: 'flex-end',
      padding: `0 ${theme.spacing(3)}px`,
    },
  },
  list: {
    width: 'auto',
    margin: 'auto',
  },
}));

export default ListStyles;
