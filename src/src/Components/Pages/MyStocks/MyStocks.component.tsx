import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useStyles } from './MyStocks.styles';
import StockGradientCard from '../../Components/StockGradientCard/StockGradientCard.component';
import { State } from '../../../Redux/root-reducer';
import { fetchStocksRequest } from '../../../Redux/Services/MyStocks/MyStocks.actions';
import { IStock } from '../../../Redux/Services/MyStocks/MyStocks.types';

/**
 * Get the stores states that MyStocks uses and observe.
 * @param state: the stored stated of the Ynvisto.
 */
const mapStateToProps = (state: State) => ({
  stocks: state.myStocks.stocks,
  activePeriod: state.topBar.activePeriod,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export type OwnProps = PropsFromRedux

/**
 * This page get all stocks at useEffect and render this stocks in StockGradientCard components,
 * every time that stocks or activePeriod changes, @MyStocks render all @StockGradientCard again.
 * @param props: the states from store that @myStocks observe and uses.
 */
const MyStocks = (props: OwnProps) => {
  const dispatch = useDispatch();
  const { stocks, activePeriod } = props;
  const classes = useStyles();

  // FetchStocks after Mount and Observe @activePeriod (in future @stocks)
  useEffect(() => {
    dispatch(fetchStocksRequest());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        <Box justifyContent="flex-start">
          Ações
        </Box>
      </Typography>
      <Grid container spacing={1} className={classes.grid}>
        {stocks.map((item : IStock) => (
          <StockGradientCard key={item.ticker} stock={item} period={activePeriod} />
        ))}
      </Grid>
    </div>
  );
};
export default connector(MyStocks);
