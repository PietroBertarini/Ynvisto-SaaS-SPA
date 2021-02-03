import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import ProfitCalendar, { OwnProps } from './ProfitCalendar.component';
import { mockCalendarData } from '../../../Mocks/ProfitCalendar.mock';

export default {
  title: 'Components/ProfitCalendar',
  component: ProfitCalendar,
} as Meta;

const Template: Story<OwnProps> = (args) => <ProfitCalendar {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
  monthArray: mockCalendarData,
};
