import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfitCard, { ProfitCardProps } from '../ProfitCard/ProfitCard.component';
import { useStyles } from './ProfitActualMonth.styles';

export interface OwnProps {
    /**
     * Actual Month Profit and Taxes Values.
     */
    month : ProfitCardProps;
}

/**
 * Actual Month Profit
 */
function ProfitActualMonth(props: OwnProps) {
  const {
    month,
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item xs={12} spacing={2}>
        <FormRow actualMonth={month} />
      </Grid>
    </div>
  );
}

export interface FormRowProps {
    actualMonth : ProfitCardProps;
}
function FormRow(props: FormRowProps) {
  const {
    actualMonth,
  } = props;
  return (
    <>
      <Grid item xs={4}>
        <ProfitCard
          status={actualMonth.status}
          profit={actualMonth.profit}
          tax={actualMonth.tax}
          month={actualMonth.month}
        />
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={4} />
    </>
  );
}
export default ProfitActualMonth;
