import styled from 'styled-components';

export interface CardProps {
  color: string;
  children ?: any;
}

export const Main = styled.div<CardProps>`
  min-height: 10vh;
  min-width: 25vw;
  border-radius: 20px;
  margin-bottom: 2vh;
  background: #32323E;
  background: linear-gradient(
    30deg,
    #32323E 50%,
    ${(props) => props.color}
  );
`;
