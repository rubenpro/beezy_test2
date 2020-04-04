import makeStyles from '@material-ui/core/styles/makeStyles';
import Shared from '../../../../../utils/Shared';

const AutocompleteStyles = makeStyles((theme) => ({
  inputRoot: {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-input': {
      color: Shared.selectedItemColor,
    },
  },
  option: {
    '&.MuiAutocomplete-option[aria-selected="true"]': {
      color: Shared.selectedItemColor,
    },
  },
}));

export default AutocompleteStyles;
