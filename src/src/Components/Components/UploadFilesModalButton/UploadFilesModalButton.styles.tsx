import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  listItem: {
    '& .Mui-selected,&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.16)' },
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '347px',
  },
  paper: {
    position: 'relative',
    boxSizing: 'border-box',
    outline: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '100%',
    border: 'none',
    borderRadius: '0.3125em',
    fontFamily: 'SF Pro Display',
    fontSize: '1rem;',
    backgroundColor: '#000000',
    width: '52em',
    padding: '1.25em',
    boxShadow: theme.shadows[5],

  },
  header: {
    position: 'relative',
    maxWidth: '100%',
    padding: '0',
    color: 'white',
    fontSize: '1.455em',
    textAlign: 'center',
    textTransform: 'none',
    '& .MuiTypography-h6': {
      fontSize: '1.455em',
    },
  },
  text: {
    position: 'relative',
    maxWidth: '100%',
    padding: '0',
    color: 'white',
    fontSize: '1.075em',
    textAlign: 'center',
    textTransform: 'none',
  },
  textButton: {
    position: 'relative',
    maxWidth: '100%',
    padding: '0',
    color: '#7EAFD6',
    fontSize: '1.075em',
    textAlign: 'center',
    textTransform: 'none',
  },
}));
