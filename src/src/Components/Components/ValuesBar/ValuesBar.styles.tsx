import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  card: {
    height: 30,
    marginBottom: '1.5vw',
    borderRadius: 50,
    backgroundColor: 'transparent',
    '& > div': {
      width: '100%!important',
      height: '200%!important',
      marginTop: '-10px',
    },
  },
}));
