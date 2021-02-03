import {
  createStyles, fade, makeStyles,
} from '@material-ui/core/styles';
import styled from '@material-ui/core/styles/styled';
import { AppBar } from '@material-ui/core';
import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: 30,
    fontFamily: 'Zurich',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'SF Pro',
    margin: 'auto',
  },
  icon: {
    fontSize: 24,
    margin: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    margin: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: 'width 500ms',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '15ch',
    },
    '&:hover': {
      width: '30ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export const StyledAppBar = styled(AppBar)({
  zIndex: theme.zIndex.drawer + 1,
});
