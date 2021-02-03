import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../Theme/theme';

const drawerWidth = 240;

export const useStyles = makeStyles(() => createStyles({
  rootDiv: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#000000',
  },
  drawerPaper: {
    width: drawerWidth,
    color: '#FFFFFF',
    backgroundColor: '#000000',
    background: theme.palette.primary.main,
  },
  rootList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#000000',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'Zurich',
    display: 'flex',
    backgroundColor: '#000000',
    justifyContent: 'center',
    textDecoration: 'none',
  },
}));
