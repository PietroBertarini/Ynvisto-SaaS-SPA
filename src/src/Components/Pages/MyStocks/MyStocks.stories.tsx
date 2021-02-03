import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MyStocks, { OwnProps } from './MyStocks.component';
import { mockStockTwo } from '../../../Tests/Redux/Components/Pages/MyStocks/MyStocks.mock';

export default {
  title: 'Services/MyStocks',
  component: MyStocks,
} as Meta;

const Template: Story<OwnProps> = (args) => (<MyStocks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stocks: [mockStockTwo, mockStockTwo, mockStockTwo, mockStockTwo, mockStockTwo],
  activePeriod: 'Dia',
};
