import {
  makeStyles, withStyles, Theme,
} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import Tabs from '@material-ui/core/Tabs';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  styledTabs: {
    '& .MuiTabs-scrollButtonsDesktop': {
      color: '#B1B1B1',
      '&:hover': { color: '#FFFFFF' },
    },
    '& .MuiTabs-flexContainer': {
      // justifyContent: 'center', //save for NotScrollBar
    },
  },
}));

interface AntTabProps {
  label: string;
  to:string;
  component: any;

}
export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    maxWidth: '50vw',
    fontSize: '1.6vw',
    color: '#B1B1B1',
    backgroundColor: 'transparent',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#FFFFFF',
      opacity: 1,
    },
    '&$selected': {
      color: '#FFFFFF',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#FFFFFF',
    },
  },
  selected: {},
}))((props: AntTabProps) => <Tab disableRipple {...props} />);

interface StyledProps {
  value: number;
  onChange: any;
  indicatorColor:string;
  textColor:string;
  className: any;
  variant:string;
  scrollButtons:string;
}

export const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      backgroundColor: '#BDA058',
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
})((props: StyledProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
