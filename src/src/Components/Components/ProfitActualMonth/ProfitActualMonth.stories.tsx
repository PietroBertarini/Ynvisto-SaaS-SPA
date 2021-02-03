import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import { mockCalendarData } from '../../../Mocks/ProfitCalendar.mock';
import ProfitActualMonth, { OwnProps } from './ProfitActualMonth.component';

export default {
  title: 'Components/ProfitActualMonth',
  component: ProfitActualMonth,
} as Meta;

const Template: Story<OwnProps> = (args) => <ProfitActualMonth {...args} />;

export const Default = Template.bind({});
Default.args = {
  month: mockCalendarData[3],
};
