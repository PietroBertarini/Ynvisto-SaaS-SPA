import styled from 'styled-components';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export const Main = styled.div`
  width: 100%;
  margin-bottom: 10vh;
  display: flex; 
  flex-direction: column;

  .svgArea {
    text-align: center;
    height: 50vh;
  }

  .buttonArea {
    width: 80vw;
  }
`;

export const useStyles = makeStyles(() => createStyles({
  header: {
    color: '#FFFFFF',
    fontSize: '2.8vw',
    fontFamily: 'Zurich',
  },
  text: {
    color: '#fff',
    fontSize: '1.5vw',
    marginBottom: '20px',
  },
}));
