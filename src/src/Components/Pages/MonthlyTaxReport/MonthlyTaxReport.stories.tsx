import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MonthlyTaxReport from './MonthlyTaxReport.component';

export default {
  title: 'Services/MonthlyTaxReport',
  component: MonthlyTaxReport,
} as Meta;

const Template: Story<{}> = (args) => (<MonthlyTaxReport {...args} />
);

export const Default = Template.bind({});
