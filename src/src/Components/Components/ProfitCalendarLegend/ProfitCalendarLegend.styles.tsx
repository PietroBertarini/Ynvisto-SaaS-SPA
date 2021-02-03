import { createStyles, makeStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];
export const useStyles = makeStyles(() => createStyles({
  root: {
    paddingBottom: '1.2vw',
  },
  row: {
    marginLeft: '4vw',
  },
  shape: {
    backgroundColor: styledBy('color', {
      BLUE: '#05C0E9',
      GREEN: '#05E985',
      YELLOW: '#E9C46A',
      RED: '#EB5050',
      WHITE: '#B1B1B1',
    }),
    // /
    width: '1.2vw',
    height: '1.2vw',
    marginRight: '0.6vw',
  },
  shapeCircle: {
    borderRadius: '50%',
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: '1vw',
  },
}));
