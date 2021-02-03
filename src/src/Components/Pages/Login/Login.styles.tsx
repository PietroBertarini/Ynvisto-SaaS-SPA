import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  toolbar: theme.mixins.toolbar,
  root: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Zurich',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: '3vw',
  },
  logo: {
    color: '#FFFFFF',
    fontFamily: 'Zurich',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4vw',
  },

  link: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5vw',
    fontWeight: 'bold',
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5vw',
    fontWeight: 'bold',
    color: '#EB5050',
  },
  linkText: {
    color: '#B1B1B1',
  },
  inputText: {
    color: '#FFFFFF',
  },
  textField: {
    marginBottom: '3vw',
    '& .MuiInputLabel-formControl ': {
      color: '#B1B1B1',
      borderBottomColor: '#B1B1B1',
    },
    '& .MuiInput-underline:not(.Mui-disabled):before': {
      color: '#B1B1B1',
      borderBottomColor: '#B1B1B1',
    },
    '& label.Mui-focused': {
      color: '#E9C46A',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E9C46A',
    },
  },
  cardContent: {
    width: '100%',
    height: '100%',
    background: '#28282F',
    padding: 60,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    minWidth: 367,
    maxWidth: '30vw',
    background: 'transparent',
  },
  box: {
    width: '100%',
    height: '100%',
  },
  button: {
    color: '#B1B1B1',
    borderRadius: 20,
    paddingRight: '5vw',
    paddingLeft: '5vw',
    paddingBottom: 20,
    paddingTop: 20,
    borderColor: '#B1B1B1',
    marginBottom: '3vw',
    height: '5vw',
    '&:hover': {
      backgroundColor: 'rgba(233, 196, 106, 0.14)',
      borderColor: '#E9C46A',
      color: '#E9C46A',
    },
  },
  spinner: {
    color: '#B1B1B1',
    borderRadius: 20,
    paddingRight: '5vw',
    paddingLeft: '5vw',
    paddingBottom: '4vw',
    paddingTop: 20,
    borderColor: '#B1B1B1',
    marginBottom: '3vw',
    height: '5vw',
  },
}));
