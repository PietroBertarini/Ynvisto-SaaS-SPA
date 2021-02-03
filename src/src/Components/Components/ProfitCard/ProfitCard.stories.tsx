import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import ProfitCard, { EProfitCardStatus, ProfitCardProps } from './ProfitCard.component';

export default {
  title: 'Components/ProfitCard',
  component: ProfitCard,
} as Meta;

const Template: Story<ProfitCardProps> = (args) => <ProfitCard {...args} />;

export const StatusLate = Template.bind({});
StatusLate.args = {
  profit: 30_304.94,
  tax: 506.14,
  status: EProfitCardStatus.LATE,
  month: 'Maio',
};
export const StatusInProgress = Template.bind({});
StatusInProgress.args = {
  profit: 30_304.94,
  tax: 506.14,
  status: EProfitCardStatus.NOT_FINISHED,
  month: 'Maio',
};
export const StatusNoDarf = Template.bind({});
StatusNoDarf.args = {
  profit: 30_304.94,
  tax: 506.14,
  status: EProfitCardStatus.NO_DARF,
  month: 'Maio',
};
export const StatusPaid = Template.bind({});
StatusPaid.args = {
  profit: 30_304.94,
  tax: 506.14,
  status: EProfitCardStatus.PAID,
  month: 'Maio',
};
export const StatusPending = Template.bind({});
StatusPending.args = {
  profit: 30_304.94,
  tax: 506.14,
  status: EProfitCardStatus.PENDING,
  month: 'Maio',
};
