import { createStyles, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles(() => createStyles({
  listItem: {
    '& .Mui-selected,&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.16)' },
    },
    marginTop: 7,
  },
  active: {
    borderLeft: '3px solid #E9C46A',
    borderRadius: 3,
    color: '#B1B1B1',
    marginTop: 7,
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.16)' },
  },
}));

export const EmBreve = styled.div`
  border: solid 1px #E9C46A;
  border-radius: 10px;
  color: #E9C46A;
  padding: 0 3px;
`;
