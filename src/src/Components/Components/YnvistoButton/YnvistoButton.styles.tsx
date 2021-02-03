import { createStyles, makeStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];
export const useStyles = makeStyles(() => createStyles({
  button: {
    color: styledBy('status', {
      PRIMARY: '#E9C46A',
      DANGER: '#EB5050',
    }),
    borderColor: styledBy('status', {
      PRIMARY: '#E9C46A',
      DANGER: '#EB5050',
    }),
    fontSize: 20,
    textTransform: 'none',
    background: 'transparent',
    borderRadius: 20,
    float: 'right',
    marginRight: '3vw',
    padding: '5px 20px',
    borderWidth: 3,
    marginTop: '2vw',
    height: '3vw',
    minWidth: '12vw',
    '&:hover': {
      backgroundColor: 'rgba(233, 196, 106, 0.14)',
      color: styledBy('status', {
        CONFIRM: '#E9C46A',
        REMOVE: '#EB5050',
      }),
      borderColor: styledBy('status', {
        CONFIRM: '#E9C46A',
        REMOVE: '#EB5050',
      }),
    },
  },
  underText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: '3vw',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
