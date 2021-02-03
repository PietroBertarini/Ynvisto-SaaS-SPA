import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import MonthlyCardReportLegend, { OwnProps } from './MonthlyCardReportLegend.component';
import { getProfitDataDefault } from '../../../Mocks/MonthlyCardReport.mock';

export default {
  title: 'Components/MonthlyCardReportLegend',
  component: MonthlyCardReportLegend,
} as Meta;

const Template: Story<OwnProps> = (args) => <MonthlyCardReportLegend {...args} />;

export const StatusOk = Template.bind({});
StatusOk.args = {
  legendData: getProfitDataDefault,
};
