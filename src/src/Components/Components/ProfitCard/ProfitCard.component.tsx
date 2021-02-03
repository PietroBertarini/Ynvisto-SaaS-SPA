import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Card, CardActionArea,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './ProfitCard.styles';

export enum EProfitCardStatus {
    PAID = 'PAID',
    NO_DARF = 'NO_DARF',
    PENDING = 'PENDING',
    LATE = 'LATE',
    NOT_FINISHED = 'NOT_FINISHED',
}

export interface ProfitCardProps {
    /**
     * Month of card
     */
    month: string;
    /**
     * Amount of sell volume of month
     */
    profit : number;
    /**
     * Amount of tax volume
     */
    tax: number
    /**
     * Actual status of profitCard
     */
    status: EProfitCardStatus;

}

/**
 * Monthly Card of Profit and Tax Page
 * @constructor
 */
function ProfitCard(props: ProfitCardProps) {
  const classes = useStyles(props);
  const {
    profit, tax, month,
  } = props;

  return (
    <Card className={classes.root}>
      <Link to={`${month}`}>
        <CardActionArea className={classes.actionArea}>
          <CardContent>
            <Box display="flex">
              <Typography className={classes.month}>
                {month}
              </Typography>
            </Box>
            <Grid container direction="row" className={classes.displayFlex}>
              <Grid item xs={7} className={classes.displayFlex}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="flex-start"
                  className={classes.box}
                  alignSelf="center"
                >
                  {profit >= 0 && (
                  <Typography className={classes.profitPositive}>
                    {profit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </Typography>
                  )}
                  {profit < 0 && (
                    <Typography className={classes.profitNegative}>
                      {profit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Typography>
                  )}
                  <Typography className={classes.subtitle}>
                    {profit >= 0 ? 'Lucro' : 'Prejuízo'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5} className={classes.displayFlex}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="flex-start"
                  className={classes.box}
                  alignSelf="center"
                >
                  <Typography className={classes.tax}>
                    {tax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </Typography>
                  <Typography className={classes.subtitle}>
                    Imposto
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
export default ProfitCard;
