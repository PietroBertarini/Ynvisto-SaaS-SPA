import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import ProfitCalendarLegend, { OwnProps } from './ProfitCalendarLegend.component';
import { mockCalendarLegend } from '../../../Mocks/ProfitCalendarLegend.mock';

export default {
  title: 'Components/ProfitCalendarLegend',
  component: ProfitCalendarLegend,
} as Meta;

const Template: Story<OwnProps> = (args) => <ProfitCalendarLegend {...args} />;

export const ProfitCalendarHelperDefault = Template.bind({});
ProfitCalendarHelperDefault.args = {
  legendData: mockCalendarLegend,
};
