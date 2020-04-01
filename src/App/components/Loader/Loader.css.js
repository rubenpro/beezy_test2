import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const LoaderStyles = makeStyles((theme) => ({
  container: {
    padding: '2em',
  },
  loader: {
    color: green[900],
  },
}));

export default LoaderStyles;
