import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import MonthlyCardReport, { ETitleStatus, OwnProps } from './MonthlyCardReport.component';
import { getProfitDataDefault } from '../../../Mocks/MonthlyCardReport.mock';

export default {
  title: 'Components/MonthlyCardReport',
  component: MonthlyCardReport,
} as Meta;

const Template: Story<OwnProps> = (args) => <MonthlyCardReport {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: ETitleStatus.GOOD,
  title: 'stories',
  headerMonetaryValue: 10000,
  data: getProfitDataDefault,

};
