import styled from 'styled-components';

export const Title = styled.div`
  color: #fff;
  font-size: 2.8vw;
  font-family: 'Zurich';
  padding-left: 239px;
`;

export const Main = styled.div`
  width: 90vw;
  margin: auto;
  padding: 0 10vw;
  padding-left: 239px;

  .pieChart {
    width: 100%;
    height: 50vh;
  }
`;

export const TotalDiv = styled.div`
  font-family: 'Zurich';
  color: #fff;
  font-size: 2vw;
  padding-left: 5vw;
`;

export const Table = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  table {
    width: 80%;
    border-collapse: collapse;

    th {
      color: #B1B1B1;
      font-size: 1.2vw;
    }
    
    td {
      color: #fff;
      font-size: 1.1vw;
      border-bottom: 1px solid #B1B1B1;      
    }

    th, td {
      font-weight: normal;
      padding: 5px;
      padding-top: 20px;
    }

    td.leftAlign, th.leftAlign { 
      text-align: left;
      padding-left: 2vw;
    }

    td.rightAlign, th.rightAlign { 
      text-align: right; 
      padding-right: 1.5vw;
    }

  }
`;

export const NoCurrentPositionMessage = styled.div`
  color: #fff;
  font-size: 1.8vw;
  font-family: 'Zurich';
  width: 50vw;
  margin: auto;
  padding-top: 10vh;
  text-align: center;
`;
