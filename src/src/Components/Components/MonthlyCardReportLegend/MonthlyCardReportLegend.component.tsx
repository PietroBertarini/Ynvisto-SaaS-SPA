import React from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './MonthlyCardReportLegend.styles';
import {
  sumAllDataWithSameSignAsHeader, percentValue, getTotalValue,
} from './MonthlyCardReportLegend.utils';
import { IMonthlyCardData } from './MonthlyCardReportLegend.types';

export interface OwnProps {
    /**
     * Array of objects that contain : Label, some number value and color for legend.
     */
    legendData : IMonthlyCardData[];

}

export interface FormRowProps {
    color : string;
    key: string;
    label: string;
    value: number;
    denominator: number;
}

/**
 * Generates a color map for each ValuesBar in Monthly Tax card.
 */
function MonthlyCardReportLegend(props: OwnProps) {
  const { legendData } = props;
  const classes = useStyles();
  const totalVolume = getTotalValue(legendData);
  const denominator = sumAllDataWithSameSignAsHeader(legendData, totalVolume);

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        {legendData.map((item : IMonthlyCardData) => (
          <FormRow
            key={item.label}
            color={item.color}
            label={item.label}
            value={item.value}
            denominator={denominator}
          />
        ))}
      </Box>
    </div>
  );
}

function FormRow(props: FormRowProps) {
  const {
    label, color, value, denominator,
  } = props;

  const classes = useStyles(props);

  return (
    <Grid container item xs={12} spacing={2} alignItems="center" className={classes.row}>
      <Grid item xs={1}>
        <Box borderRadius="50%" bgcolor={color} style={{ width: '1.2vw', height: '1.2vw' }} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1" className={classes.helper}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1" className={classes.helper}>
          {percentValue(value, denominator)}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle1" className={classes.helper}>
          {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default MonthlyCardReportLegend;
