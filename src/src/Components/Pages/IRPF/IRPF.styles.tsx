import { createStyles, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Title = styled.div`
  color: #fff;
  font-size: 2.8vw;
  font-family: 'Zurich';
  padding-left: 239px;
`;

export const Main = styled.div`
  flex-grow: 1;
  margin-left: 239px;
`;

export const useStyles = makeStyles(() => createStyles({
  header: {
    color: '#FFFFFF',
    fontSize: '2.8vw',
    fontFamily: 'Zurich',
    marginBottom: '2vh',
  },
}));
