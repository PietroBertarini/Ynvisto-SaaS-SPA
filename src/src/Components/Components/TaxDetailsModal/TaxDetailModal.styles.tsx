import styled from 'styled-components';

export const ModalDetails = styled.div`
  background-color: #1E1E23;


  h1 {
    color: #fff;
    font-size: 2vw;
    text-align: center;
    border-bottom: 1px solid #E9C46A;
    width: 100%;
  }

  .operationType {
    h2 {
      font-size: 1.5vw;
      color: #fff;
      text-align: center;
      margin-bottom: 1;
      margin-top: 3;
    }

    .taxes {
      display: flex;
      flex-direction: row;  
      justify-content: space-between;

      p {
        font-size: 0.8vw;
        color: #fff;
        margin-top: 1;
      }
    }

    .result {
      display: flex;
      flex-direction: row;  
      justify-content: space-between;

      p {
        font-size: 0.8vw;
        color: #E9C46A;
        margin-top: 1;
      }
    }

    .line {
      border-bottom: 1px solid #fff;
      width: 100%;
    }
  } 
`;
