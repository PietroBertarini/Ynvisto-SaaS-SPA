import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactComponent as whiteWallet } from '../../../Assets/Images/WalletIcon/whiteWallet.svg';

import TopBarDropdown, { OwnProps } from './TopBarDropdown.component';

export default {
  title: 'Components/TopBar/SubComponents/TopBarDropdown',
  component: TopBarDropdown,
} as Meta;

const Template: Story<OwnProps> = (args) => (<TopBarDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ['ActiveOption', 'Option1', 'Option2'],
  iconPath: whiteWallet,
  tooltip: 'tooltop',
  activeState: 'ActiveOption',
  actionType: 'ActionType',
};
