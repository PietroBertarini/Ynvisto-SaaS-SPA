import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import IconTextButton, { OwnProps } from './IconTextButton.component';
import { ReactComponent as acoesIcon } from '../../../Assets/Images/trandingIcon.svg';

export default {
  title: 'Components/LeftMenu/SubComponents/IconTextButton',
  component: IconTextButton,
} as Meta;

const Template: Story<OwnProps> = (args) => <IconTextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '/Acoes',
  iconPath: acoesIcon,
  label: 'Acoes',
};
