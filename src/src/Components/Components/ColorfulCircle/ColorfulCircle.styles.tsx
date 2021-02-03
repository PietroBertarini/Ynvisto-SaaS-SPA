import styled from 'styled-components';

export interface CircleProps {
  firstColor: string;
  lastColor?: string;
  percentage?: number;
}

export const Main = styled.div<CircleProps>`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: linear-gradient(
    ${(props) => props.firstColor}, 
    ${(props) => props.percentage}%, 
    ${(props) => props.lastColor}
  );
    
  .innerCircle {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
  }
`;
