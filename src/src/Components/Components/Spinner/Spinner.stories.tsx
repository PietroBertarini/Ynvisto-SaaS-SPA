import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner from './spinner.component';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<{ }> = (args) => (<Spinner />
);

export const Full = Template.bind({});
