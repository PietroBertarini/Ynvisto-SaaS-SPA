import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Card, CardActions, CardActionArea, CardMedia,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './StockGradientCard.styles';
import { IStock } from '../../../Redux/Services/MyStocks/MyStocks.types';
import {
  createPathLinkFromTicker,
  getBasePriceOfPeriod, getPriceDiff,
  getPriceDiffPercentage,
  numberToReaisFormat,
} from './StockGradientCard.utils';

/**
 * Gradient card (and link button) with price information about a Stock,
 * that is used in the @MyStocks page,Turns red when the price diff is negative,
 * turns green when price diff is positive
 * @param stock: data from api.get of stock.
 * @param fullName: full name of the ticker company.
 * @param period: base period for math information (in future, will be a enum).
 */

export interface OwnProps {
  stock : IStock;
  key: string;
  period: string;
}

function StockGradientCard(props: OwnProps) {
  const classes = useStyles();
  const { stock, period } = props;
  const basePrice = getBasePriceOfPeriod(stock, period);
  const isPositive = basePrice < stock.currentPrice.amount;

  return (
    <Grid container item xs={3}>
      <Card className={isPositive ? classes.rootPositive : classes.rootNegative}>
        <Link to={createPathLinkFromTicker(stock.ticker)} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="65"
              image={stock.logoUrl}
              title="Contemplative Reptile"
              className={classes.cardMedia}
            />
            <CardActions className={classes.cardAction}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography component="span" className={classes.ticker}>
                  <Box fontWeight="fontWeightBold">
                    {stock.ticker}
                  </Box>
                </Typography>
                <Typography
                  component="span"
                  className={isPositive ? classes.percentagePositive : classes.percentageNegative}
                >
                  <Box justifyContent="flex-end">
                    {isPositive ? '\u25B4 ' : '\u25BE '}
                    {getPriceDiffPercentage(basePrice, stock.currentPrice.amount)}
                  </Box>
                </Typography>
              </Grid>
            </CardActions>
            <CardActions className={classes.secondCardAction}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid container item xs={7} direction="row">
                  <Typography component="span">
                    <Box fontWeight="fontWeightBold" className={classes.companyName}>
                      {stock.companyName}
                    </Box>
                  </Typography>
                </Grid>
                <Typography component="span" className={classes.price}>
                  <Box fontWeight="fontWeightBold" justifyContent="flex-end">
                    {getPriceDiff(basePrice, stock.currentPrice.amount)}
                  </Box>
                </Typography>
                <Typography component="span" className={classes.price}>
                  <Box justifyContent="flex-end">
                    {numberToReaisFormat(stock.currentPrice.amount)}
                  </Box>
                </Typography>
              </Grid>
            </CardActions>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default StockGradientCard;
