import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ValuesBar, { OwnProps } from './ValuesBar.component';
import {
  getProfitDataNegativeAndPositive,
  getProfitDataRemainsNegative,
} from '../../../Mocks/MonthlyCardReport.mock';

export default {
  title: 'Components/ValuesBar',
  component: ValuesBar,
} as Meta;

const Template: Story<OwnProps> = (args) => <ValuesBar {...args} />;

export const PositiveValues = Template.bind({});

PositiveValues.args = {
  data: getProfitDataNegativeAndPositive,
};

export const NegativeValues = Template.bind({});

NegativeValues.args = {
  data: getProfitDataRemainsNegative,
};
