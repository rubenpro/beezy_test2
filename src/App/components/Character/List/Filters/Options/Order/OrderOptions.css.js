import makeStyles from '@material-ui/core/styles/makeStyles';
import Shared from '../../../../../../utils/Shared';

const optionsStyles = makeStyles((theme) => ({
  selected: {
    '&.MuiListItem-root.Mui-selected': {
      color: Shared.selectedItemColor,
    },
  },
}));

export default optionsStyles;
