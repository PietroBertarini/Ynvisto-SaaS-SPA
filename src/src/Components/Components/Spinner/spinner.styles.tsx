import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
`;

interface SpinnerProps {
  size?: number,
  spinnerColor?: string
}

// https://styled-components.com/docs/basics Props doc
export const SpinnerContainer = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${(props) => (props.size ? props.size : 50)}px;
  height: ${(props) => (props.size ? props.size : 50)}px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: ${(props) => (props.spinnerColor ? props.spinnerColor : '#636767')};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
