import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  root: {
    height: '100vh',
    minHeight: '100vh',
    backgroundColor: 'linear-gradient(35.82deg, #000000 -28.37%, #0F0F0F 81.41%, #32323E 93.95%)',

  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
