import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import ScrollTabs, { ScrollTabsProps } from './ScrollTabs.component';
import { mockTabs } from '../../../Mocks/ScrollTabs.mock';

export default {
  title: 'Components/ScrollTabs',
  component: ScrollTabs,
} as Meta;

const Template: Story<ScrollTabsProps> = (args) => <ScrollTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialTabValue: 0,
  tabsLabel: mockTabs,
};
