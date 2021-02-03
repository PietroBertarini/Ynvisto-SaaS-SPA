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
  message: {
    color: '#FFF',
    fontSize: '1vw',
    margin: '5vh',
  },
  subheader: {
    color: '#FFFFFF',
    fontSize: '2.4vw',
    fontFamily: 'Zurich',
    marginTop: '5vh',
  },
  grid: {
    marginTop: '2.5vw',
    minWidth: 1100,
  },
  button: {
    color: '#E9C46A',
    fontSize: 20,
    textTransform: 'none',
    background: 'transparent',
    borderRadius: 20,
    float: 'right',
    marginRight: '3vw',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderColor: '#E9C46A',
    borderWidth: 3,
    marginTop: '3vw',
    marginBottom: '3vw',
    height: '3vw',
    minWidth: '12vw',
    '&:hover': {
      backgroundColor: 'rgba(233, 196, 106, 0.14)',
      borderColor: '#E9C46A',
      color: '#E9C46A',
    },
  },
  buttons: {
    padding: 0,
    height: '8vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  obs: {
    color: '#FFF',
    marginTop: 20,
  },
}));
