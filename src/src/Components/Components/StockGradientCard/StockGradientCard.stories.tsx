import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import StockGradientCard, { OwnProps } from './StockGradientCard.component';
import { mockStock, mockStockTwo } from '../../../Tests/Redux/Components/Pages/MyStocks/MyStocks.mock';

export default {
  title: 'Components/StockGradientCard',
  component: StockGradientCard,
} as Meta;

const Template: Story<OwnProps> = (args) => <StockGradientCard {...args} />;

export const Negative = Template.bind({});
Negative.args = {
  stock: mockStockTwo,
  key: '0',
  period: 'Dia',
};
export const Positive = Template.bind({});
Positive.args = {
  stock: mockStock,
  key: '0',
  period: 'Dia',
};
