import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { Link } from 'react-router-dom';
import { StyledTab, StyledTabs, useStyles } from './ScrollTabs.styles';

// https://blog.logrocket.com/routes-animation-transitions-in-react-router-v4-9f4788deb964/ for animation
export interface ScrollTabsProps {
    /**
     * Initial Selected Tab value(First = 0, Second = 1...)
     */
    initialTabValue: number;
    /**
     * All tabs labels.
     */
    tabsLabel: string[];
}

/**
 * Scroll tabs for change page inside Ynvisto.
 */
function ScrollTabs(props: ScrollTabsProps) {
  const { initialTabValue, tabsLabel } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(initialTabValue);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          className={classes.styledTabs}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabsLabel.map((tabLabel :string, index) => (
            <StyledTab
              to={`${tabLabel.replace('/', '%20')}`}
              component={Link}
              label={tabLabel}
              key={tabLabel}
              {...a11yProps(index)}
            />
          ))}
        </StyledTabs>
      </AppBar>
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default ScrollTabs;
