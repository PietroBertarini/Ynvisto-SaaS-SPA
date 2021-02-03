import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  rootNegative: {
    width: 256,
    height: 141,
    borderRadius: 20,
    background: 'linear-gradient(228.42deg, #EB5050 -57.12%, #32323E 75.33%);',
  },
  rootPositive: {
    width: 256,
    height: 141,
    borderRadius: 20,
    background: 'linear-gradient(228.42deg, #05E985 -57.12%, #32323E 75.33%);',
  },
  cardAction: {
    paddingTop: 0,
    paddingBottom: 3,
  },
  secondCardAction: {
    paddingTop: 0,
    paddingBottom: 5,
  },
  ticker: {
    color: '#FFFFFF',
    fontSize: 21,
  },
  percentageNegative: {
    color: '#EB5050',
    fontSize: 29,
  },
  percentagePositive: {
    color: '#05E985',
    fontSize: 29,
  },
  companyName: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingBottom: 2,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingBottom: 2,
  },
  cardBackground: {
    background: 'linear-gradient(243.82deg, #05E985 -43.12%, #236D55 12.15%, #32323E 38.57%);',
  },
  cardMedia: {
    '&.MuiCardMedia-img': {
      objectFit: 'unset',
      width: 65,
      padding: 5,
      marginTop: 5,
    },
  },
}));
