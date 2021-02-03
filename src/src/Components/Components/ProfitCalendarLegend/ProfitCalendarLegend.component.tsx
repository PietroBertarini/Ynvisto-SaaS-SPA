import React from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useStyles } from './ProfitCalendarLegend.styles';

export interface OwnProps {
    /**
     * Actual Month Profit and Taxes Values.
     */
    legendData : ILegendData[];
}
export interface ILegendData {
    /**
     * Choose a color of the helper.
     */
    color : EColor;
    /**
     * The label of the helper
     */
    label : string;
}

export enum EColor {
    RED = 'RED',
    BLUE = 'BLUE',
    GREEN = 'GREEN',
    YELLOW = 'YELLOW',
    WHITE = 'WHITE',
}

/**
 * Actual Month Profit
 */
function ProfitCalendarLegend(props: OwnProps) {
  const {
    legendData,
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="row">
        {legendData.map((item : ILegendData) => (
          <FormRow key={item.label} color={item.color} label={item.label} />
        ))}
      </Box>
    </div>
  );
}

export interface FormRowProps {
    color : EColor;
    key: string;
    label: string;
}
function FormRow(props: FormRowProps) {
  const { label } = props;
  const classes = useStyles(props);

  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.row}>
      {circle}
      <Typography className={classes.subTitle}>
        {label}
      </Typography>
    </Box>
  );
}
export default ProfitCalendarLegend;
