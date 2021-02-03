import React from 'react';
import { Main, CardProps } from './YnvistoCard.styles';

const YnvistoCard = ({ color, children } : CardProps) => (
  <Main color={color}>
    <div className="innerCircle" />
    {children}
  </Main>
);

export default YnvistoCard;
