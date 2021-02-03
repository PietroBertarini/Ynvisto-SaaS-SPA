import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: 'linear-gradient(35.82deg, #000000 -28.37%, #0F0F0F 81.41%, #32323E 93.95%)',
  },
  header: {
    color: '#FFFFFF',
    marginBottom: 50,
    fontFamily: 'Zurich',
  },
  grid: {
    marginLeft: 20,
    paddingRight: 50,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
