import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import Resume, { ResumeProps } from './Resume.component';
import {
  mockOneResumeInfo,
  mockThreeResumeInfo,
  mockTwoResumeInfo,
} from '../../../Mocks/ResumeInfo.mock';

export default {
  title: 'Components/Resume',
  component: Resume,
} as Meta;

const Template: Story<ResumeProps> = (args) => <Resume {...args} />;

export const Three = Template.bind({});
Three.args = {
  allResumeInfo: mockThreeResumeInfo,
};
export const Two = Template.bind({});
Two.args = {
  allResumeInfo: mockTwoResumeInfo,
};
export const One = Template.bind({});
One.args = {
  allResumeInfo: mockOneResumeInfo,
};
