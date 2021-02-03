import styled from '@material-ui/core/styles/styled';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import {
  createStyles, fade, makeStyles,
} from '@material-ui/core/styles';

import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  list: {
    marginRight: 10,
  },
  icon: {
    marginTop: -4,
  },
}));

export const StyledListItem = styled(ListItem)({
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: 7,
  paddingRight: 7,
  borderRadius: 5,
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
});

export const StyledListItemText = styled(ListItemText)({
  '& .MuiListItemText-secondary': {
    fontSize: 20,
    marginLeft: 7,
    color: '#FFFFFF',
  },
});

export const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#212121',
  },
});

export const StyledMenuItem = styled(MenuItem)({
  color: '#FFFFFF',
  backgroundColor: '#212121',
  '& .Mui-selected,&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.16)' },
  },
});

export const StyledTypography = styled(Typography)({
  paddingLeft: '5px',
  fontSize: 22,
  marginTop: '-12px',
});
