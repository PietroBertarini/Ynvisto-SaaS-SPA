import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import ResumeInfo, { EResumeStatus, ResumoInfoProps } from './ResumeInfo.component';

export default {
  title: 'Components/Resume/SubComponents/ResumeInfo',
  component: ResumeInfo,
} as Meta;

const Template: Story<ResumoInfoProps> = (args) => <ResumeInfo {...args} />;
export const Warning = Template.bind({});
Warning.args = {
  value: 30_043.02,
  subtitle: 'Legenda',
  status: EResumeStatus.BAD,
};

export const Alert = Template.bind({});
Alert.args = {
  value: 30_043.02,
  subtitle: 'Legenda',
  status: EResumeStatus.WARNING,
};
export const Ok = Template.bind({});
Ok.args = {
  value: 30_043.02,
  subtitle: 'Legenda',
  status: EResumeStatus.GOOD,
};
