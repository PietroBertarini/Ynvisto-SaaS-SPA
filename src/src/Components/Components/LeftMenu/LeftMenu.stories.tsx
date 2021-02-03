import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import LeftMenu from './LeftMenu.component';

export default {
  title: 'Components/LeftMenu',
  component: LeftMenu,
} as Meta;

const Template: Story<{}> = (args) => <LeftMenu />;

export const LeftMenuDefault = Template.bind({});
