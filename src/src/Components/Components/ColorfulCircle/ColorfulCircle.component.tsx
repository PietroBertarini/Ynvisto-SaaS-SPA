import React from 'react';
import { Main, CircleProps } from './ColorfulCircle.styles';

const ColorfulCircle = ({
  firstColor, lastColor, percentage,
} : CircleProps) => (
  <Main
    firstColor={((percentage === 0) && lastColor) ? lastColor : firstColor}
    lastColor={lastColor || firstColor}
    percentage={percentage || 50}
  >
    <div className="innerCircle" />
  </Main>
);

export default ColorfulCircle;
