import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  toolbar: theme.mixins.toolbar,
  root: {
    backgroundColor: 'linear-gradient(35.82deg, #000000 -28.37%, #0F0F0F 81.41%, #32323E 93.95%)',
    flexGrow: 1,
    marginLeft: 239,
  },
  header: {
    color: '#FFFFFF',
    fontSize: '2.8vw',
    fontFamily: 'Zurich',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: '1.9vw',
    marginBottom: '1vw',
    marginTop: '1vw',
  },
}));
