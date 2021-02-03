import { makeStyles, createStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

export const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100%',
    height: '100%',
    minWidth: 222,
    minHeight: 90,
    borderRadius: '2.5vh',
    background: styledBy('status', {
      PAID: 'linear-gradient(235.08deg, #05C0E9 -83%, #32323E 38.57%)',
      NO_DARF: 'linear-gradient(235.08deg, #05E985 -83%, #236D55 12.15%, #32323E 38.57%);',
      PENDING: 'linear-gradient(235.08deg, #E9C46A -83%, #32323E 38.57%)',
      LATE: 'linear-gradient(235.08deg, #EB5050 -83%, #32323E 38.04%)',
      NOT_FINISHED: 'linear-gradient(235.08deg, #FFFFFF -83%, #32323E 38.57%)',
    }),
  },
  actionArea: {
    display: 'inline-block',
  },
  profitPositive: {
    fontSize: '1.6vw',
    width: 'auto',
    color: styledBy('status', {
      PAID: '#05C0E9',
      NO_DARF: '#05E985',
      PENDING: '#E9C46A',
      LATE: '#EB5050',
      NOT_FINISHED: '#B1B1B1',
    }),
  },
  profitNegative: {
    fontSize: '1.6vw',
    width: 'auto',
    color: styledBy('status', {
      PAID: '#EB5050',
      NO_DARF: '#EB5050',
      PENDING: '#E9C46A',
      LATE: '#EB5050',
      NOT_FINISHED: '#B1B1B1',
    }),
  },

  tax: {
    fontSize: '1.4vw',
    width: 'auto',
    color: styledBy('status', {
      PAID: '#05C0E9',
      NO_DARF: '#05E985',
      PENDING: '#E9C46A',
      LATE: '#EB5050',
      NOT_FINISHED: '#B1B1B1',
    }),
  },
  impostoBox: {
    display: 'flex',
  },
  subtitle: {
    fontSize: '1vw',
    color: '#8E8E94',
  },
  month: {
    fontSize: '1.2vw',
    color: '#FFFFFF',
  },
  box: {
    width: 'auto',
  },
  displayFlex: {
    display: 'flex',
  },

}));
