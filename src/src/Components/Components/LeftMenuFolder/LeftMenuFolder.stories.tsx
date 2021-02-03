import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import List from '@material-ui/core/List';
import LeftMenuFolder, { OwnProps } from './LeftMenuFolder.component';
import { ReactComponent as acoesIcon } from '../../../Assets/Images/trandingIcon.svg';
import IconTextButton from '../IconTextButton/IconTextButton.component';

export default {
  title: 'Components/LeftMenu/SubComponents/LeftMenuFolder',
  component: LeftMenuFolder,
} as Meta;

const EmptyTemplate: Story<OwnProps> = (args) => <LeftMenuFolder {...args} />;
const Template: Story<OwnProps> = (args) => (
  <LeftMenuFolder {...args}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <IconTextButton label="Suno Research" iconPath={acoesIcon} path="/" />
      <IconTextButton label="Rico" iconPath={acoesIcon} path="/" />
      <IconTextButton label="Empiricus" iconPath={acoesIcon} path="/" />
      <IconTextButton label="Info Money" iconPath={acoesIcon} path="/" />
    </List>
  </LeftMenuFolder>
);

export const Empty = EmptyTemplate.bind({});
Empty.args = {
  iconPath: acoesIcon,
  label: 'Dropdown',
};
export const Full = Template.bind({});
Full.args = {
  iconPath: acoesIcon,
  label: 'Dropdown',
};
