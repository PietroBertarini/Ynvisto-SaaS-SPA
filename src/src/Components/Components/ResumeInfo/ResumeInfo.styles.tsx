import { makeStyles, createStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

export const useStyles = makeStyles(() => createStyles({
  resumeSubTitle: {
    color: '#B1B1B1',
    fontSize: '1.5vw',
    textAlign: 'center',

  },
  resumeHeader: {
    textAlign: 'center',
    color: styledBy('status', {
      GOOD: '#05E985',
      WARNING: '#E9C46A',
      BAD: '#EB5050',
    }),
    fontSize: '2.8vw',
  },
}));
