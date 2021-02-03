import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProfitAndDarf from './TaxReport.component';

export default {
  title: 'Services/TaxReports',
  component: ProfitAndDarf,
} as Meta;

const Template: Story<{}> = (args) => (<ProfitAndDarf {...args} />
);

export const Default = Template.bind({});
