import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  root: {
    paddingBottom: '1.2vw',
  },
  row: {
    marginBottom: '0.8vw',
  },
  shape: {
    width: '1.2vw',
    height: '1.2vw',
    marginRight: '0.6vw',
  },
  shapeCircle: {
    borderRadius: '50%',
  },
  helper: {
    color: '#FFFFFF',
  },
}));
