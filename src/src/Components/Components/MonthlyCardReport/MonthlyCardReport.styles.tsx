import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];
export const useStyles = makeStyles((theme: Theme) => createStyles({
  titleContainer: {
    width: '100%',
    height: '4vw',
    paddingTop: '0!important',
    paddingBottom: '0vw!important',
    paddingLeft: '0!important',
    paddingRight: '0!important',
    background: '#28282F',
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    background: 'transparent',
  },
  content: {
    width: '100%',
    height: '20vw',
    minHeight: 300,
    background: '#1E1E23',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Zurich',
    fontWeight: 'bold',
  },
  actionArea: {
    display: 'inline-block',
  },
  titleContainerBox: {
    width: '100%',
    height: '100%',
  },
  headerMonetaryValue: {
    textAlign: 'center',
    color: styledBy('status', {
      GOOD: '#05E985',
      WARNING: '#E9C46A',
      BAD: '#EB5050',
    }),
    marginBottom: '1vw',
    fontWeight: 'bold',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    '& .MuiDialog-container': {
      width: '100%',
    },
  },
  paper: {
    backgroundColor: '#1E1E23',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '25vw',
  },
  showDiv: {
    width: '90%',
    color: '#ccc',
    borderTop: '1px solid #ccc',
    padding: '20',
    position: 'absolute',
    bottom: '0',
  },
  showMore: {
    padding: '10',
    textAlign: 'center',
  },
}));
