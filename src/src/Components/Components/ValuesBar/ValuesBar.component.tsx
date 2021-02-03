import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Card } from '@material-ui/core';
import { useStyles } from './ValuesBar.styles';
import { getChartData } from './ValuesBar.utils';
import { IMonthlyCardData } from '../MonthlyCardReportLegend/MonthlyCardReportLegend.types';
import { getTotalValue } from '../MonthlyCardReportLegend/MonthlyCardReportLegend.utils';

export interface OwnProps {
    /**
     *  The data info to construct the legend and the bar of the card.
     */
    data : IMonthlyCardData[];
}

/**
 * Show a progress bar using multiple colors and divs.
 */
function ValuesBar(props: OwnProps) {
  const classes = useStyles();
  const { data } = props;
  const totalVolume = getTotalValue(data);

  const chartData = getChartData(data, totalVolume);
  const barData = chartData.valuesObj;
  const barColors = chartData.colors;
  const barKeys = chartData.keys;

  return (
    <Card variant="outlined" className={classes.card}>
      <ResponsiveBar
        data={[barData]}
        keys={barKeys}
        layout="horizontal"
        colors={barColors}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridY={false}
        enableLabel={false}
        animate
        isInteractive={false}
        motionStiffness={90}
        motionDamping={15}
      />
    </Card>
  );
}

export default ValuesBar;
