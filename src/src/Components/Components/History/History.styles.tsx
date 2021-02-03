import styled from 'styled-components';

interface CardColorProp {
  color: string;
}

export const Main = styled.div`
  margin: 5vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 5vw;
    margin-bottom: 20px;
    text-align: center;
    margin-left: 239px;
  }
`;

export const TimeLine = styled.div`
  min-height: 10vh;
  min-width: 45vw;
  margin-left: 15px;
  border-left: 3px solid #B1B1B1;
  padding-left: 1vw;

  .cards {
    padding: 2vh;
    max-width: 32vw;
  }
`;

export const TimeBlock = styled.div`
  .dateLine {
    height: 35px;
    display: flex;
    
    p {
      color: #B1B1B1;
      font-family: 'Zurich';
      font-weight: bold;
      height: 35px;
      padding: 0;
      margin: 0 0 0 30px;
      font-size: 30px;
    }
  }
`;

export const InnerCard = styled.div<CardColorProp>`
  padding: 0 5px;

  h2 {
    padding: 8px 0 0 2.5vw;
    color: #fff;
    font-weight: bold;
    font-size: 0.8vw;
    margin-bottom: 20px;
  }

  .infoCard {
    padding: 0 0 10px 10px;
    display: flex;
    flex-direction: row;
    flex: 1;

    .info {
      margin-right: 20px;
      min-width: 3vw;

      h5 {
        color: rgba(255, 255, 255, 0.64);
        font-size: 0.7vw;
        padding: 0;
        margin: 0;
      }

      p {
        font-size: 0.9vw;
        color: ${(props) => props.color};
        padding: 0;
        margin: 0;
      }
    }

    .infoLarge {
      margin-right: 20px;
      min-width: 5vw;

      h5 {
        color: rgba(255, 255, 255, 0.64);
        font-size: 0.7vw;
        padding: 0;
        margin: 0;
      }

      p {
        font-size: 0.9vw;
        color: ${(props) => props.color};
        padding: 0;
        margin: 0;
      }
    }
  }
`;
