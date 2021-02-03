import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfitCard, { ProfitCardProps } from '../ProfitCard/ProfitCard.component';
import { useStyles } from './ProfitCalendar.styles';

export interface OwnProps {
    /**
     * Array of api that contain all data from profit and tax of one year.
     */
    monthArray : ProfitCardProps[];
}

/**
 * Calendar of profits and tax
 * @constructor
 */
function ProfitCalendar(props: OwnProps) {
  const {
    monthArray,
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <FormRow threeMonthArray={monthArray.slice(0, 3)} />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow threeMonthArray={monthArray.slice(3, 6)} />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow threeMonthArray={monthArray.slice(6, 9)} />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow threeMonthArray={monthArray.slice(9, 12)} />
        </Grid>
      </Grid>
    </div>
  );
}

export interface FormRowProps {
    threeMonthArray : ProfitCardProps[];
}
function FormRow(props: FormRowProps) {
  const {
    threeMonthArray,
  } = props;
  return (
    <>
      <Grid item xs={4}>
        <ProfitCard
          status={threeMonthArray[0].status}
          profit={threeMonthArray[0].profit}
          tax={threeMonthArray[0].tax}
          month={threeMonthArray[0].month}
        />
      </Grid>
      <Grid item xs={4}>
        <ProfitCard
          status={threeMonthArray[1].status}
          profit={threeMonthArray[1].profit}
          tax={threeMonthArray[1].tax}
          month={threeMonthArray[1].month}
        />
      </Grid>
      <Grid item xs={4}>
        <ProfitCard
          status={threeMonthArray[2].status}
          profit={threeMonthArray[2].profit}
          tax={threeMonthArray[2].tax}
          month={threeMonthArray[2].month}
        />
      </Grid>
    </>
  );
}
export default ProfitCalendar;
